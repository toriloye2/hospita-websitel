<template>
  <section class="doctors-preview">
    <div class="container">
      <h2>{{ previewTitle }}</h2>

      <div class="doctors-grid">
        <DoctorCard
          v-for="doctor in doctors"
          :key="doctor.id"
          :photo="doctor.photo"
          :name="doctor.name"
          :title="doctor.title"
          :specialization="doctor.specialization"
          :bio="doctor.bio"
        />
      </div>

      <div class="view-team-button">
        <BaseButton variant="primary" :to="previewCtaLink">
          {{ previewCtaLabel }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import staffData from '~/../data/staff.json'

const doctors = staffData.preview
const previewTitle = staffData.previewTitle
const previewCtaLabel = staffData.previewCtaLabel
const previewCtaLink = staffData.previewCtaLink
</script>
