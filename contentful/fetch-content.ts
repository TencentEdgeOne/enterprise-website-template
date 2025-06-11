import type { Document as RichTextDocument, Block } from '@contentful/rich-text-types';
import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { loadEnv } from './env';
import { getContentfulClient } from './contentful';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import https from 'node:https';

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');
const IMAGES_DIR = path.join(process.cwd(), "public/blog");

// 定义作者类型
interface AuthorFields extends EntrySkeletonType {
  contentTypeId: 'author';
  fields: {
    name: EntryFields.Text;
    role: EntryFields.Text;
    image: Asset;
  };
}

// 更新 Blog 类型
interface BlogFields extends EntrySkeletonType {
  contentTypeId: "blog";
  fields: {
    title: EntryFields.Text;
    content: RichTextDocument;
    date: EntryFields.Date;
    description: EntryFields.Text;
    imageUrl: Asset;
    slug: EntryFields.Text;
    category: EntryFields.Text;
    author: Entry<AuthorFields>;
    language: EntryFields.Text;
    readingTime?: EntryFields.Text;
  };
}

// 下载图片并返回本地路径
async function downloadImage(url: string, slug: string): Promise<string> {
  if (!url) return '';

  // 修复 URL 格式
  const imageUrl = url.startsWith('//') ? `https:${url}` : url;

  // 从 URL 中提取文件名
  const fileName = path.basename(imageUrl.split('?')[0]);
  // 使用文章 slug 作为子目录，避免文件名冲突
  const localDir = path.join(IMAGES_DIR, slug);
  const localPath = path.join(localDir, fileName);
  const publicPath = `/blog/${slug}/${fileName}`;

  try {
    // 确保目录存在
    await fs.mkdir(localDir, { recursive: true });

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
function richTextToMarkdown(document: RichTextDocument, slug: string): Promise<string> {
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
      case 'code-block':
        return `\`\`\`\n${(await Promise.all(content?.map(nodeToMarkdown) || [])).join('') || ''}\n\`\`\`\n\n`;
      case BLOCKS.EMBEDDED_ASSET:
        const { title, description, file } = data?.target?.fields || {};
        const alt = description || title || '';
        // 下载图片并获取本地路径
        const localPath = await downloadImage(file?.url || '', slug);
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
  // Check environment variables
  if (
    !process.env.CONTENTFUL_SPACE_ID ||
    !process.env.CONTENTFUL_DELIVERY_TOKEN
  ) {
    console.log(
      'Contentful environment variables not set, skipping markdown fetch',
    );
    return;
  }

  console.log('Fetching content from Contentful');
  
  // 确保目录存在
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  await fs.mkdir(IMAGES_DIR, { recursive: true });

  try {
    const client = getContentfulClient();
    if (!client) {
      throw new Error('Failed to initialize Contentful client');
    }

    // Get all blog
    const entries = await client.getEntries<BlogFields['fields']>({
      content_type: 'blog',
    });

    // Save each post as a markdown file
    for (const entry of entries.items) {
      const {
        title,
        content,
        date,
        description,
        slug,
        category,
        author,
        imageUrl,
        readingTime,
      } = entry.fields as BlogFields["fields"];

      // Convert Rich Text to Markdown
      const markdownContent = await richTextToMarkdown(content, slug);

      // 下载作者头像和文章封面图片
      const authorImage = author?.fields?.image;
      const authorImageUrl = authorImage?.fields?.file?.url || "";
      const coverImage = imageUrl?.fields?.file;
      const coverImageUrl = coverImage?.url || "";
      
      const localAuthorImage = await downloadImage(authorImageUrl, `authors/${slug}`);
      const localCoverImage = await downloadImage(coverImageUrl, slug);

      // Create frontmatter and content
      const fileContent = `---
id: ${entry.sys.id}
title: "${title}"
description: "${description || ""}"
date: "${date || entry.sys.createdAt}"
updated: "${entry.sys.updatedAt}"
category: "${category || ""}"
tags: ${JSON.stringify(entry.metadata.tags.map((tag) => tag.sys.id))}
draft: ${!entry.sys.publishedVersion}
author:
  name: "${author?.fields?.name || ""}"
  role: "${author?.fields?.role || ""}"
  imageUrl: "${localAuthorImage}"
readingTime: "${readingTime || ""}"
imageUrl: "${localCoverImage}"
---

${markdownContent}`;
      // Save file with language code in the name
      const fileName = `${slug}.md`;
      const filePath = path.join(CONTENT_DIR, fileName);
      await fs.writeFile(filePath, fileContent, 'utf-8');
      console.log(`Saved: ${fileName}`);
    }

    console.log('Content successfully fetched and saved!');
  } catch (error) {
    console.error('Error fetching and saving content:', error);
    process.exit(1);
  }
}

// Execute script
loadEnv();
fetchAndSaveContent();
