<script setup lang="ts"></script>

<script lang="ts">
import { mapState } from 'pinia'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'AjaxLoading',

  computed: {
    ...mapState(useMainStore, ['isAjaxLoading']),
  },
})
</script>

<template>
  <!-- ajax loading -->
  <div v-show="isAjaxLoading" class="ajax-loading">
    <span />
  </div>
</template>

<style lang="scss" scoped>
//
</style>
