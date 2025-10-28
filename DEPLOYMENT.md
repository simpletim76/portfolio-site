# Deployment Guide

This portfolio site can be deployed to multiple platforms. Choose based on your needs.

---

## 🚀 Quick Deployment: Vercel (5 Minutes)

Vercel is made by the creators of Next.js and offers zero-config deployment.

### Steps to Deploy:

1. **Go to [vercel.com](https://vercel.com)**

2. **Sign in with GitHub** (use your simpletim76 account)

3. **Import your repository**:
   - Click "Add New..." → "Project"
   - Find `simpletim76/portfolio-site`
   - Click "Import"

4. **Configure project** (or use defaults):
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

5. **Click "Deploy"**
   - Wait 2-3 minutes for initial build
   - You'll get a live URL: `portfolio-site-xxxxx.vercel.app`

6. **Add custom domain** (optional):
   - Go to Project Settings → Domains
   - Add your domain (e.g., `yourname.com`)
   - Follow DNS configuration instructions
   - Vercel provides free HTTPS automatically

### What Happens Next:

✅ **Automatic deployments**: Every push to `main` auto-deploys
✅ **Preview deployments**: PRs get unique preview URLs
✅ **Build logs**: See builds in Vercel dashboard
✅ **Analytics**: Built-in traffic & performance metrics
✅ **Edge network**: Global CDN for fast loading worldwide

### Environment Variables (if needed):

1. Go to Project Settings → Environment Variables
2. Add any secrets (API keys, database URLs, etc.)
3. Available in your app via `process.env.YOUR_VAR_NAME`

---

## 🏠 Homelab Deployment (For Learning)

Deploy to your own server for complete control and learning experience.

### Prerequisites:

- Linux server (Ubuntu/Debian recommended)
- Docker installed
- Domain or Cloudflare Tunnel for public access
- GitHub repository access

### Method 1: Docker Deployment

#### 1. Create Dockerfile (already in repo)

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

#### 2. Create docker-compose.yml

```yaml
version: '3.8'

services:
  portfolio:
    build: .
    container_name: portfolio-site
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    networks:
      - web

networks:
  web:
    external: true
```

#### 3. Deploy to your server

```bash
# On your server
git clone https://github.com/simpletim76/portfolio-site.git
cd portfolio-site

# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Site available at http://your-server-ip:3000
```

### Method 2: PM2 (Process Manager)

```bash
# On your server
git clone https://github.com/simpletim76/portfolio-site.git
cd portfolio-site

# Install dependencies and build
npm install
npm run build

# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start npm --name "portfolio" -- start

# Save PM2 configuration
pm2 save
pm2 startup

# Monitor
pm2 status
pm2 logs portfolio
```

### Method 3: Automated with GitHub Actions

Add deployment step to `.github/workflows/build.yml`:

```yaml
deploy-homelab:
  needs: build
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'

  steps:
    - name: Deploy to homelab via SSH
      uses: appleboy/ssh-action@v1.0.0
      with:
        host: ${{ secrets.DEPLOY_HOST }}
        username: ${{ secrets.DEPLOY_USER }}
        key: ${{ secrets.SSH_PRIVATE_KEY }}
        script: |
          cd /opt/portfolio-site
          git pull origin main
          npm install
          npm run build
          pm2 restart portfolio
```

### Expose via Cloudflare Tunnel

```bash
# Install cloudflared
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb

# Authenticate
cloudflared tunnel login

# Create tunnel
cloudflared tunnel create portfolio-site

# Configure tunnel
cat > ~/.cloudflared/config.yml <<EOF
tunnel: <TUNNEL_ID>
credentials-file: /home/user/.cloudflared/<TUNNEL_ID>.json

ingress:
  - hostname: yoursite.com
    service: http://localhost:3000
  - service: http_status:404
EOF

# Run as service
cloudflared service install
sudo systemctl start cloudflared
sudo systemctl enable cloudflared
```

### Monitoring & Updates

```bash
# Check status
pm2 status
# or
docker-compose ps

# Update deployment
git pull origin main
npm install
npm run build
pm2 restart portfolio
# or
docker-compose up -d --build

# View logs
pm2 logs portfolio
# or
docker-compose logs -f
```

---

## 📊 Comparison

| Feature | Vercel | Homelab |
|---------|--------|---------|
| Setup time | 5 minutes | 1-2 hours |
| Cost | Free tier | Server costs |
| HTTPS/SSL | Automatic | Manual/Cloudflare |
| CDN | Included | None (or setup) |
| Auto-deploy | ✅ Built-in | Setup needed |
| Control | Limited | Complete |
| Learning | Minimal | Maximum |
| Scalability | Automatic | Manual |

---

## 🎯 Recommended Workflow

1. **Deploy to Vercel now** - Get live immediately
2. **Share the URL** - Show friends, portfolio viewers
3. **Experiment with homelab** - Learn Docker, deployment, CI/CD
4. **Run both** - Production on Vercel, staging on homelab
5. **Compare** - See performance, reliability differences

---

## 🔧 Troubleshooting

### Vercel Issues
- **Build fails**: Check build logs in Vercel dashboard
- **404 errors**: Ensure `next.config.ts` is correct
- **Env vars**: Set in Vercel project settings

### Homelab Issues
- **Port 3000 in use**: `lsof -i :3000` to find process
- **Permission denied**: Check file ownership and Docker permissions
- **Build fails**: Ensure Node 18+ installed, enough RAM (2GB+)
- **Can't access externally**: Check firewall rules, Cloudflare Tunnel config

---

## 📚 Next Steps

After deploying:
- [ ] Set up custom domain
- [ ] Configure analytics (Vercel Analytics or Plausible)
- [ ] Add monitoring (UptimeRobot, Better Stack)
- [ ] Set up automated backups
- [ ] Add performance monitoring
- [ ] Configure CDN for homelab (Cloudflare)
