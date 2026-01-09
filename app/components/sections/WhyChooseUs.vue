<template>
  <section class="why-choose-us">
    <div class="container">
      <h2>Why Choose Unita Hospital</h2>

      <div class="features-grid">
        <FeatureCard
          v-for="feature in features"
          :key="feature.id"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    id: 1,
    icon: '👨‍⚕️',
    title: 'Experienced Medical Team',
    description: 'Our dedicated doctors and nurses bring years of expertise and compassionate care to every patient interaction.'
  },
  {
    id: 2,
    icon: '🏥',
    title: 'Modern Facilities',
    description: 'State-of-the-art medical equipment and comfortable facilities ensure the highest quality of care and patient comfort.'
  },
  {
    id: 3,
    icon: '💳',
    title: 'Insurance Accepted',
    description: 'We accept major HMO providers including Hygeia, AIICO, Clearline, and Reliance Health for your convenience.'
  },
  {
    id: 4,
    icon: '❤️',
    title: 'Community Care',
    description: 'As a trusted community hospital, we are committed to serving Ikotun and surrounding areas with integrity and excellence.'
  }
]
</script>
