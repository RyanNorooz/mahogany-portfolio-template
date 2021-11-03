<script lang="ts">
export default defineComponent({ name: 'ScrollToTopBtn' })
</script>

<script setup lang="ts"></script>

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
