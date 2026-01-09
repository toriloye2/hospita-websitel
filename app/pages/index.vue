<template>
  <div class="homepage">
    <HeroSection
      :title="hero.title"
      :subtitle="hero.subtitle"
      :primary-cta="hero.primaryCta"
      :secondary-cta="hero.secondaryCta"
      :primary-cta-link="hero.primaryCtaLink"
      :secondary-cta-link="hero.secondaryCtaLink"
    />

    <section class="quick-info animate-fade-in">
      <div class="container">
        <div class="quick-info-grid">
          <QuickInfoCard
            v-for="item in quickInfo"
            :key="item.title"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
            :link="item.link"
            :is-emergency="item.isEmergency"
          />
        </div>
      </div>
    </section>

    <ServicesOverview />

    <WhyChooseUs />

    <DoctorsPreview />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import siteData from '~/../data/site.json'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({
  title: siteData.seo.home.title,
  meta: [
    {
      name: 'description',
      content: siteData.seo.home.description
    }
  ]
})

const hero = siteData.home.hero
const quickInfo = siteData.home.quickInfo

const { initScrollAnimations, cleanupAnimations } = useGsapAnimations()

onMounted(() => {
  initScrollAnimations()
})

onBeforeUnmount(() => {
  cleanupAnimations()
})
</script>
