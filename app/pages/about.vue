<template>
  <div class="about-page">
    <PageHeader
      title="About Unita Hospital"
      breadcrumb="Home > About Us"
    />

    <section class="our-story animate-fade-in">
      <div class="container">
        <h2>Our Story</h2>
        <div class="story-content">
          <p>
            Unita Hospital has been serving the Ikotun community with dedication and excellence in healthcare.
            Our mission is to provide accessible, quality healthcare services to all members of our community.
          </p>
          <p>
            We combine modern medical facilities with compassionate care, ensuring every patient receives
            personalized attention from our experienced medical team.
          </p>
        </div>

        <div class="mission-vision">
          <div class="mission">
            <h3>Our Mission</h3>
            <p>To deliver exceptional healthcare services with compassion, integrity, and excellence.</p>
          </div>
          <div class="vision">
            <h3>Our Vision</h3>
            <p>To be the leading community hospital in Lagos, known for quality care and patient satisfaction.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="leadership-team animate-fade-in">
      <div class="container">
        <h2>Leadership Team</h2>

        <div class="medical-director-card">
          <DoctorCard
            :photo="null"
            name="Dr. Abdul-Basit Oriloye"
            title="Medical Director (MD)"
            specialization="General Medicine"
            bio="Dr. Oriloye leads our medical team with extensive experience in healthcare management and patient care. His commitment to excellence ensures the highest standards of medical service."
            :is-featured="true"
          />
        </div>

        <div class="matron-card">
          <DoctorCard
            :photo="null"
            name="Alhaja Mulikat Oriloye"
            title="Matron/Midwife"
            specialization="Maternity & Nursing Care"
            bio="Alhaja Mulikat brings years of expertise in maternity services and nursing management, ensuring exceptional care for mothers and newborns."
          />
        </div>
      </div>
    </section>

    <section class="management-team animate-fade-in">
      <div class="container">
        <h2>Management Team</h2>
        <div class="management-grid">
          <div class="team-member">
            <div class="photo-placeholder"></div>
            <h3>Mr. Mogaji</h3>
            <p class="role">Hospital Administrator</p>
            <p class="description">Oversees daily operations and administrative excellence.</p>
          </div>

          <div class="team-member">
            <div class="photo-placeholder"></div>
            <h3>Mrs. Ekundayo</h3>
            <p class="role">Accounts Officer</p>
            <p class="description">Manages financial operations and patient billing services.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="facilities animate-fade-in">
      <div class="container">
        <h2>Our Facilities & Equipment</h2>
        <div class="facilities-grid">
          <div class="facility-item">
            <div class="icon">🏥</div>
            <h3>Modern Consultation Rooms</h3>
            <p>Comfortable, private spaces for patient consultations</p>
          </div>
          <div class="facility-item">
            <div class="icon">⚕️</div>
            <h3>Advanced Medical Equipment</h3>
            <p>State-of-the-art diagnostic and treatment technology</p>
          </div>
          <div class="facility-item">
            <div class="icon">🛏️</div>
            <h3>Patient Wards</h3>
            <p>Clean, comfortable accommodations for recovering patients</p>
          </div>
        </div>

        <!-- Photo gallery placeholder -->
        <div class="photo-gallery">
          <div class="gallery-placeholder">Photo Gallery Coming Soon</div>
        </div>
      </div>
    </section>

    <section class="commitment animate-fade-in">
      <div class="container">
        <div class="commitment-box">
          <h2>Our Commitment</h2>
          <p>
            At Unita Hospital, we are committed to providing patient-centered care that prioritizes your health,
            comfort, and wellbeing. We serve our community with integrity, compassion, and medical excellence.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({
  title: 'About Us - Unita Hospital',
  meta: [
    {
      name: 'description',
      content: 'Learn about Unita Hospital, our mission, vision, and dedicated medical team serving the Ikotun community in Lagos.'
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
