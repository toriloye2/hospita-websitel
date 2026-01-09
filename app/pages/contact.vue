<template>
  <div class="contact-page">
    <PageHeader
      :title="pageHeader.title"
      :breadcrumb="pageHeader.breadcrumb"
      :subtitle="pageHeader.subtitle"
    />

    <section class="contact-content animate-fade-in">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-wrapper">
            <h2>{{ contactPage.formTitle }}</h2>
            <ContactForm />
          </div>

          <div class="contact-info-wrapper">
            <h2>{{ contactPage.infoTitle }}</h2>

            <div v-for="item in contactInfo" :key="item.title" class="info-section">
              <div class="info-icon">{{ item.icon }}</div>
              <div class="info-content">
                <h3>{{ item.title }}</h3>
                <p>
                  <template v-if="item.lines">
                    <template v-for="(line, index) in item.lines" :key="line">
                      {{ line }}<br v-if="index < item.lines.length - 1" />
                    </template>
                  </template>
                  <template v-else>
                    <template v-for="(link, index) in item.links" :key="link.href">
                      <a :href="link.href">{{ link.label }}</a><br v-if="index < item.links.length - 1" />
                    </template>
                  </template>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="emergency-notice">
      <div class="container">
        <div class="emergency-box">
          <div class="emergency-icon">⚠️</div>
          <div class="emergency-content">
            <h2>{{ emergency.title }}</h2>
            <p>{{ emergency.description }}</p>
            <BaseButton variant="emergency" :href="`tel:${emergency.ctaPhone}`">
              {{ emergency.ctaLabel }}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <h2>{{ contactPage.mapTitle }}</h2>
        <div class="map-wrapper">
          <iframe
            :src="siteMap.embedUrl"
            width="100%"
            height="450"
            style="border:0;"
            :title="siteMap.title"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import siteData from '~/../data/site.json'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({
  title: siteData.seo.contact.title,
  meta: [
    {
      name: 'description',
      content: siteData.seo.contact.description
    }
  ]
})

const pageHeader = siteData.contactPage.pageHeader
const contactPage = siteData.contactPage
const siteMap = siteData.map
const emergency = siteData.emergency

const contactInfo = siteData.contactInfo.map((item) => {
  if (item.type === 'address') {
    return { ...item, lines: siteData.address.lines }
  }

  if (item.type === 'phones') {
    return {
      ...item,
      links: siteData.contact.phones.map((phone) => ({
        label: phone,
        href: `tel:${phone}`
      }))
    }
  }

  if (item.type === 'email') {
    return {
      ...item,
      links: [
        {
          label: siteData.contact.email,
          href: `mailto:${siteData.contact.email}`
        }
      ]
    }
  }

  if (item.type === 'hours') {
    return { ...item, lines: [siteData.hours.label, siteData.hours.description] }
  }

  return item
})

const { initScrollAnimations, cleanupAnimations } = useGsapAnimations()

onMounted(() => {
  initScrollAnimations()
})

onBeforeUnmount(() => {
  cleanupAnimations()
})
</script>
