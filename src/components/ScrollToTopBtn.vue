<script lang="ts">
import { mapState } from 'pinia'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'ScrollToTopBtn',

  computed: {
    ...mapState(useMainStore, ['isScrollTopBtnDisplayed']),
  },

  methods: {
    scrollToTop() {
      window.scroll({ top: 0, behavior: 'smooth' })
    },
  },
})
</script>

<template>
  <button
    ref="scrollTopBtn"
    :class="['scroll-to-top', isScrollTopBtnDisplayed && 'show-scrollTop']"
    title="Back To Top"
    tabindex="0"
    @click="scrollToTop"
  >
    <i class="fa fa-angle-up" aria-hidden="true" />
  </button>
</template>

<style lang="scss" scoped>
//
</style>
