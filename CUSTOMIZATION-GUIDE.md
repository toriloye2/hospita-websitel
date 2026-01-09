# Unita Hospital Website - Customization Guide

This guide will help you customize and maintain your hospital website.

## 🖼️ Adding Hospital Photos

### Logo
1. Prepare your hospital logo as a PNG file (recommended size: 200x200px)
2. Name it `logo.png`
3. Replace the file at: `public/images/logo.png`

### Doctor & Staff Photos
1. Take professional photos of doctors and staff
2. Recommended size: 800x800px (square format)
3. Save photos in: `public/images/doctors/`
   - Example: `dr-oriloye.jpg`, `alhaja-mulikat.jpg`, etc.
4. Update photo paths in these files:
   - `components/sections/DoctorsPreview.vue` (line 51, 59, 67)
   - `pages/medical-team.vue` (line 16, 29, 44, 56, 68)
   - `pages/about.vue` (line 29, 41)

### Hero/Background Images
1. Take wide photos of the hospital exterior/interior
2. Recommended size: 1920x1080px (landscape)
3. Save in: `public/images/hero/`
4. Update in `pages/index.vue` if you want to use real photos

## 📧 Contact Form Setup

### Option 1: Formspree (Recommended)
1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account
3. Create a new form
4. Copy your form ID (looks like `xyzabc123`)
5. Open `components/ui/ContactForm.vue`
6. Find line 4 and replace `YOUR_FORM_ID` with your actual ID:
   ```vue
   action="https://formspree.io/f/xyzabc123"
   ```

### Option 2: Netlify Forms
1. Open `components/ui/ContactForm.vue`
2. Add `data-netlify="true"` to the `<form>` tag:
   ```vue
   <form
     class="contact-form"
     data-netlify="true"
     name="contact"
     @submit.prevent="handleSubmit"
   >
   ```
3. Forms will be available in your Netlify dashboard after deployment

## 🗺️ Google Maps Integration

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for exact address: **63 Oduduwa Street, Ikotun, Lagos**
3. Click the "Share" button
4. Select "Embed a map" tab
5. Copy the entire `<iframe>` code
6. Open `pages/contact.vue`
7. Find the map section (around line 88)
8. Replace the existing iframe with your copied code

## 👥 Updating Team Information

### Adding New Doctors/Staff
1. Open `pages/medical-team.vue`
2. Find the relevant section (medical-staff or nursing-team)
3. Add a new `<DoctorCard>` component:
   ```vue
   <DoctorCard
     :photo="null"  <!-- Replace with actual path later -->
     name="Dr. New Doctor"
     title="Medical Doctor"
     specialization="Cardiology"
     bio="Brief bio about the doctor..."
   />
   ```

### Removing Team Members
1. Open the same file
2. Find the `<DoctorCard>` component for that person
3. Delete the entire component block

## 📝 Updating Services

### Adding New Services
1. Open `pages/services.vue`
2. Find the `services` array (around line 29)
3. Add a new service object:
   ```javascript
   {
     id: 13,
     icon: '🩺',  // Choose appropriate emoji
     title: 'New Service Name',
     description: 'Description of the new service...'
   }
   ```

### Removing Services
1. Find the service in the array
2. Delete the entire object (including the comma)

## 🏥 Updating Hospital Information

### Contact Details
If any contact information changes, update these files:

1. **Footer** - `components/layout/TheFooter.vue`
   - Lines 38-57 (contact information section)

2. **Contact Page** - `pages/contact.vue`
   - Lines 22-70 (contact information cards)

### Operating Hours
Update in the same files mentioned above, look for the "Operating Hours" sections.

## 🤝 Updating Partners & Insurance

### Adding New HMO/Insurance Provider
1. Open `pages/insurance.vue`
2. Find the `hmo-grid` section (around line 22)
3. Add a new HMO card:
   ```vue
   <div class="hmo-card card">
     <div class="hmo-logo-placeholder">
       <span>New HMO</span>
     </div>
     <h3>New HMO Name</h3>
     <p>Description of the HMO provider.</p>
   </div>
   ```
4. Also update the footer: `components/layout/TheFooter.vue` (around line 62)

### Adding New Healthcare Partner
1. Open `pages/partners.vue`
2. Find the partners-grid section (around line 23)
3. Duplicate a `<PartnerCard>` and update the information

## 🚀 Deploying Updates

After making changes:

### Local Testing
```bash
npm run dev
```
Visit http://localhost:3000 to preview changes

### Deploy to Production
```bash
npm run generate
```

Then:
- **Netlify**: Push to GitHub (auto-deploys)
- **Vercel**: Push to GitHub (auto-deploys)
- **Manual**: Upload `.output/public/` folder to your hosting

## ❓ Common Questions

### Q: How do I change the colors?
A: Edit `assets/scss/abstracts/_variables.scss`

### Q: The logo doesn't show up
A: Make sure the file is named exactly `logo.png` and is in `public/images/`

### Q: Forms aren't working
A: Check that you've set up Formspree or Netlify Forms correctly

### Q: How do I add a new page?
A: Create a new `.vue` file in the `pages/` folder. Nuxt will automatically create a route for it.

### Q: Mobile menu not working
A: This should work automatically. If not, check browser console for errors.

## 📞 Need Help?

Contact your web developer or refer to:
- [Nuxt Documentation](https://nuxt.com)
- [Vue Documentation](https://vuejs.org)
- README.md file in this project

---

**Keep this guide handy for future updates!**
