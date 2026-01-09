<template>
  <div class="services-page">
    <PageHeader
      title="Our Medical Services"
      breadcrumb="Home > Services"
      subtitle="Comprehensive healthcare services for your family"
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
          <h2>Extended Services Through Our Partners</h2>
          <p>In addition to our in-house services, we provide access to specialized care through trusted partners:</p>

          <div class="partner-services">
            <div class="partner-service">
              <h3>🔬 Laboratory Services</h3>
              <p>Comprehensive diagnostic testing via Biochem Laboratories</p>
              <NuxtLink to="/partners" class="learn-more">Learn More →</NuxtLink>
            </div>

            <div class="partner-service">
              <h3>🦷 Dental Care</h3>
              <p>Professional dental services through our dental partner</p>
              <NuxtLink to="/partners" class="learn-more">Learn More →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({
  title: 'Our Services - Unita Hospital',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive medical services including emergency care, maternity, pediatrics, laboratory, pharmacy, and more at Unita Hospital, Ikotun, Lagos.'
    }
  ]
})

const services = [
  {
    id: 1,
    icon: '👨‍⚕️',
    title: 'General Consultation',
    description: 'Comprehensive medical consultations for all ages. Our doctors provide thorough examinations and personalized treatment plans.'
  },
  {
    id: 2,
    icon: '🚨',
    title: 'Emergency Services',
    description: '24/7 emergency care for urgent medical situations. Quick response and immediate medical attention when you need it most.'
  },
  {
    id: 3,
    icon: '🤱',
    title: 'Maternity & Childbirth',
    description: 'Complete maternity care from pregnancy through delivery. Safe, supportive environment for mothers and newborns.'
  },
  {
    id: 4,
    icon: '👶',
    title: 'Pediatric Care',
    description: 'Specialized healthcare for infants, children, and adolescents. Gentle, child-friendly medical services.'
  },
  {
    id: 5,
    icon: '🔬',
    title: 'Laboratory Services',
    description: 'Comprehensive diagnostic testing and analysis. Fast, accurate results for informed medical decisions.'
  },
  {
    id: 6,
    icon: '💊',
    title: 'Pharmacy',
    description: 'Fully stocked pharmacy with essential medications. Convenient access to prescribed and over-the-counter medicines.'
  },
  {
    id: 7,
    icon: '⚕️',
    title: 'Minor Surgery',
    description: 'Safe, professional minor surgical procedures in a sterile environment with experienced medical staff.'
  },
  {
    id: 8,
    icon: '🤰',
    title: 'Antenatal Care',
    description: 'Comprehensive prenatal care and monitoring. Regular checkups to ensure healthy pregnancy and development.'
  },
  {
    id: 9,
    icon: '👩‍🍼',
    title: 'Postnatal Care',
    description: 'Post-delivery care for mothers and babies. Support for recovery and newborn health monitoring.'
  },
  {
    id: 10,
    icon: '💉',
    title: 'Vaccinations',
    description: 'Essential immunizations for children and adults. Protect your family with recommended vaccines.'
  },
  {
    id: 11,
    icon: '📋',
    title: 'Health Screenings',
    description: 'Preventive health assessments and early disease detection. Regular screenings for optimal health maintenance.'
  },
  {
    id: 12,
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Planning',
    description: 'Counseling and services for family planning decisions. Professional guidance on reproductive health.'
  }
]

const { initScrollAnimations, cleanupAnimations } = useGsapAnimations()

onMounted(() => {
  initScrollAnimations()
})

onBeforeUnmount(() => {
  cleanupAnimations()
})
</script>
