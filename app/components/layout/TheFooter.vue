<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <!-- Column 1: Hospital Info -->
        <div class="footer-column">
          <div class="footer-logo">
            <img src="/images/logo.png" alt="Unita Hospital" />
            <span>Unita Hospital</span>
          </div>
          <p class="footer-tagline">
            Quality Healthcare in Ikotun, Lagos
          </p>
          <p class="footer-description">
            Providing comprehensive healthcare services with compassion and excellence.
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-column">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/medical-team">Medical Team</NuxtLink></li>
            <li><NuxtLink to="/partners">Partners</NuxtLink></li>
            <li><NuxtLink to="/insurance">Insurance</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Column 3: Contact Info -->
        <div class="footer-column">
          <h3>Contact Us</h3>
          <div class="contact-info">
            <p>
              <strong>Address:</strong><br>
              63 Oduduwa Street, Ikotun<br>
              Alimosho, Lagos, Nigeria
            </p>
            <p>
              <strong>Phone:</strong><br>
              <a href="tel:08036672587">08036672587</a><br>
              <a href="tel:08066948982">08066948982</a>
            </p>
            <p>
              <strong>Email:</strong><br>
              <a href="mailto:unitahospital@gmail.com">unitahospital@gmail.com</a>
            </p>
            <p>
              <strong>Hours:</strong><br>
              Mon-Fri: 8:00 AM - 6:00 PM<br>
              Emergency: 24/7
            </p>
          </div>
        </div>

        <!-- Column 4: Insurance Partners -->
        <div class="footer-column">
          <h3>Insurance Partners</h3>
          <div class="hmo-logos">
            <div class="hmo-logo">Hygeia HMO</div>
            <div class="hmo-logo">AIICO Health</div>
            <div class="hmo-logo">Clearline HMO</div>
            <div class="hmo-logo">Reliance Health</div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ currentYear }} Unita Hospital. All rights reserved.
        </p>
        <div class="social-links">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="Instagram">📷</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
