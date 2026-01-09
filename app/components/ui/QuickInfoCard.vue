<template>
  <component
    :is="link ? 'NuxtLink' : 'div'"
    :to="link"
    class="quick-info-card card"
    :class="{ 'is-emergency': isEmergency }"
  >
    <div class="quick-info-icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <span v-if="link" class="sr-only">Learn more</span>
  </component>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: null
  },
  isEmergency: {
    type: Boolean,
    default: false
  }
})
</script>
