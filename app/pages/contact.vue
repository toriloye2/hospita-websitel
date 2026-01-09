<template>
  <div class="contact-page">
    <PageHeader
      title="Contact Us"
      breadcrumb="Home > Contact"
      subtitle="Get in touch with Unita Hospital"
    />

    <section class="contact-content animate-fade-in">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <ContactForm />
          </div>

          <!-- Contact Information -->
          <div class="contact-info-wrapper">
            <h2>Contact Information</h2>

            <div class="info-section">
              <div class="info-icon">📍</div>
              <div class="info-content">
                <h3>Address</h3>
                <p>
                  63 Oduduwa Street<br>
                  Off Governor's Road<br>
                  By College Bus Stop<br>
                  Ikotun, Alimosho<br>
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <div class="info-section">
              <div class="info-icon">📞</div>
              <div class="info-content">
                <h3>Phone Numbers</h3>
                <p>
                  <a href="tel:08036672587">08036672587</a><br>
                  <a href="tel:08066948982">08066948982</a><br>
                  <a href="tel:08033828172">08033828172</a>
                </p>
              </div>
            </div>

            <div class="info-section">
              <div class="info-icon">📧</div>
              <div class="info-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:unitahospital@gmail.com">unitahospital@gmail.com</a>
                </p>
              </div>
            </div>

            <div class="info-section">
              <div class="info-icon">⏰</div>
              <div class="info-content">
                <h3>Operating Hours</h3>
                <p>
                  <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM<br>
                  <strong>Saturday - Sunday:</strong> 8:00 AM - 4:00 PM<br>
                  <strong>Emergency:</strong> 24/7
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
            <h2>In Case of Emergency</h2>
            <p>Call us immediately or visit our location for urgent medical attention</p>
            <BaseButton variant="emergency" href="tel:08036672587">
              Call Now: 08036672587
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <h2>Find Us</h2>
        <div class="map-wrapper">
          <!-- Google Maps Embed -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.265!3d6.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzMnMDAuMCJOIDPCsDE1JzU0LjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="450"
            style="border:0;"
            title="Unita Hospital location map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <!-- Note: Replace with actual Google Maps embed URL for exact location -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({
  title: 'Contact Us - Unita Hospital',
  meta: [
    {
      name: 'description',
      content: 'Contact Unita Hospital in Ikotun, Lagos. Call 08036672587 or visit us at 63 Oduduwa Street. Emergency services available 24/7.'
    }
  ]
})

const { initScrollAnimations, cleanupAnimations } = useGsapAnimations()

onMounted(() => {
  initScrollAnimations()
})

onBeforeUnmount(() => {
  cleanupAnimations()
})
</script>
