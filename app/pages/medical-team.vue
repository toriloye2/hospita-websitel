<template>
  <div class="medical-team-page">
    <PageHeader
      title="Our Medical Team"
      breadcrumb="Home > Medical Team"
      subtitle="Experienced healthcare professionals dedicated to your wellbeing"
    />

    <section class="medical-director animate-fade-in">
      <div class="container">
        <h2>Medical Director</h2>
        <DoctorCard
          :photo="null"
          name="Dr. Abdul-Basit Oriloye"
          title="Medical Director (MD)"
          specialization="General Medicine & Healthcare Management"
          bio="Dr. Oriloye brings extensive medical experience to Unita Hospital. He leads our team with a commitment to excellence in patient care and medical innovation. His expertise in healthcare management ensures the highest standards of service delivery."
          :is-featured="true"
        />
      </div>
    </section>

    <section class="medical-staff animate-fade-in">
      <div class="container">
        <h2>Our Doctors</h2>
        <div class="doctors-grid">
          <DoctorCard
            :photo="null"
            name="Dr. Shola"
            title="Medical Doctor"
            specialization="General Practice"
            bio="Dr. Shola provides comprehensive medical care with a focus on patient wellness and preventive healthcare. Known for compassionate approach to patient treatment."
          />
        </div>
      </div>
    </section>

    <section class="nursing-team animate-fade-in">
      <div class="container">
        <h2>Nursing & Maternity Team</h2>
        <div class="nursing-grid">
          <DoctorCard
            :photo="null"
            name="Alhaja Mulikat Oriloye"
            title="Matron / Chief Midwife"
            specialization="Maternity & Nursing Care"
            bio="Leading our maternity services with extensive experience in nursing care and midwifery. Dedicated to providing excellent care for mothers and newborns."
          />

          <DoctorCard
            :photo="null"
            name="Staff Adekoya"
            title="Head Nurse"
            specialization="Patient Care & Nursing Management"
            bio="Experienced nursing professional providing exceptional patient care and leading our nursing staff with dedication and expertise."
          />

          <DoctorCard
            :photo="null"
            name="Nurse Nbudubwueze"
            title="Head Nurse"
            specialization="Clinical Nursing & Patient Support"
            bio="Committed to delivering high-quality nursing care with compassion and professionalism. Expert in patient support and clinical procedures."
          />
        </div>
      </div>
    </section>

    <section class="team-statement animate-fade-in">
      <div class="container">
        <div class="statement-box">
          <p>
            Our dedicated medical team is committed to providing you with the highest quality healthcare
            in a caring and professional environment. We believe in treating every patient with dignity,
            respect, and personalized attention.
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
  title: 'Our Medical Team - Unita Hospital',
  meta: [
    {
      name: 'description',
      content: 'Meet the experienced medical professionals at Unita Hospital, including our doctors, nurses, and healthcare staff serving Ikotun, Lagos.'
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
