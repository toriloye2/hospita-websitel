<template>
  <div class="services-page">
    <PageHeader
      :title="pageHeader.title"
      :breadcrumb="pageHeader.breadcrumb"
      :subtitle="pageHeader.subtitle"
    />

    <section class="services-grid animate-fade-in">
      <div class="container">
        <div class="stagger-cards services-grid-layout">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            class="card"
          />
        </div>
      </div>
    </section>

    <section class="extended-services animate-fade-in">
      <div class="container">
        <div class="extended-callout">
          <h2>{{ extendedServices.title }}</h2>
          <p>{{ extendedServices.description }}</p>

          <div class="partner-services">
            <div
              v-for="item in extendedServices.items"
              :key="item.title"
              class="partner-service"
            >
              <h3>{{ item.icon }} {{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <NuxtLink :to="item.link" class="learn-more">{{ item.linkLabel }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import servicesData from '~/../data/services.json'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({
  title: servicesData.seo.title,
  meta: [
    {
      name: 'description',
      content: servicesData.seo.description
    }
  ]
})

const pageHeader = servicesData.pageHeader
const services = servicesData.services
const extendedServices = servicesData.extendedServices

const { initScrollAnimations, cleanupAnimations } = useGsapAnimations()

onMounted(() => {
  initScrollAnimations()
})

onBeforeUnmount(() => {
  cleanupAnimations()
})
</script>
