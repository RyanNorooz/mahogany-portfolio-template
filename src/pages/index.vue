<script setup lang="ts"></script>

<script lang="ts">
import { createPopper } from '@popperjs/core'
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'HomePage',

  data: () => ({
    mainStore: useMainStore(),
  }),

  computed: {
    ...mapState(useMainStore, ['appTheme', 'isPreloading']),
  },

  async mounted() {
    // hide the preloader screen after loading
    window.addEventListener('load', () => {
      // this.isPreloading = false
      this.mainStore.$patch({
        isPreloading: false,
      })
    })

    // initialize popper.js plugin
    document.querySelectorAll('.has-ultimate-tooltip').forEach((el) => {
      const tooltip = el.querySelector('.ultimate-tooltip') as HTMLElement

      tooltip &&
        createPopper(el, tooltip, {
          placement: 'top',
          modifiers: [{ name: 'offset', options: { offset: [0, 30] } }],
        })
    })

    // scrolling options
    this.scrollingOptions()
    document.addEventListener('scroll', () => this.scrollingOptions())
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

<style lang="scss" scoped></style>
