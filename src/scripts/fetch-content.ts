import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import https from 'node:https';
import { Document as RichTextDocument } from '@contentful/rich-text-types';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');
const IMAGES_DIR = path.join(process.cwd(), 'public/blog');

interface Author {
  name: string;
  role: string;
  imageUrl: string;
}

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  author: Author;
  readingTime: string;
  imageUrl: string;
  content: RichTextDocument;
}

// 下载图片并返回本地路径
async function downloadImage(url: string, slug: string): Promise<string> {
  if (!url) return '';

  // 修复 URL 格式
  const imageUrl = url.startsWith('//') ? `https:${url}` : url;

  // 从 URL 中提取文件名
  const fileName = path.basename(imageUrl.split('?')[0]);
  // 使用文章 slug 作为子目录，避免文件名冲突
  const localPath = path.join(IMAGES_DIR, fileName);
  const publicPath = `/blog/${fileName}`;

  try {
    // 确保目录存在
    await fs.mkdir(IMAGES_DIR, { recursive: true });

    // 下载图片
    await new Promise((resolve, reject) => {
      https.get(imageUrl, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download image: ${response.statusCode}`));
          return;
        }

        const fileStream = fsSync.createWriteStream(localPath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          resolve(true);
        });

        fileStream.on('error', (err) => {
          fs.unlink(localPath).catch(() => {});
          reject(err);
        });
      }).on('error', reject);
    });

    console.log(`Downloaded: ${fileName}`);
    return publicPath;
  } catch (error) {
    console.error(`Error downloading image ${imageUrl}:`, error);
    return imageUrl; // 如果下载失败，返回原始 URL
  }
}

// Convert Rich Text to Markdown
function richTextToMarkdown(document: RichTextDocument): Promise<string> {
  const nodeToMarkdown = async (node: any): Promise<string> => {
    if (!node) return '';

    const { nodeType, content, value, data } = node;

    switch (nodeType) {
      case BLOCKS.PARAGRAPH:
        return `${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n\n`;
      case BLOCKS.HEADING_1:
        return `# ${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n\n`;
      case BLOCKS.HEADING_2:
        return `## ${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n\n`;
      case BLOCKS.HEADING_3:
        return `### ${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n\n`;
      case BLOCKS.HEADING_4:
        return `#### ${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n\n`;
      case BLOCKS.HEADING_5:
        return `##### ${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n\n`;
      case BLOCKS.HEADING_6:
        return `###### ${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n\n`;
      case BLOCKS.UL_LIST:
        return `${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n`;
      case BLOCKS.OL_LIST:
        return `${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n`;
      case BLOCKS.LIST_ITEM:
        return `- ${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n`;
      case BLOCKS.QUOTE:
        return `> ${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n\n`;
      case BLOCKS.HR:
        return '---\n\n';
      case BLOCKS.CODE:
        return `\`\`\`\n${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n\`\`\`\n\n`;
      case BLOCKS.EMBEDDED_ASSET:
        const { title, description, file } = data?.target?.fields || {};
        const alt = description || title || '';
        const localPath = await downloadImage(file?.url || '', '');
        return `![${alt}](${localPath})\n\n`;
      case 'text':
        if (node.marks) {
          return node.marks.reduce((text: string, mark: any) => {
            switch (mark.type) {
              case MARKS.BOLD:
                return `**${text}**`;
              case MARKS.ITALIC:
                return `*${text}*`;
              case MARKS.CODE:
                return `\`${text}\``;
              default:
                return text;
            }
          }, value);
        }
        return value || '';
      default:
        return content ? (await Promise.all(content.map(nodeToMarkdown))).join('') : '';
    }
  };

  return nodeToMarkdown(document);
}

async function fetchAndSaveContent() {
  console.log('开始获取内容');
  
  // 确保目录存在
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  await fs.mkdir(IMAGES_DIR, { recursive: true });

  try {
    // 这里替换为你的内容获取逻辑
    const posts: BlogPost[] = []; // 从你的数据源获取文章

    // 保存每篇文章为 markdown 文件
    for (const post of posts) {
      // 生成 slug
      const slug = post.title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, '-')
        .replace(/^-+|-+$/g, '');

      // 下载封面图片
      const coverImagePath = await downloadImage(post.imageUrl, slug);
      const authorImagePath = await downloadImage(post.author.imageUrl, slug);

      // 转换内容为 Markdown
      const markdownContent = await richTextToMarkdown(post.content);

      // 创建 frontmatter 和内容
      const fileContent = `---
id: ${post.id}
title: "${post.title}"
description: "${post.description}"
date: "${post.date}"
category: "${post.category}"
author:
  name: "${post.author.name}"
  role: "${post.author.role}"
  imageUrl: "${authorImagePath}"
readingTime: "${post.readingTime}"
imageUrl: "${coverImagePath}"
---

${markdownContent}`;

      // 保存文件
      const fileName = `${slug}.md`;
      const filePath = path.join(CONTENT_DIR, fileName);
      await fs.writeFile(filePath, fileContent, 'utf-8');
      console.log(`已保存: ${fileName}`);
    }

    console.log('内容获取并保存成功！');
  } catch (error) {
    console.error('获取和保存内容时出错:', error);
    process.exit(1);
  }
}

// 执行脚本
fetchAndSaveContent(); 