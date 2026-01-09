# Unita Hospital Website - Deployment Checklist

Use this checklist before deploying your website to ensure everything is ready.

## ✅ Pre-Deployment Checklist

### 1. Content & Images
- [ ] Hospital logo added (`public/images/logo.png`)
- [ ] Doctor/staff photos added (optional but recommended)
- [ ] All text content reviewed and accurate
- [ ] Contact information verified (phone, email, address)
- [ ] Operating hours confirmed
- [ ] Service descriptions reviewed
- [ ] Team member bios reviewed

### 2. Functionality
- [ ] Contact form configured (Formspree or Netlify)
- [ ] Google Maps embed updated with exact location
- [ ] All internal links tested (navigate through all pages)
- [ ] Phone numbers clickable on mobile
- [ ] Email links working
- [ ] All 7 pages accessible

### 3. Technical Setup
- [ ] Dependencies installed (`npm install`)
- [ ] Project builds successfully (`npm run generate`)
- [ ] No console errors in browser
- [ ] Tested on mobile device or browser dev tools
- [ ] Tested on different browsers (Chrome, Safari, Firefox)

### 4. SEO & Meta
- [ ] Page titles unique for each page
- [ ] Meta descriptions present
- [ ] Favicon added
- [ ] Social media preview images (optional)

### 5. Performance
- [ ] Images optimized (not too large)
- [ ] Site loads quickly
- [ ] Animations smooth

## 🚀 Deployment Steps

### Option 1: Netlify (Recommended)

1. **Prepare Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Unita Hospital website"
   ```

2. **Push to GitHub**
   - Create new repository on GitHub
   - Follow GitHub's instructions to push your code

3. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run generate`
     - Publish directory: `.output/public`
   - Click "Deploy site"

4. **Custom Domain (Optional)**
   - In Netlify dashboard, go to "Domain settings"
   - Add your custom domain (e.g., unitahospital.com)
   - Follow DNS configuration instructions

5. **Enable Forms**
   - If using Netlify Forms, they'll be automatically available in your dashboard

### Option 2: Vercel

1. **Prepare Repository** (same as above)

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Nuxt settings
   - Click "Deploy"

3. **Custom Domain**
   - Go to project settings → "Domains"
   - Add your custom domain

## 📋 Post-Deployment Checklist

### Immediate Testing
- [ ] Visit live site URL
- [ ] Test all pages load correctly
- [ ] Submit test form (check if emails arrive)
- [ ] Test on mobile device
- [ ] Check Google Maps displays correctly
- [ ] Click all phone numbers on mobile
- [ ] Test all navigation links

### SEO & Analytics (Optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Add site to Google My Business
- [ ] Share website URL on hospital social media

### Performance Check
- [ ] Test site speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check mobile responsiveness
- [ ] Test on different devices/browsers

## 🔧 Common Deployment Issues

### Issue: Site shows "Page not found"
**Solution:** Check that build command is `npm run generate` and publish directory is `.output/public`

### Issue: Images not showing
**Solution:** Ensure images are in `public/` folder and paths don't include `public/` in code

### Issue: Forms not working
**Solution:**
- Formspree: Check form ID is correct
- Netlify: Ensure `data-netlify="true"` attribute is present

### Issue: Styles not loading
**Solution:** Run `npm run generate` again and redeploy

### Issue: Build fails
**Solution:**
1. Delete `node_modules` and `.nuxt` folders
2. Run `npm install`
3. Run `npm run generate`
4. Try deploying again

## 📱 Contact Information to Share

Once deployed, share these with patients:

- **Website URL:** [Your deployed URL]
- **Contact Page:** [Your URL]/contact
- **Services:** [Your URL]/services
- **Book Appointment:** [Your URL]/contact

## 🔄 Future Updates

To update the website:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Netlify/Vercel will automatically rebuild and deploy

## 📞 Support

If you encounter issues:

1. Check this deployment guide
2. Review CUSTOMIZATION-GUIDE.md
3. Check README.md
4. Contact your web developer

---

## 🎉 Ready to Deploy?

Once you've checked all items above, you're ready to go live!

**Good luck with your hospital website launch! 🏥**
