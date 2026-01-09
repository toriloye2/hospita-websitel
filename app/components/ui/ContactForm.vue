<template>
  <form
    class="contact-form"
    @submit.prevent="handleSubmit"
    action="https://formspree.io/f/YOUR_FORM_ID"
    method="POST"
  >
    <div class="form-group">
      <label for="name">Full Name *</label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        name="name"
        required
        placeholder="Enter your full name"
      />
    </div>

    <div class="form-group">
      <label for="email">Email Address *</label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        name="email"
        required
        placeholder="your.email@example.com"
      />
    </div>

    <div class="form-group">
      <label for="phone">Phone Number *</label>
      <input
        id="phone"
        v-model="formData.phone"
        type="tel"
        name="phone"
        required
        placeholder="08012345678"
      />
    </div>

    <div class="form-group">
      <label for="subject">Subject</label>
      <input
        id="subject"
        v-model="formData.subject"
        type="text"
        name="subject"
        placeholder="What is this regarding?"
      />
    </div>

    <div class="form-group">
      <label for="message">Message *</label>
      <textarea
        id="message"
        v-model="formData.message"
        name="message"
        required
        rows="6"
        placeholder="Tell us how we can help you..."
      ></textarea>
    </div>

    <BaseButton
      type="submit"
      variant="primary"
      :disabled="isSubmitting"
      class="submit-button"
    >
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </BaseButton>

    <p v-if="submitMessage" class="submit-message" :class="submitStatus" aria-live="polite">
      {{ submitMessage }}
    </p>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

const handleSubmit = async (event) => {
  const form = event?.target
  isSubmitting.value = true
  submitMessage.value = ''
  submitStatus.value = ''

  try {
    const action = form?.getAttribute?.('action') || ''

    if (!action || action.includes('YOUR_FORM_ID')) {
      submitMessage.value = 'Please configure the contact form endpoint before sending.'
      submitStatus.value = 'error'
      return
    }

    const formPayload = new FormData(form)
    const response = await fetch(action, {
      method: 'POST',
      body: formPayload,
      headers: {
        Accept: 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Form submission failed')
    }

    submitMessage.value = 'Thank you! We will get back to you soon.'
    submitStatus.value = 'success'

    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again.'
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>
