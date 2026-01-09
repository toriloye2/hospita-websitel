<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <div class="footer-logo">
            <img src="/images/logo.png" alt="" aria-hidden="true" />
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
            {{ link.icon }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import insuranceData from '~/../data/insurance.json'
import siteData from '~/../data/site.json'

const site = siteData
const navItems = site.nav
const providers = insuranceData.providers
const socialLinks = site.social
const currentYear = new Date().getFullYear()
</script>
