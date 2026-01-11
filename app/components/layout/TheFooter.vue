<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <div class="footer-logo">
            <img :src="logoUrl" alt="" aria-hidden="true" />
            <span>{{ site.name }}</span>
          </div>
          <p class="footer-tagline">
            {{ site.tagline }}
          </p>
          <p class="footer-description">
            {{ site.description }}
          </p>
        </div>

        <div class="footer-column">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li v-for="item in navItems" :key="item.to">
              <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Contact Us</h3>
          <div class="contact-info">
            <p>
              <strong>Address:</strong><br>
              <template v-for="(line, index) in site.address.lines" :key="line">
                {{ line }}<br v-if="index < site.address.lines.length - 1" />
              </template>
            </p>
            <p>
              <strong>Phone:</strong><br>
              <template v-for="(phone, index) in site.contact.phones" :key="phone">
                <a :href="`tel:${phone}`">{{ phone }}</a><br v-if="index < site.contact.phones.length - 1" />
              </template>
            </p>
            <p>
              <strong>Email:</strong><br>
              <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
            </p>
            <p>
              <strong>Hours:</strong><br>
              {{ site.hours.label }}
            </p>
          </div>
        </div>

        <div class="footer-column">
          <h3>Insurance Partners</h3>
          <div class="hmo-logos">
            <div v-for="provider in providers" :key="provider.id" class="hmo-logo">
              {{ provider.name }}
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ currentYear }} {{ site.name }}. All rights reserved.
        </p>
        <div class="social-links">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            :aria-label="link.label"
          >
            <svg
              v-if="iconMap[link.icon]"
              class="social-icon"
              :viewBox="iconMap[link.icon].viewBox"
              aria-hidden="true"
              focusable="false"
            >
              <path
                v-for="path in iconMap[link.icon].paths"
                :key="path"
                :d="path"
              />
            </svg>
            <span v-else>{{ link.label }}</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import insuranceData from '~/../data/insurance.json'
import siteData from '~/../data/site.json'
import logoUrl from '~/assets/images/unitalogo.jpeg'

const site = siteData
const navItems = site.nav
const providers = insuranceData.providers
const socialLinks = site.social
const currentYear = new Date().getFullYear()
const iconMap = {
  facebook: {
    viewBox: '0 0 24 24',
    paths: [
      'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'
    ]
  },
  twitter: {
    viewBox: '0 0 24 24',
    paths: [
      'M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.13 9.13 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.24-3.95 4.66A12.94 12.94 0 0 1 1.64.89a4.48 4.48 0 0 0 1.39 6.01A4.41 4.41 0 0 1 .96 6.1v.06a4.52 4.52 0 0 0 3.62 4.43 4.5 4.5 0 0 1-2.03.08 4.52 4.52 0 0 0 4.22 3.13A9.05 9.05 0 0 1 0 19.54 12.86 12.86 0 0 0 7 21.5c8.38 0 12.95-7.07 12.95-13.2 0-.2 0-.39-.02-.58A9.2 9.2 0 0 0 23 3z'
    ]
  },
  instagram: {
    viewBox: '0 0 24 24',
    paths: [
      'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z',
      'M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8z',
      'M17.5 6.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z'
    ]
  }
}
</script>
