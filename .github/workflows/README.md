# GitHub Actions CI/CD Pipeline

This folder contains automated workflows that run when you push code to GitHub.

## Current Workflows

### `build.yml` - Build & Test Pipeline

**Triggers:**
- Every push to the `main` branch
- Every pull request targeting `main`
- Manual trigger from GitHub Actions tab

**What it does:**

1. **Build Job** (runs in parallel)
   - Checks out your code
   - Installs Node.js and dependencies
   - Runs ESLint to check code quality
   - Builds your Next.js application
   - Uploads build artifacts (you can download them from GitHub)

2. **Code Quality Job** (runs in parallel)
   - Type checks with TypeScript
   - Checks code formatting with Prettier

## How to View Build Status

1. Go to your repository on GitHub
2. Click the "Actions" tab
3. See all workflow runs with ✅ success or ❌ failure status

## How to Download Build Artifacts

1. Open any successful workflow run
2. Scroll to the "Artifacts" section at the bottom
3. Download `nextjs-build.zip` to inspect the built application

## Learning Experiments You Can Try

### 1. **Add automated tests**
```yaml
- name: Run tests
  run: npm test
```

### 2. **Add build caching** (makes builds faster)
```yaml
- name: Cache Next.js build
  uses: actions/cache@v4
  with:
    path: .next/cache
    key: ${{ runner.os }}-nextjs-${{ hashFiles('package-lock.json') }}
```

### 3. **Deploy to your homelab**
Add a deployment job that:
- Builds a Docker image
- Pushes to your server via SSH
- Triggers a container restart

Example:
```yaml
deploy:
  needs: build
  runs-on: ubuntu-latest
  steps:
    - name: Deploy to homelab
      run: |
        # Install SSH key from GitHub secrets
        # rsync build to your server
        # Or: docker build and push to registry
```

### 4. **Matrix builds** (test multiple Node versions)
```yaml
strategy:
  matrix:
    node-version: [18, 20, 22]
```

### 5. **Scheduled builds** (test nightly)
```yaml
on:
  schedule:
    - cron: '0 0 * * *'  # Runs at midnight UTC daily
```

## Using GitHub Secrets

For deployment or API keys:
1. Go to Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add secrets like `SSH_PRIVATE_KEY`, `DEPLOY_HOST`, etc.
4. Reference in workflow: `${{ secrets.SSH_PRIVATE_KEY }}`

## Next Steps

Once you're comfortable with the basics, you can:
- [ ] Add automated testing
- [ ] Set up deployment to your server
- [ ] Add Docker image building
- [ ] Set up notifications (Slack, Discord, email)
- [ ] Add performance testing
- [ ] Set up preview deployments for PRs

## Useful Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js CI/CD Guide](https://nextjs.org/docs/pages/building-your-application/deploying/ci-build-caching)
- [Workflow Syntax Reference](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
