# Deployment Guide for Render

This guide will help you deploy the Valentine's App to Render.

## Prerequisites

- GitHub account (https://github.com)
- Render account (https://render.com)
- Git installed on your local machine

## Deployment Steps

### Step 1: Initialize Git Repository

If not already done, initialize git in the project directory:

```bash
cd valentine-app
git init
git add .
git commit -m "Initial commit: Valentine's Day app ready for deployment"
```

### Step 2: Push to GitHub

1. Create a new repository on GitHub at https://github.com/new
2. Copy the repository URL

3. Add the remote and push:

```bash
git remote add origin https://github.com/YOUR-USERNAME/valentine-app.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Render

1. Go to https://render.com and sign in (create account if needed)
2. Click **"New +"** button in the top right
3. Select **"Web Service"**
4. Choose **"Connect a repository"** and select your GitHub repository
5. Fill in the service details:
   - **Name**: valentine-app
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build` (should auto-populate)
   - **Start Command**: `npm start` (should auto-populate)
   - **Plan**: Free (or upgrade to paid)
6. Click **"Create Web Service"**

### Step 4: Configure Environment Variables (Optional)

If needed, add environment variables in Render:
1. Go to your service dashboard
2. Click **"Environment"**
3. Add any required environment variables
4. Click **"Save"**

## What Render Will Do

1. **Detect** your render.yaml configuration
2. **Install** dependencies via npm
3. **Build** your Vite app (creates optimized dist/ folder)
4. **Serve** using Vite's preview server on port 3000

## Live URL

Once deployed, your app will be available at:
```
https://your-app-name.onrender.com
```

Replace `your-app-name` with the actual service name you chose.

## Important Notes

### Free Plan
- App will auto-pause after 15 minutes of inactivity
- Takes ~30 seconds to wake up on first request
- Great for testing and development

### Pay-as-you-go Plan
- No auto-pause
- Continuous uptime
- Better for production use

## Redeployment

After pushing changes to GitHub:
1. Render will automatically detect the push
2. Will trigger a new build and deployment
3. Changes will be live within minutes

## Troubleshooting

### Build fails with "npm: command not found"
- Make sure Node.js 18.x is specified in package.json engines field
- Check that package.json exists in root directory

### Application shows error on first load
- Free tier may be waking up from idle state
- Wait 30-60 seconds and refresh the page

### Routes not working
- Make sure react-router-dom is installed
- Check that render.yaml has correct buildCommand and startCommand

## Support

- Render Documentation: https://render.com/docs
- Vite Documentation: https://vitejs.dev
- React Documentation: https://react.dev
