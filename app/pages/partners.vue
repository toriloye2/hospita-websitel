<template>
  <div class="partners-page">
    <PageHeader
      :title="pageHeader.title"
      :breadcrumb="pageHeader.breadcrumb"
      :subtitle="pageHeader.subtitle"
    />

    <section class="intro animate-fade-in">
      <div class="container">
        <p class="intro-text">
          {{ intro }}
        </p>
      </div>
    </section>

    <section class="partners-list animate-fade-in">
      <div class="container">
        <div class="stagger-cards partners-grid">
          <PartnerCard
            v-for="partner in partners"
            :key="partner.id"
            class="card"
          >
            <template #logo>
              <div class="partner-logo-placeholder">{{ partner.logoPlaceholder }}</div>
            </template>
            <template #name>
              <h2>{{ partner.name }}</h2>
            </template>
            <template #services>
              <h3>{{ partner.servicesTitle }}</h3>
              <ul>
                <li v-for="item in partner.services" :key="item">{{ item }}</li>
              </ul>
            </template>
            <template #why-partner>
              <h3>{{ partner.whyTitle }}</h3>
              <ul>
                <li v-for="item in partner.whyPartner" :key="item">{{ item }}</li>
              </ul>
            </template>
            <template #access>
              <div class="access-info">
                <strong>{{ accessLabel }}:</strong>
                <p>{{ partner.access }}</p>
              </div>
            </template>
          </PartnerCard>
        </div>
      </div>
    </section>

    <section class="benefits animate-fade-in">
      <div class="container">
        <h2>{{ benefitsTitle }}</h2>
        <div class="benefits-grid">
          <div v-for="benefit in benefits" :key="benefit.id" class="benefit-item">
            <div class="icon">{{ benefit.icon }}</div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import partnersData from '~/../data/partners.json'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({
  title: partnersData.seo.title,
  meta: [
    {
      name: 'description',
      content: partnersData.seo.description
    }
  ]
})

const pageHeader = partnersData.pageHeader
const intro = partnersData.intro
const partners = partnersData.partners
const accessLabel = partnersData.accessLabel
const benefitsTitle = partnersData.benefitsTitle
const benefits = partnersData.benefits

const { initScrollAnimations, cleanupAnimations } = useGsapAnimations()

onMounted(() => {
  initScrollAnimations()
})

onBeforeUnmount(() => {
  cleanupAnimations()
})
</script>
