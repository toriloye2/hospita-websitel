<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'emergency', 'ghost'].includes(value)
  },
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Boolean,
    default: false
  }
})

const buttonClasses = computed(() => [
  'btn',
  `btn--${props.variant}`,
  {
    'btn--icon': props.icon
  }
])
</script>
