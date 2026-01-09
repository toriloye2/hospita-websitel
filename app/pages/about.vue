<template>
  <div class="about-page">
    <PageHeader
      :title="pageHeader.title"
      :breadcrumb="pageHeader.breadcrumb"
    />

    <section class="our-story animate-fade-in">
      <div class="container">
        <h2>{{ about.titles.story }}</h2>
        <div class="story-content">
          <p v-for="paragraph in about.story" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <div class="mission-vision">
          <div class="mission">
            <h3>{{ about.titles.mission }}</h3>
            <p>{{ about.mission }}</p>
          </div>
          <div class="vision">
            <h3>{{ about.titles.vision }}</h3>
            <p>{{ about.vision }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="management-team animate-fade-in">
      <div class="container">
        <h2>{{ about.titles.leadership }}</h2>
        <div class="management-grid">
          <div v-for="leader in leadership" :key="leader.id" class="team-member">
            <div class="photo-placeholder"></div>
            <h3>{{ leader.name }}</h3>
            <p class="role">{{ leader.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="facilities animate-fade-in">
      <div class="container">
        <h2>{{ about.titles.facilities }}</h2>
        <div class="facilities-grid">
          <div v-for="facility in about.facilities" :key="facility.title" class="facility-item">
            <div class="icon">{{ facility.icon }}</div>
            <h3>{{ facility.title }}</h3>
            <p>{{ facility.description }}</p>
          </div>
        </div>

        <div class="photo-gallery">
          <div class="gallery-placeholder">{{ about.galleryPlaceholder }}</div>
        </div>
      </div>
    </section>

    <section class="commitment animate-fade-in">
      <div class="container">
        <div class="commitment-box">
          <h2>{{ about.titles.commitment }}</h2>
          <p>
            {{ about.commitment }}
          </p>
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
  title: siteData.seo.about.title,
  meta: [
    {
      name: 'description',
      content: siteData.seo.about.description
    }
  ]
})

const about = siteData.about
const pageHeader = siteData.about.pageHeader
const leadership = staffData.leadership

const { initScrollAnimations, cleanupAnimations } = useGsapAnimations()

onMounted(() => {
  initScrollAnimations()
})

onBeforeUnmount(() => {
  cleanupAnimations()
})
</script>
