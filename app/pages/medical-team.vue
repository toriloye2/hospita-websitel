<template>
  <div class="medical-team-page">
    <PageHeader
      :title="pageHeader.title"
      :breadcrumb="pageHeader.breadcrumb"
      :subtitle="pageHeader.subtitle"
    />

    <section class="medical-staff animate-fade-in">
      <div class="container">
        <h2>{{ leadershipTitle }}</h2>
        <div class="doctors-grid">
          <DoctorCard
            v-for="leader in leadership"
            :key="leader.id"
            :photo="leader.photo"
            :name="leader.name"
            :title="leader.title"
          />
        </div>
      </div>
    </section>

    <section v-if="statement" class="team-statement animate-fade-in">
      <div class="container">
        <div class="statement-box">
          <p>
            {{ statement }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import staffData from '~/../data/staff.json'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({
  title: staffData.seo.title,
  meta: [
    {
      name: 'description',
      content: staffData.seo.description
    }
  ]
})

const pageHeader = staffData.pageHeader
const leadershipTitle = staffData.sections.leadershipTitle
const leadership = staffData.leadership
const statement = staffData.statement

const { initScrollAnimations, cleanupAnimations } = useGsapAnimations()

onMounted(() => {
  initScrollAnimations()
})

onBeforeUnmount(() => {
  cleanupAnimations()
})
</script>
