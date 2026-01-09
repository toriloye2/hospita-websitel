<template>
  <section
    class="hero-section"
    :style="{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #2563EB, #1E40AF)' }"
  >
    <div class="hero-content">
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
      <div class="hero-buttons">
        <BaseButton
          v-if="primaryCta"
          variant="primary"
          :to="primaryCtaLink || '/contact'"
        >
          {{ primaryCta }}
        </BaseButton>
        <BaseButton
          v-if="secondaryCta"
          variant="secondary"
          :to="secondaryCtaLink || '/services'"
        >
          {{ secondaryCta }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: null
  },
  backgroundImage: {
    type: String,
    default: null
  },
  primaryCta: {
    type: String,
    default: null
  },
  primaryCtaLink: {
    type: String,
    default: null
  },
  secondaryCta: {
    type: String,
    default: null
  },
  secondaryCtaLink: {
    type: String,
    default: null
  }
})
</script>
