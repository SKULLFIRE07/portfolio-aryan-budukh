# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

1. Push your code to the `main` or `master` branch
2. Go to your repository settings → Pages
3. Select "GitHub Actions" as the source
4. The GitHub Actions workflow will automatically build and deploy your site

## Manual Deployment

1. Build the project for production:
   ```bash
   npm run export
   ```

2. Upload the contents of the `dist` folder to your GitHub Pages repository

## GitHub Pages Configuration

### Option 1: Using the same repository
- Repository name: `your-username.github.io`
- The site will be available at: `https://your-username.github.io`

### Option 2: Using a different repository name
- Repository name: `portfolio_aryan` (or any other name)
- The site will be available at: `https://your-username.github.io/portfolio_aryan`

## Environment Variables (if needed)

If you're using environment variables for Sanity or other services, you'll need to add them to your GitHub repository secrets:

1. Go to repository Settings → Secrets and variables → Actions
2. Add your environment variables as repository secrets
3. Update the workflow file to use these secrets

## Troubleshooting

- Make sure your repository has GitHub Pages enabled
- Check that the workflow has the correct permissions to deploy
- Verify that the build completes successfully without errors
