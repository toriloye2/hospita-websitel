# 🚀 Quick Start Guide

Get the Unita Hospital website running in 3 simple steps!

## Step 1: Install Dependencies

Open your terminal in this folder and run:

```bash
npm install
```

This will install:
- Nuxt 3
- Vue 3
- GSAP (animations)
- SASS (styling)

**Wait time:** 1-2 minutes depending on your internet speed.

## Step 2: Start Development Server

```bash
npm run dev
```

The website will start at: **http://localhost:8000**

Open this URL in your browser to see the website!

## Step 3: Make Changes (Optional)

While the dev server is running, any changes you make will automatically update in the browser.

Try editing:
- `pages/index.vue` - Homepage content
- `components/layout/TheHeader.vue` - Header/navigation
- `assets/scss/abstracts/_variables.scss` - Colors and styles

## 📱 View on Mobile

While dev server is running:
1. Find your computer's IP address
2. Open `http://YOUR-IP:8000` on your phone
3. Make sure phone and computer are on same WiFi

Or use browser DevTools:
1. Press F12 in browser
2. Click "Toggle Device Toolbar" (phone icon)
3. Select a device to preview

## 🎨 Next Steps

1. ✅ Website is running locally
2. 📖 Read [README.md](README.md) for full documentation
3. 🖼️ Add your photos (see [CUSTOMIZATION-GUIDE.md](CUSTOMIZATION-GUIDE.md))
4. 📧 Configure contact form
5. 🗺️ Update Google Maps
6. 🚀 Deploy! (see [DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md))

## ⚡ Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run generate

# Preview production build
npm run preview
```

## ❓ Troubleshooting

### Error: "command not found: npm"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org) (version 20 or higher)

### Error: "Cannot find module..."
**Solution:** Delete `node_modules` folder and run `npm install` again

### Port 8000 already in use
**Solution:** Either:
- Close other apps using port 8000, or
- Run: `npm run dev -- --port 3001` (uses port 3001 instead)

### Changes not showing up
**Solution:**
1. Save the file (Ctrl+S / Cmd+S)
2. Refresh browser (Ctrl+R / Cmd+R)
3. Check terminal for errors

## 📞 Need Help?

1. Check the error message in terminal
2. Read [README.md](README.md)
3. Check [CUSTOMIZATION-GUIDE.md](CUSTOMIZATION-GUIDE.md)
4. Contact your web developer

---

**You're ready to go! Start with `npm install` and then `npm run dev`** 🎉
