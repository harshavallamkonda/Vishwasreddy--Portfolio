# Deployment Instructions for Netflix Portfolio

## Quick Deployment Options

### Option 1: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `build`
7. Add environment variables in Netlify dashboard:
   - `REACT_APP_DATOCMS_ROR_TOKEN`
   - `REACT_APP_DATOCMS_JAVA_TOKEN`
   - `REACT_APP_DATOCMS_FRONTEND_TOKEN`
   - `REACT_APP_DATOCMS_NODE_TOKEN`
8. Deploy!

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

### Option 4: Manual Static Hosting
1. Use the `build` folder contents
2. Upload to any static hosting service
3. Configure redirects for SPA routing

## Environment Variables Setup
Make sure to set these in your hosting platform:
- `REACT_APP_DATOCMS_ROR_TOKEN`
- `REACT_APP_DATOCMS_JAVA_TOKEN`
- `REACT_APP_DATOCMS_FRONTEND_TOKEN`
- `REACT_APP_DATOCMS_NODE_TOKEN`

## Domain Configuration
Your app supports multiple domains:
- `sumanthsamala.com` (ROR profile)
- `java.sumanthsamala.com` (Java profile)
- `frontend.sumanthsamala.com` (Frontend profile)
- `node.sumanthsamala.com` (Node profile)

Set up DNS records to point these domains to your hosting platform.