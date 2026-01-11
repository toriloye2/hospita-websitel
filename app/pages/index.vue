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

    <section class="team-cta animate-fade-in">
      <div class="container">
        <div class="team-cta-box">
          <h2>{{ teamTitle }}</h2>
          <p>{{ teamStatement }}</p>
          <BaseButton variant="primary" :to="teamCtaLink">
            {{ teamCtaLabel }}
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import siteData from '~/../data/site.json'
import staffData from '~/../data/staff.json'
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
const teamStatement = staffData.statement
const teamTitle = staffData.previewTitle
const teamCtaLabel = staffData.previewCtaLabel
const teamCtaLink = staffData.previewCtaLink

const { initScrollAnimations, cleanupAnimations } = useGsapAnimations()

onMounted(() => {
  initScrollAnimations()
})

onBeforeUnmount(() => {
  cleanupAnimations()
})
</script>
