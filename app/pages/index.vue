<template>
  <div class="homepage">
    <HeroSection
      title="Quality Healthcare in Ikotun, Lagos"
      subtitle="Your trusted community hospital providing comprehensive healthcare services with compassion and excellence"
      primary-cta="Book Appointment"
      secondary-cta="Our Services"
      primary-cta-link="/contact"
      secondary-cta-link="/services"
    />

    <section class="quick-info animate-fade-in">
      <div class="container">
        <div class="quick-info-grid">
          <QuickInfoCard
            icon="📍"
            title="Our Location"
            description="63 Oduduwa Street, Ikotun"
            link="/contact"
          />
          <QuickInfoCard
            icon="📞"
            title="Emergency Contact"
            description="08036672587"
            :is-emergency="true"
          />
          <QuickInfoCard
            icon="🏥"
            title="HMO Friendly"
            description="We accept major insurance"
            link="/insurance"
          />
          <QuickInfoCard
            icon="⭐"
            title="Patient Care"
            description="Trusted by our community"
            link="/about"
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
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({
  title: 'Unita Hospital - Quality Healthcare in Ikotun, Lagos',
  meta: [
    {
      name: 'description',
      content: 'Unita Hospital provides comprehensive healthcare services in Ikotun, Lagos. We accept major HMO providers and offer emergency services, maternity care, and more.'
    }
  ]
})

const { initScrollAnimations, cleanupAnimations } = useGsapAnimations()

onMounted(() => {
  initScrollAnimations()
})

onBeforeUnmount(() => {
  cleanupAnimations()
})
</script>
