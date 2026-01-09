<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <NuxtLink to="/" class="logo">
          <img src="/images/logo.png" alt="Unita Hospital" />
          <span class="logo-text">Unita Hospital</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About Us</NuxtLink>
          <NuxtLink to="/services">Services</NuxtLink>
          <NuxtLink to="/medical-team">Medical Team</NuxtLink>
          <NuxtLink to="/partners">Partners</NuxtLink>
          <NuxtLink to="/insurance">Insurance</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>

        <!-- CTA Button -->
        <BaseButton variant="primary" to="/contact" class="cta-button">
          Book Appointment
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

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

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
