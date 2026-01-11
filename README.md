# Unita Hospital Website

Professional static website for **Unita Hospital** in Ikotun, Lagos, Nigeria.

## 🏥 About

Unita Hospital is a community hospital providing comprehensive healthcare services including emergency care, maternity services, pediatrics, laboratory services, and more. This website showcases our services, medical team, and makes it easy for patients to get in touch.

## 🚀 Tech Stack

- **Framework:** Nuxt 3 (Vue.js)
- **Styling:** SCSS only (no Tailwind/CSS-in-JS)
- **Animations:** GSAP with ScrollTrigger
- **Forms:** Formspree integration
- **Deployment:** Static generation
- **Node Version:** >=20.17.0

## 📋 Features

- ✅ Fully responsive (mobile-first design)
- ✅ 7 complete pages
- ✅ Smooth GSAP animations
- ✅ SEO optimized
- ✅ Accessibility-focused
- ✅ Contact form integration
- ✅ Google Maps integration
- ✅ HMO/Insurance information
- ✅ Professional design system

## 📁 Project Structure

```
unita-hospital-website/
├── assets/scss/           # SCSS architecture
│   ├── abstracts/         # Variables, mixins
│   ├── base/              # Reset, typography, base styles
│   ├── components/        # Button, card, form styles
│   ├── layout/            # Header, footer, grid styles
│   └── pages/             # Page-specific styles
├── components/
│   ├── layout/            # Header, Footer, MobileNav
│   ├── sections/          # Reusable page sections
│   └── ui/                # UI components (buttons, cards, forms)
├── pages/                 # All 7 website pages
├── composables/           # GSAP animations
├── public/images/         # Static assets
└── nuxt.config.ts         # Nuxt configuration
```

## 🛠️ Setup

### Prerequisites

- Node.js >= 20.17.0
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd unita-hospital-website
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:8000](http://localhost:8000) in your browser.

## 📄 Pages

1. **Homepage** (`/`) - Hero, quick info, services overview, features
2. **About Us** (`/about`) - Hospital story, mission, vision, leadership team
3. **Services** (`/services`) - Complete list of medical services
4. **Medical Team** (`/medical-team`) - Doctors, nurses, staff profiles
5. **Partners** (`/partners`) - Healthcare partner organizations
6. **Insurance** (`/insurance`) - Accepted HMO providers & payment info
7. **Contact** (`/contact`) - Contact form, information, map

## 🎨 Design System

### Colors
- Primary Blue: `#2563EB`
- Light Blue: `#DBEAFE`
- Gray scale: `#F9FAFB` to `#1F2937`
- Success Green: `#10B981`
- Emergency Red: `#EF4444`

### Typography
- Body: Inter
- Headings: Poppins

### Spacing
8px base spacing system (8px, 16px, 24px, 32px, 48px, 64px, 96px)

### Breakpoints
- Mobile: ≤767px
- Tablet: 768px - 1023px
- Desktop: ≥1024px
- Wide: ≥1440px

## 🖼️ Adding Images

Replace placeholder files in `public/images/`:

1. **Logo:** `public/images/logo.png`
2. **Hero Images:** `public/images/hero/`
3. **Doctor Photos:** `public/images/doctors/`
4. **Service Images:** `public/images/services/`
5. **Partner Logos:** `public/images/partners/`
6. **HMO Logos:** `public/images/hmo/`

## 📧 Contact Form Setup

The contact form is ready for [Formspree](https://formspree.io) integration:

1. Create a Formspree account
2. Get your form endpoint ID
3. Update `components/ui/ContactForm.vue`:
```vue
action="https://formspree.io/f/YOUR_FORM_ID"
```

### Alternative: Netlify Forms

Add `data-netlify="true"` attribute to the form tag.

## 🗺️ Google Maps Setup

Update the map embed in `pages/contact.vue` with the exact hospital location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for: "63 Oduduwa Street, Ikotun, Lagos"
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `pages/contact.vue`

## 🚀 Deployment

### Build for Production

Generate static site:
```bash
npm run generate
```

The static files will be in `.output/public/`

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Build settings:
   - Build command: `npm run generate`
   - Publish directory: `.output/public`
4. Deploy!

### Deploy to Vercel

1. Push code to GitHub
2. Import to [Vercel](https://vercel.com)
3. Vercel auto-detects Nuxt configuration
4. Deploy!

## 📱 Contact Information

**Unita Hospital**
- Address: 63 Oduduwa Street, Off Governor's Road, By College Bus Stop, Ikotun, Alimosho, Lagos, Nigeria
- Phone: 08036672587, 08066948982, 08033828172
- Email: unitahospital@gmail.com
- Hours: Mon-Fri 8AM-6PM, Sat-Sun 8AM-4PM, Emergency 24/7

## 🔧 Customization

### Update Hospital Information

Edit contact details in:
- `components/layout/TheFooter.vue`
- `pages/contact.vue`

### Modify Services

Edit service list in:
- `components/sections/ServicesOverview.vue`
- `pages/services.vue`

### Update Team Members

Edit doctor/staff information in:
- `components/sections/DoctorsPreview.vue`
- `pages/medical-team.vue`
- `pages/about.vue`

## 🎯 Performance

- ✅ Static site generation
- ✅ Optimized SCSS
- ✅ Lazy loading ready
- ✅ Respects reduced motion preferences
- ✅ SEO meta tags
- ✅ Semantic HTML

## 🤝 Support

For issues or questions about the website, contact the development team or create an issue in the repository.

## 📄 License

© 2026 Unita Hospital. All rights reserved.

---

**Built with ❤️ for Unita Hospital, Ikotun, Lagos**
