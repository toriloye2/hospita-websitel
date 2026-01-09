<template>
  <div class="partners-page">
    <PageHeader
      title="Our Healthcare Partners"
      breadcrumb="Home > Partners"
      subtitle="Expanding access to quality care through trusted partnerships"
    />

    <section class="intro animate-fade-in">
      <div class="container">
        <p class="intro-text">
          At Unita Hospital, we believe in comprehensive healthcare. We've partnered with specialized
          providers to ensure you receive the best possible care across all health needs.
        </p>
      </div>
    </section>

    <section class="partners-list animate-fade-in">
      <div class="container">
        <div class="stagger-cards partners-grid">
          <!-- Biochem Laboratories -->
          <PartnerCard class="card">
            <template #logo>
              <div class="partner-logo-placeholder">🔬</div>
            </template>
            <template #name>
              <h2>Biochem Laboratories</h2>
            </template>
            <template #services>
              <h3>Services Offered:</h3>
              <ul>
                <li>Blood tests and analysis</li>
                <li>Urinalysis</li>
                <li>Medical screening packages</li>
                <li>Comprehensive diagnostic testing</li>
                <li>Fast, accurate laboratory results</li>
              </ul>
            </template>
            <template #why-partner>
              <h3>Why We Partner:</h3>
              <ul>
                <li>State-of-the-art diagnostic equipment</li>
                <li>Experienced laboratory technicians</li>
                <li>Rapid turnaround times</li>
                <li>Accurate and reliable results</li>
              </ul>
            </template>
            <template #access>
              <div class="access-info">
                <strong>How to Access:</strong>
                <p>Request a referral from our doctors for seamless laboratory services and coordinated care.</p>
              </div>
            </template>
          </PartnerCard>

          <!-- Dental Clinic -->
          <PartnerCard class="card">
            <template #logo>
              <div class="partner-logo-placeholder">🦷</div>
            </template>
            <template #name>
              <h2>Dental Care Partner</h2>
            </template>
            <template #services>
              <h3>Services Offered:</h3>
              <ul>
                <li>General dentistry</li>
                <li>Teeth cleaning and whitening</li>
                <li>Tooth extractions</li>
                <li>Dental consultations</li>
                <li>Preventive dental care</li>
              </ul>
            </template>
            <template #why-partner>
              <h3>Why We Partner:</h3>
              <ul>
                <li>Experienced dental professionals</li>
                <li>Modern dental equipment and facilities</li>
                <li>Patient-friendly environment</li>
                <li>Comprehensive dental care</li>
              </ul>
            </template>
            <template #access>
              <div class="access-info">
                <strong>How to Access:</strong>
                <p>Get referrals from Unita Hospital for coordinated dental care and seamless service.</p>
              </div>
            </template>
          </PartnerCard>
        </div>
      </div>
    </section>

    <section class="benefits animate-fade-in">
      <div class="container">
        <h2>Benefits of Our Partnerships</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="icon">🤝</div>
            <h3>One-Stop Healthcare</h3>
            <p>Access multiple healthcare services through coordinated care</p>
          </div>
          <div class="benefit-item">
            <div class="icon">📋</div>
            <h3>Seamless Referrals</h3>
            <p>Easy transitions between services with proper medical coordination</p>
          </div>
          <div class="benefit-item">
            <div class="icon">✅</div>
            <h3>Trusted Quality</h3>
            <p>All partners vetted for excellence and professional standards</p>
          </div>
          <div class="benefit-item">
            <div class="icon">🏥</div>
            <h3>Specialized Care</h3>
            <p>Access to expert services beyond general hospital capabilities</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({
  title: 'Our Partners - Unita Hospital',
  meta: [
    {
      name: 'description',
      content: 'Unita Hospital partners with Biochem Laboratories and dental care providers to offer comprehensive healthcare services in Ikotun, Lagos.'
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
