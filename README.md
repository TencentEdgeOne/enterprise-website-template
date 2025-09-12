# Enterprise Website Template

A modern enterprise website template built with Next.js and Tailwind CSS, supporting static site generation (SSG).

## Technology Stack

- **Frontend Framework**: Next.js 15.3.1+
- **Style Scheme**: Tailwind CSS V4
- **UI Components**: shadcn/ui
- **Type System**: TypeScript
- **Code Standards**: ESLint + Prettier

## Features

- 📱 Responsive design, perfectly adapted to various devices
- 🎨 Modern UI design, based on the shadcn/ui component library
- 🚀 Static site generation (SSG), excellent performance
- 🔍 SEO friendly
- 💻 TypeScript support, providing complete type definitions

## Page List

- 🏠 Homepage (`/`)
- 📄 About Us (`/about`)
- 🛠️ Service Introduction (`/services`)
- 📰 News Center (`/news`)
- 📝 Blog (`/blog`)
- 👥 Team Introduction (`/team`)
- 💼 Job List (`/careers`)
- 📞 Contact Us (`/contact`)
- 🚀 Get Started (`/get-started`)

## Quick Start

1. **Clone the project**

```bash
git clone [project address]
cd [project directory]
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Build the production version**

```bash
npm run build
# or
yarn build
```

## Integrating with CMS(Optional)
The project provides a script to integrate with Contentful CMS, which can pull blog data from Contentful to Markdown.

The project provides a data structure that can be directly [imported](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/) into Contentful:
`contentful space import --content-file contentful-export.json --space-id ${your-space-id}`

Configure environment variables locally:

## Project Structure

```
├── public/          # Static resources
├── src/
│   ├── components/  # Components
│   │   ├── cards/   # Card components
│   │   ├── layouts/ # Layout components
│   │   └── ui/      # UI components
│   ├── config/      # Configuration files
│   ├── pages/       # Pages
│   └── styles/      # Style files
├── .eslintrc.js    # ESLint configuration
├── .prettierrc     # Prettier configuration
├── next.config.js  # Next.js configuration
└── tailwind.config.js # Tailwind configuration
```

## Configuration File Explanation

The project uses multiple configuration files to manage data:

- `config/articles.ts`: Blog article data
- `config/careers.ts`: Job information
- `config/get-started.ts`: Quick start guide
- `config/team.ts`: Team member information

## Development Guidelines

### Component Development Standards

1. Develop all components using TypeScript
2. Use PascalCase for component naming
3. Ensure proper Props type definitions are added
4. Follow the project's established style guidelines

### Style Development Standards

1. Prioritize using Tailwind CSS class names
2. Follow responsive design principles
3. Maintain consistency in color and spacing

### Page Development Standards

1. Use the MainLayout component as the page layout
2. Implement appropriate SEO optimization
3. Ensure responsive performance on pages

## Deployment Instructions

The project uses static site generation (SSG), which can be deployed to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. The generated static files are located in the `out` directory

3. Deploy the `out` directory to your hosting service

## Contribution Guidelines

1. Fork the project
2. Create a feature branch
3. Submit changes
4. Push to the branch
5. Create a Pull Request

## License

[MIT License](https://github.com/TencentEdgeOne/enterprise-website-template/blob/main/LICENSE)

## Deploy
[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.tencentcloud.com/edgeone/pages/new?template=enterprise-website-template)
