<template>
  <section
    class="hero-section"
    :style="{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #2563EB, #1E40AF)' }"
  >
    <div class="hero-content">
      <h1>
        <span ref="headlineEl">{{ activeHeadline }}</span>
      </h1>
      <p>{{ subheadline }}</p>
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
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
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
  },
  headlines: {
    type: Array,
    default: null
  }
})

const defaultHeadlines = [
  'Trusted Community Healthcare in Ikotun, Lagos',
  'Compassionate Care for Individuals and Families',
  'Quality Healthcare Led by Experienced Professionals'
]
const defaultSubheadline = 'Compassionate care, experienced leadership, and reliable services for your family.'
const currentIndex = ref(0)
const headlineEl = ref(null)
const rotationHeadlines = computed(() => {
  if (Array.isArray(props.headlines) && props.headlines.length) {
    return props.headlines
  }
  return defaultHeadlines
})
const activeHeadline = computed(() => rotationHeadlines.value[currentIndex.value] || props.title)
const subheadline = computed(() => defaultSubheadline)

let intervalId

onMounted(() => {
  if (typeof window === 'undefined') return
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  intervalId = window.setInterval(() => {
    if (!headlineEl.value) return

    gsap.to(headlineEl.value, {
      opacity: 0,
      y: -12,
      duration: 2.5,
      onComplete: () => {
        currentIndex.value = (currentIndex.value + 1) % rotationHeadlines.value.length

        gsap.fromTo(
          headlineEl.value,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.3 }
        )
      }
    })
  }, 3000)
})

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
