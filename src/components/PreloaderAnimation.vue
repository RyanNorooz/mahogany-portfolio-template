<script setup lang="ts"></script>

<script lang="ts">
import { mapState } from 'pinia'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'PreloaderAnimation',

  computed: {
    ...mapState(useMainStore, ['isPreloading']),
  },
})
</script>

<template>
  <!-- start preloader -->
  <transition name="preloader">
    <div v-if="isPreloading" class="preloader">
      <div class="circle">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  </transition>
  <!-- end preloader -->
</template>

<style lang="scss" scoped></style>
