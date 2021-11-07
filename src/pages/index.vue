<script setup lang="ts"></script>

<script lang="ts">
import { createPopper } from '@popperjs/core'
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'HomePage',

  computed: {
    ...mapState(useMainStore, ['appTheme', 'isPreloading']),
  },

  async mounted() {
    // hide the preloader screen after loading
    window.addEventListener('load', () => (this.isPreloading = false))

    // scrolling options
    this.scrollingOptions()
    document.addEventListener('scroll', () => this.scrollingOptions())

    // initialize popper.js plugin
    document.querySelectorAll('.has-ultimate-tooltip').forEach((el) => {
      createPopper(el, el.querySelector('.ultimate-tooltip'), {
        placement: 'top',
        modifiers: [{ name: 'offset', options: { offset: [0, 30] } }],
      })
    })

    // init glightbox plugin
    if (!import.meta.env.SSR) {
      const GLightbox = await import('glightbox')
      const lightbox = new GLightbox({
        autoplayVideos: false,
      })
    }
  },

  methods: {
    ...mapActions(useMainStore, [
      'changeAppTheme',
      'getAppTheme',
      'setNotify',
      'dismissNotify',
      'startLoading',
      'endLoading',
      'scrollingOptions',
    ]),
  },
})
</script>

<template>
  <div id="home-page">
    <HeroSection />

    <StatisticsSection />

    <AboutSection />

    <SkillsSection />

    <ExperienceSection />

    <PortfolioSection />

    <TestimonialsSection />

    <ContactSection />
  </div>
</template>

<style lang="scss" scoped>
//
</style>
