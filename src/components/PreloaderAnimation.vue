<script lang="ts">
export default defineComponent({ name: 'PreloaderAnimation' })
</script>

<script setup lang="ts"></script>

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

<style lang="scss" scoped>
//
</style>
