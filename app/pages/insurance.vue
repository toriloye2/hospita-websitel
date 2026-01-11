<template>
  <div class="insurance-page">
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

    <section class="hmo-partners animate-fade-in">
      <div class="container">
        <h2>{{ providersTitle }}</h2>
        <div class="stagger-cards hmo-grid">
          <div v-for="provider in providers" :key="provider.id" class="hmo-card card">
            <a
              class="hmo-card-link"
              :href="provider.website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="hmo-logo-placeholder">
                <span>{{ provider.logoText }}</span>
              </div>
              <h3>{{ provider.name }}</h3>
            </a>
            <p>{{ provider.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="payment-info animate-fade-in">
      <div class="container">
        <div class="payment-sections">
          <div class="payment-section">
            <h2>{{ paymentOptionsTitle }}</h2>
            <ul>
              <li v-for="option in paymentOptions" :key="option.title">
                <strong>{{ option.title }}:</strong> {{ option.description }}
              </li>
            </ul>
          </div>

          <div class="payment-section">
            <h2>{{ insuranceStepsTitle }}</h2>
            <ol>
              <li v-for="step in insuranceSteps" :key="step">{{ step }}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="insurance-cta animate-fade-in">
      <div class="container">
        <div class="cta-box">
          <h2>{{ cta.title }}</h2>
          <p>{{ cta.description }}</p>
          <div class="cta-buttons">
            <BaseButton variant="primary" :to="cta.primaryLink">{{ cta.primaryLabel }}</BaseButton>
            <BaseButton variant="secondary" :href="cta.secondaryLink">
              {{ cta.secondaryLabel }}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import insuranceData from '~/../data/insurance.json'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({
  title: insuranceData.seo.title,
  meta: [
    {
      name: 'description',
      content: insuranceData.seo.description
    }
  ]
})

const pageHeader = insuranceData.pageHeader
const intro = insuranceData.intro
const providers = insuranceData.providers
const paymentOptions = insuranceData.paymentOptions
const insuranceSteps = insuranceData.insuranceSteps
const providersTitle = insuranceData.providersTitle
const paymentOptionsTitle = insuranceData.paymentOptionsTitle
const insuranceStepsTitle = insuranceData.insuranceStepsTitle
const cta = insuranceData.cta

const { initScrollAnimations, cleanupAnimations } = useGsapAnimations()

onMounted(() => {
  initScrollAnimations()
})

onBeforeUnmount(() => {
  cleanupAnimations()
})
</script>
