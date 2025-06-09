import { CollectionConfig } from 'payload/types';
import { Field } from 'payload/types';
import { FieldHook } from 'payload/types';

interface PostData {
  title?: string;
  slug?: string;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  [key: string]: any;
}

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const beforeValidateHook: FieldHook = ({ value, data, originalDoc }) => {
  if (value) return value;
  if (data?.title) return generateSlug(data.title);
  if (originalDoc?.title) return generateSlug(originalDoc.title);
  return value;
};

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'author', 'status', 'publishedAt'],
    preview: (doc: Post) => {
      return `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${doc.slug}`;
    },
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: '基本信息',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                placeholder: '文章标题',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              admin: {
                placeholder: '文章描述',
                description: '这段描述会显示在文章列表和搜索结果中',
              },
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
              admin: {
                placeholder: '文章内容',
                elements: ['h2', 'h3', 'h4', 'link', 'blockquote', 'ul', 'ol'],
                leaves: ['bold', 'italic', 'underline', 'code'],
              },
            },
          ],
        },
        {
          label: '媒体',
          fields: [
            {
              name: 'imageUrl',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: '文章封面图片',
              },
            },
            {
              name: 'gallery',
              type: 'array',
              label: '图片集',
              minRows: 0,
              maxRows: 10,
              labels: {
                singular: '图片',
                plural: '图片',
              },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'text',
                  label: '图片说明',
                },
              ],
            },
          ],
        },
        {
          label: '元数据',
          fields: [
            {
              name: 'meta',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Meta 标题',
                  admin: {
                    description: '用于 SEO，如果不填写则使用文章标题',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Meta 描述',
                  admin: {
                    description: '用于 SEO，如果不填写则使用文章描述',
                  },
                },
                {
                  name: 'keywords',
                  type: 'text',
                  label: '关键词',
                  admin: {
                    description: '用逗号分隔的关键词列表',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: '行业动态',
          value: 'industry',
        },
        {
          label: '技术分享',
          value: 'technology',
        },
        {
          label: '公司新闻',
          value: 'company',
        },
        {
          label: '产品更新',
          value: 'product',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'array',
      label: '标签',
      minRows: 0,
      maxRows: 10,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'author',
      type: 'group',
      required: true,
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'imageUrl',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'readingTime',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
        placeholder: '阅读时间（例如：5 min）',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: '草稿',
          value: 'draft',
        },
        {
          label: '已发布',
          value: 'published',
        },
        {
          label: '已归档',
          value: 'archived',
        },
      ],
      admin: {
        position: 'sidebar',
        description: '文章状态将决定是否在网站上显示',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
        description: '发布时间，如果不设置则使用创建时间',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
        description: '文章的 URL 路径，如果不填写则自动根据标题生成',
      },
      hooks: {
        beforeValidate: [beforeValidateHook],
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data.slug && data.title) {
          data.slug = generateSlug(data.title);
        }
        return data;
      },
    ],
  },
  versions: {
    drafts: true,
  },
};

export default Posts; 