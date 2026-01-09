import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGsapAnimations = () => {
  const initScrollAnimations = () => {
    if (process.client) {
      gsap.registerPlugin(ScrollTrigger)

      // Respect user's motion preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (prefersReducedMotion) {
        return // Skip animations if user prefers reduced motion
      }

      // Fade in sections on scroll
      gsap.utils.toArray('.animate-fade-in').forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        })
      })

      // Stagger animations for cards
      gsap.utils.toArray('.stagger-cards').forEach((container) => {
        const cards = container.querySelectorAll('.card')

        if (cards.length > 0) {
          gsap.from(cards, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          })
        }
      })

      // Hero section animation
      gsap.utils.toArray('.hero-content').forEach((hero) => {
        gsap.from(hero, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out'
        })
      })
    }
  }

  const cleanupAnimations = () => {
    if (process.client) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }

  return {
    initScrollAnimations,
    cleanupAnimations
  }
}
