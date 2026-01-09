<template>
  <section class="doctors-preview">
    <div class="container">
      <h2>Meet Our Medical Team</h2>

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
        <BaseButton variant="primary" to="/medical-team">
          Meet Our Full Team →
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
const doctors = [
  {
    id: 1,
    photo: null, // Replace with actual photo path
    name: 'Dr. Abdul-Basit Oriloye',
    title: 'Medical Director (MD)',
    specialization: 'General Medicine',
    bio: 'Leading our medical team with extensive experience in healthcare management and patient care.'
  },
  {
    id: 2,
    photo: null, // Replace with actual photo path
    name: 'Dr. Shola',
    title: 'Medical Doctor',
    specialization: 'General Practice',
    bio: 'Providing comprehensive medical care with a focus on patient wellness and preventive healthcare.'
  },
  {
    id: 3,
    photo: null, // Replace with actual photo path
    name: 'Alhaja Mulikat Oriloye',
    title: 'Matron / Chief Midwife',
    specialization: 'Maternity & Nursing Care',
    bio: 'Leading our maternity services with years of expertise in nursing care and midwifery.'
  }
]
</script>
