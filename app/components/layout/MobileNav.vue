<template>
  <div class="mobile-nav" :class="{ 'is-open': isOpen }">
    <div class="mobile-nav-header">
      <NuxtLink to="/" class="logo" :aria-label="site.name" @click="close">
        <img :src="logoUrl" alt="" aria-hidden="true" />
        <span>{{ site.name }}</span>
      </NuxtLink>

      <button class="close-button" @click="close" aria-label="Close menu">
        &times;
      </button>
    </div>

    <nav class="mobile-nav-links">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        @click="close"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <div class="mobile-nav-cta">
      <BaseButton variant="primary" :to="cta.link" @click="close">
        {{ cta.label }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import siteData from '~/../data/site.json'
import logoUrl from '~/assets/images/unitalogo.jpeg'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
const site = siteData
const navItems = site.nav
const cta = {
  label: site.home.hero.primaryCta,
  link: site.home.hero.primaryCtaLink
}

const close = () => {
  emit('close')
}
</script>
