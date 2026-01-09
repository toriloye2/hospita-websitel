# Troubleshooting Guide

Common issues and solutions for the Unita Hospital website.

## Build/Dev Server Errors

### Error: "Cannot find module '@/assets/scss/main.scss'"

**Cause:** Path alias configuration issue

**Solution:**
1. Check `nuxt.config.ts` uses `~/` not `@/` for asset paths
2. Verify the file exists at `assets/scss/main.scss`
3. Delete `.nuxt` folder and restart:
   ```bash
   rm -rf .nuxt
   npm run dev
   ```

### Error: "SCSS compilation failed"

**Cause:** SCSS syntax error or missing import

**Solution:**
1. Check all `.scss` files for syntax errors
2. Ensure all `@import` statements use correct paths
3. Verify `sass` package is installed:
   ```bash
   npm install sass --save-dev
   ```

### Error: "gsap is not defined"

**Cause:** GSAP package not installed

**Solution:**
```bash
npm install gsap
```

### Error: "Port 3000 is already in use"

**Cause:** Another app is using port 3000

**Solution:**
- Kill the other process, or
- Use a different port:
  ```bash
  npm run dev -- --port 3001
  ```

## Component Errors

### Error: "Component not found"

**Cause:** Nuxt auto-import not recognizing component

**Solution:**
1. Ensure component is in `components/` folder
2. Component name matches file name (case-sensitive)
3. Restart dev server
4. Check component syntax is valid Vue 3

### Error: "useHead is not defined"

**Cause:** Using Nuxt 3 composable incorrectly

**Solution:**
- Already imported automatically in Nuxt 3
- Just use `useHead()` directly in `<script setup>`

## Styling Issues

### Styles not applying

**Cause:** SCSS not loading or CSS specificity

**Solution:**
1. Check browser DevTools console for errors
2. Verify `main.scss` is imported in `nuxt.config.ts`
3. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
4. Check for typos in class names

### Mobile styles not working

**Cause:** Viewport meta tag or media query issue

**Solution:**
1. Verify viewport meta tag in `nuxt.config.ts`:
   ```ts
   { name: 'viewport', content: 'width=device-width, initial-scale=1' }
   ```
2. Test responsive design in browser DevTools
3. Check SCSS mixins are used correctly

## Animation Issues

### GSAP animations not running

**Cause:** Animation not initialized or ScrollTrigger issue

**Solution:**
1. Check `onMounted()` is called in page component
2. Verify `useGsapAnimations()` composable imported
3. Check browser console for errors
4. Ensure elements have correct class names (`.animate-fade-in`, `.stagger-cards`)

### Animations choppy/laggy

**Cause:** Performance issue or too many animations

**Solution:**
1. Reduce number of animated elements
2. Use `will-change` CSS property sparingly
3. Check browser DevTools Performance tab
4. Test on different devices

## Deployment Issues

### Build fails with "Out of memory"

**Cause:** Not enough memory for build process

**Solution:**
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run generate
```

### Generated site shows blank page

**Cause:** JavaScript error or routing issue

**Solution:**
1. Check browser console for errors
2. Verify all pages have valid routes
3. Check `nitro.preset: 'static'` in config
4. Test locally with:
   ```bash
   npm run generate
   npm run preview
   ```

### Images not loading on deployed site

**Cause:** Incorrect image paths

**Solution:**
1. Ensure images are in `public/` folder
2. Use paths without `public/` prefix:
   - ✅ Correct: `/images/logo.png`
   - ❌ Wrong: `/public/images/logo.png`
3. Check image files are committed to git

### Form not submitting

**Cause:** Form endpoint not configured

**Solution:**
1. **Formspree:** Add your form ID to `ContactForm.vue`
2. **Netlify Forms:** Add `data-netlify="true"` attribute
3. Check network tab in DevTools for errors

## Performance Issues

### Slow page load

**Cause:** Large images or too many assets

**Solution:**
1. Optimize images (compress, resize)
2. Use WebP format for images
3. Enable lazy loading
4. Check Network tab in DevTools

### Slow animations

**Cause:** Too many simultaneous animations

**Solution:**
1. Reduce stagger delay
2. Limit animated elements
3. Use `prefers-reduced-motion` media query

## Common Development Mistakes

### Forgot to install dependencies
```bash
npm install
```

### Forgot to restart dev server after config change
```bash
# Stop server (Ctrl+C)
npm run dev
```

### Using wrong Node version
```bash
node --version  # Should be >= 20.17.0
```

### Git ignored important files
- Check `.gitignore` doesn't exclude needed files
- Ensure `public/images/` folder structure exists

## Still Having Issues?

1. **Clear everything and start fresh:**
   ```bash
   rm -rf node_modules .nuxt .output
   npm install
   npm run dev
   ```

2. **Check error messages carefully:**
   - Read the full error in terminal
   - Check browser console (F12)
   - Look for line numbers and file names

3. **Search for the error:**
   - Copy error message
   - Search on Google or Stack Overflow
   - Check Nuxt 3 documentation

4. **Review documentation:**
   - README.md
   - CUSTOMIZATION-GUIDE.md
   - DEPLOYMENT-CHECKLIST.md
   - [Nuxt 3 Docs](https://nuxt.com/docs)

5. **Contact your developer:**
   - Provide full error message
   - Screenshot of error
   - Steps to reproduce

## Quick Fixes Checklist

When something goes wrong, try these in order:

- [ ] Check terminal for error messages
- [ ] Check browser console (F12)
- [ ] Restart dev server (Ctrl+C, then `npm run dev`)
- [ ] Clear `.nuxt` folder (`rm -rf .nuxt`)
- [ ] Reinstall dependencies (`rm -rf node_modules && npm install`)
- [ ] Check Node version (`node --version`)
- [ ] Clear browser cache (Ctrl+Shift+R)
- [ ] Try different browser
- [ ] Check file paths are correct
- [ ] Verify all files are saved

---

Most issues can be resolved by restarting the dev server or clearing caches! 🔄
