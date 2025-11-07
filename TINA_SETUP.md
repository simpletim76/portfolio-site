# Tina CMS Setup Guide

This project uses [Tina CMS](https://tina.io) for blog post management. Tina provides a visual editor for your MDX blog posts that works seamlessly with your Git workflow.

## Features

- Visual rich-text editor for blog content
- Form-based editing for metadata (title, date, description, tags, cover image)
- Real-time preview while editing
- Image upload and management
- All changes commit directly to your Git repository
- Works with your existing MDX files in `content/blog/`

## Local Development (No Sign-Up Required)

For local development, Tina runs in "local mode" without requiring any cloud credentials:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

3. Access the CMS:
   ```
   http://localhost:3000/admin
   ```

4. Edit your blog posts using the visual editor. Changes are saved directly to your MDX files.

## Production Setup (Vercel + Tina Cloud)

For production deployment on Vercel, you'll need to set up Tina Cloud for authentication and security.

### Step 1: Create a Tina Cloud Account

1. Go to https://app.tina.io/register
2. Sign up for a free account (free tier includes 2 users)
3. Click "Create a project"

### Step 2: Connect Your Repository

1. In Tina Cloud, click "Connect to GitHub"
2. Select your `portfolio-site` repository
3. Choose the branch you want Tina to commit to (usually `main`)

### Step 3: Get Your Credentials

After creating the project, Tina will provide you with:
- **Client ID** - A public identifier (starts with a random string)
- **Read-Only Token** - A secret token for authentication

### Step 4: Add Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

   **Variable 1:**
   - Name: `NEXT_PUBLIC_TINA_CLIENT_ID`
   - Value: Your Client ID from Tina Cloud
   - Environments: Production, Preview, Development

   **Variable 2:**
   - Name: `TINA_TOKEN`
   - Value: Your Read-Only Token from Tina Cloud
   - Environments: Production, Preview, Development

4. Click "Save"

### Step 5: Redeploy

1. Trigger a new deployment in Vercel (or merge your PR to trigger auto-deployment)
2. Once deployed, visit `https://your-site.vercel.app/admin`
3. Authenticate with your Tina Cloud account

## How It Works in Production

1. **Access the CMS**: Visit `https://your-site.vercel.app/admin`
2. **Authenticate**: Log in with your Tina Cloud credentials
3. **Edit Content**: Make changes to blog posts using the visual editor
4. **Save**: Click "Save" - Tina commits changes to your GitHub repository
5. **Auto-Deploy**: Vercel detects the commit and automatically redeploys your site

## Content Schema

Your blog posts support the following fields:

- **Title** (required) - Post title
- **Date** (required) - Publication date
- **Description** (required) - Short description for SEO and post previews
- **Tags** (optional) - Array of tags (e.g., "web development", "react", "tutorial")
- **Cover Image** (optional) - Featured image URL (stored in `/public/images/`)
- **Body** (required) - Rich-text content with support for:
  - Headings (H1-H6)
  - Bold, italic, code formatting
  - Links and images
  - Code blocks with syntax highlighting
  - Lists (ordered and unordered)
  - Blockquotes

## File Structure

```
portfolio-site/
├── content/
│   └── blog/              # Your MDX blog posts
│       └── *.mdx          # Individual blog posts
├── tina/
│   ├── config.ts          # Tina configuration and schema
│   └── __generated__/     # Auto-generated Tina files (gitignored)
├── public/
│   ├── admin/             # Tina admin UI (generated, gitignored)
│   └── images/            # Uploaded images
└── .env.example           # Environment variable template
```

## Troubleshooting

### CMS shows "Client not configured" error

Make sure your environment variables are set correctly in Vercel:
- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`

### Changes aren't committing to GitHub

1. Verify your Tina Cloud project is connected to the correct repository
2. Check that Tina has permission to commit to your repository
3. Ensure you're authenticated in the CMS

### Build fails on Vercel

The build requires `TINA_TOKEN` to be set. Make sure it's added to your Vercel environment variables for all environments.

## Pricing

Tina Cloud offers:
- **Free tier**: 2 users, unlimited projects
- **Paid tiers**: More users and advanced features

For personal portfolios, the free tier is usually sufficient.

## Additional Resources

- [Tina CMS Documentation](https://tina.io/docs/)
- [Tina Cloud Dashboard](https://app.tina.io)
- [Tina Community Discord](https://discord.com/invite/zumN63Ybpf)

## Alternative: Self-Hosted Tina

If you prefer to self-host without Tina Cloud, see the [self-hosted documentation](https://tina.io/docs/self-hosted/overview/).
