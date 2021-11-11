<script setup lang="ts">
useHead({
  title: 'Ryan Norooz - Portfolio',
  meta: [{ name: 'description', content: 'Portfolio website' }],
})
</script>

<script lang="ts">
import { mapState, mapActions } from 'pinia'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  data() {
    return {
      // flag to toggle focus style class
      isAnyFocus: false,
    }
  },

  computed: {
    ...mapState(useMainStore, ['savedTheme']),
  },

  created() {
    // get a theme to use
    this.getAppTheme()
  },

  methods: {
    ...mapActions(useMainStore, ['getAppTheme']),
  },
})
</script>

<template>
  <div
    id="app-inner"
    :class="[savedTheme, { 'enable-focus-style': isAnyFocus }]"
    @click="isAnyFocus = false"
    @keyup.tab="isAnyFocus = true"
  >
    <!-- <CustomCursor /> -->

    <MotionBlurCursor />

    <PreloaderAnimation />

    <router-view />

    <ScrollToTopBtn />

    <ToastNotification />

    <AjaxLoading />
  </div>
</template>
