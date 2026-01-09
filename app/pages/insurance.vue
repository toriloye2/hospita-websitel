<template>
  <div class="insurance-page">
    <PageHeader
      title="Insurance & Payment Options"
      breadcrumb="Home > Insurance"
      subtitle="We accept major HMO providers to make quality healthcare accessible"
    />

    <section class="intro animate-fade-in">
      <div class="container">
        <p class="intro-text">
          Unita Hospital partners with leading health maintenance organizations (HMOs) to ensure
          affordable, accessible healthcare for our patients. Check if your insurance provider is accepted below.
        </p>
      </div>
    </section>

    <section class="hmo-partners animate-fade-in">
      <div class="container">
        <h2>Accepted Insurance Providers</h2>
        <div class="stagger-cards hmo-grid">
          <div class="hmo-card card">
            <div class="hmo-logo-placeholder">
              <span>Hygeia HMO</span>
            </div>
            <h3>Hygeia HMO</h3>
            <p>One of Nigeria's leading health insurance providers, offering comprehensive coverage.</p>
          </div>

          <div class="hmo-card card">
            <div class="hmo-logo-placeholder">
              <span>AIICO</span>
            </div>
            <h3>AIICO Health</h3>
            <p>Trusted healthcare coverage with flexible plans for individuals and families.</p>
          </div>

          <div class="hmo-card card">
            <div class="hmo-logo-placeholder">
              <span>Clearline</span>
            </div>
            <h3>Clearline HMO</h3>
            <p>Affordable health insurance solutions with wide provider network coverage.</p>
          </div>

          <div class="hmo-card card">
            <div class="hmo-logo-placeholder">
              <span>Reliance</span>
            </div>
            <h3>Reliance Health (Alafia)</h3>
            <p>Modern health insurance with easy digital access and comprehensive benefits.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="payment-info animate-fade-in">
      <div class="container">
        <div class="payment-sections">
          <div class="payment-section">
            <h2>Payment Options</h2>
            <ul>
              <li><strong>Cash Payments:</strong> We accept direct payment for all services</li>
              <li><strong>HMO Coverage:</strong> Present your HMO card for cashless treatment</li>
              <li><strong>Insurance Claims:</strong> We process claims directly with your provider</li>
            </ul>
          </div>

          <div class="payment-section">
            <h2>Using Your Insurance</h2>
            <ol>
              <li>Verify your coverage with your HMO provider</li>
              <li>Present your valid HMO card at reception</li>
              <li>Receive treatment (subject to your plan benefits)</li>
              <li>We handle the billing with your insurance provider</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="insurance-cta animate-fade-in">
      <div class="container">
        <div class="cta-box">
          <h2>Have Questions About Insurance Coverage?</h2>
          <p>Contact us to verify your insurance plan or discuss payment options</p>
          <div class="cta-buttons">
            <BaseButton variant="primary" to="/contact">Contact Us</BaseButton>
            <BaseButton variant="secondary" href="tel:08036672587">
              Call: 08036672587
            </BaseButton>
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
  title: 'Insurance & Payment - Unita Hospital',
  meta: [
    {
      name: 'description',
      content: 'Unita Hospital accepts Hygeia HMO, AIICO Health, Clearline HMO, and Reliance Health insurance. Learn about payment options and coverage.'
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
