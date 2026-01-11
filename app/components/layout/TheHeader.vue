<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <NuxtLink to="/" class="logo" :aria-label="site.name">
          <img :src="logoUrl" alt="" aria-hidden="true" />
          <span class="logo-text">{{ site.name }}</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- CTA Button -->
        <BaseButton variant="primary" :to="cta.link" class="cta-button">
          {{ cta.label }}
        </BaseButton>

        <!-- Mobile Menu Toggle -->
        <button
          class="mobile-menu-toggle"
          :class="{ 'is-active': isMobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <MobileNav :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import siteData from '~/../data/site.json'
import logoUrl from '~/assets/images/unitalogo.jpeg'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const site = siteData
const navItems = site.nav
const cta = {
  label: site.home.hero.primaryCta,
  link: site.home.hero.primaryCtaLink
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
