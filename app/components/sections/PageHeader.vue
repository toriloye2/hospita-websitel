<template>
  <section class="page-header">
    <div class="container">
      <div class="page-header-content">
        <p v-if="breadcrumb" class="breadcrumb">{{ breadcrumb }}</p>
        <h1>{{ title }}</h1>
        <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  breadcrumb: {
    type: String,
    default: null
  },
  subtitle: {
    type: String,
    default: null
  },
  backgroundImage: {
    type: String,
    default: null
  }
})
</script>
