<template>
  <div class="doctor-card card" :class="{ 'doctor-card--featured': isFeatured }">
    <img
      v-if="photo"
      :src="photo"
      :alt="name"
      class="doctor-photo"
    />
    <div v-else class="doctor-photo" style="background: linear-gradient(135deg, #DBEAFE, #2563EB);"></div>

    <div class="doctor-info">
      <h3>{{ name }}</h3>
      <p class="doctor-title">{{ title }}</p>
      <p v-if="specialization" class="doctor-specialization">{{ specialization }}</p>
      <p v-if="bio" class="doctor-bio">{{ bio }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  photo: {
    type: String,
    default: null
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    default: null
  },
  bio: {
    type: String,
    default: null
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
})
</script>
