<template>
  <section class="services-overview">
    <div class="container">
      <h2>{{ overviewTitle }}</h2>

      <div class="services-grid">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :icon="service.icon"
          :title="service.title"
          :description="service.shortDescription || service.description"
        />
      </div>

      <div class="view-all-button">
        <BaseButton variant="primary" to="/services">
          {{ overviewCtaLabel }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import servicesData from '~/../data/services.json'

const services = servicesData.services.filter((service) => service.featured)
const overviewTitle = servicesData.overviewTitle
const overviewCtaLabel = servicesData.overviewCtaLabel
</script>
