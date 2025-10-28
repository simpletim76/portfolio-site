# Personal Portfolio Website

A modern, Apple-inspired portfolio website built with Next.js 14+, featuring parallax effects, a blog system, and showcasing projects in Docker, Homelab, Cybersecurity, Music, and Presentations.

## Features

- **Apple-inspired Design**: Minimal, clean aesthetics with glassmorphism effects
- **Parallax Scrolling**: Smooth, engaging scroll animations using Framer Motion
- **MDX Blog System**: Write blog posts in Markdown with React components
- **Fully Responsive**: Optimized for all device sizes
- **Type-Safe**: Built with TypeScript for better developer experience
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Self-Hosted Ready**: Designed to run on local servers with Cloudflare Tunnel

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Content**: MDX with gray-matter
- **Code Quality**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-site/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with nav & footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components (Nav, Footer)
│   ├── sections/         # Page sections (Hero, Projects, etc.)
│   ├── blog/             # Blog-related components
│   └── ui/               # Reusable UI components
├── content/              # Content files
│   ├── blog/            # MDX blog posts
│   └── projects/        # Project data
├── lib/                 # Utility functions
│   ├── utils.ts        # General utilities
│   ├── mdx.ts          # MDX parsing utilities
│   └── constants.ts    # Site configuration
├── public/             # Static assets
│   └── images/        # Image files
└── mdx-components.tsx # MDX component overrides
```

## Configuration

### Site Settings

Update `lib/constants.ts` with your personal information:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Name - Developer & Creator',
  description: 'Your description...',
  url: 'https://yoursite.com',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    twitter: '@yourhandle',
    github: 'yourusername',
  },
}
```

### Writing Blog Posts

Create MDX files in `content/blog/` with frontmatter:

```mdx
---
title: "Your Post Title"
date: "2025-10-27"
description: "Brief description"
tags: ["tag1", "tag2"]
coverImage: "/images/blog/cover.jpg"
---

Your content here...
```

## Deployment

### Docker Deployment

A Dockerfile will be created in Phase 5 for containerized deployment.

### Cloudflare Tunnel

1. Install cloudflared on your server
2. Configure tunnel to point to your local server (port 3000 or production port)
3. Set up GitHub webhooks for automatic deployments

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Phase 1 Status: ✅ Complete

- [x] Next.js project initialization with TypeScript
- [x] Tailwind CSS configuration
- [x] Framer Motion setup
- [x] MDX integration
- [x] ESLint & Prettier configuration
- [x] Project directory structure
- [x] Basic layout (Navigation & Footer)
- [x] Global styles with Apple-inspired design tokens

## Next Steps (Phase 2)

- Create Apple-inspired UI components
- Implement parallax hero section
- Build project showcase sections
- Create content sections for different project categories

## License

MIT

## Contact

For questions or collaboration opportunities, reach out via the contact form on the website or email directly.
