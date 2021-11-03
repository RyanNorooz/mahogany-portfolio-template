<script lang="ts">
export default defineComponent({ name: 'ErrorLayout' })
</script>

<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <TheHeader />

  <main class="text-center text-teal-700 dark:text-gray-200">
    <router-view />

    <router-link to="/" class="btn btn-primary m-3"> Back to Home </router-link>

    <!-- :disabled="history.length <= 1" //TODO -->

    <button class="btn btn-secondary m-3" @click="$router.back()">
      {{ t('button.back') }}
    </button>
  </main>

  <TheFooter />
</template>
