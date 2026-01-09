<template>
  <section class="services-overview">
    <div class="container">
      <h2>Our Services</h2>

      <div class="services-grid">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
      </div>

      <div class="view-all-button">
        <BaseButton variant="primary" to="/services">
          View All Services →
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    icon: '👨‍⚕️',
    title: 'General Consultation',
    description: 'Comprehensive medical consultations for all ages'
  },
  {
    id: 2,
    icon: '🚨',
    title: 'Emergency Services',
    description: '24/7 emergency care for urgent medical situations'
  },
  {
    id: 3,
    icon: '🤱',
    title: 'Maternity Care',
    description: 'Complete care from pregnancy through delivery'
  },
  {
    id: 4,
    icon: '👶',
    title: 'Pediatric Care',
    description: 'Specialized healthcare for infants and children'
  },
  {
    id: 5,
    icon: '🔬',
    title: 'Laboratory Services',
    description: 'Comprehensive diagnostic testing and analysis'
  },
  {
    id: 6,
    icon: '💊',
    title: 'Pharmacy',
    description: 'Fully stocked pharmacy with essential medications'
  },
  {
    id: 7,
    icon: '⚕️',
    title: 'Minor Surgery',
    description: 'Safe, professional minor surgical procedures'
  },
  {
    id: 8,
    icon: '🤰',
    title: 'Antenatal Care',
    description: 'Comprehensive prenatal care and monitoring'
  }
]
</script>
