<script lang="ts">
export default defineComponent({ name: 'DefaultLayout' })
</script>

<template>
  <TheHeader />

  <main class="h-full">
    <router-view />
  </main>

  <TheFooter />
</template>
