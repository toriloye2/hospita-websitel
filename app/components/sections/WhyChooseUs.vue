<template>
  <section class="why-choose-us">
    <div class="container">
      <h2>{{ title }}</h2>

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
import siteData from '~/../data/site.json'

const features = siteData.whyChooseUs
const title = siteData.whyChooseUsTitle
</script>
