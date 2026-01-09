<template>
  <div class="mobile-nav" :class="{ 'is-open': isOpen }">
    <div class="mobile-nav-header">
      <NuxtLink to="/" class="logo" @click="close">
        <img src="/images/logo.png" alt="Unita Hospital" />
        <span>Unita Hospital</span>
      </NuxtLink>

      <button class="close-button" @click="close" aria-label="Close menu">
        &times;
      </button>
    </div>

    <nav class="mobile-nav-links">
      <NuxtLink to="/" @click="close">Home</NuxtLink>
      <NuxtLink to="/about" @click="close">About Us</NuxtLink>
      <NuxtLink to="/services" @click="close">Services</NuxtLink>
      <NuxtLink to="/medical-team" @click="close">Medical Team</NuxtLink>
      <NuxtLink to="/partners" @click="close">Partners</NuxtLink>
      <NuxtLink to="/insurance" @click="close">Insurance</NuxtLink>
      <NuxtLink to="/contact" @click="close">Contact</NuxtLink>
    </nav>

    <div class="mobile-nav-cta">
      <BaseButton variant="primary" to="/contact" @click="close">
        Book Appointment
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>
