<script setup lang="ts"></script>

<script lang="ts">
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'ToastNotification',

  computed: {
    ...mapState(useMainStore, ['notifications']),
  },

  methods: {
    ...mapActions(useMainStore, ['dismissNotify']),
  },
})
</script>

<template>
  <!-- toast notifications -->
  <ul class="notifications-container">
    <transition-group name="notify">
      <li
        v-for="notify of notifications"
        :id="notify.id"
        :key="notify.id"
        :class="[
          'notification',
          'show',
          notify.className,
          notify.time && 'timer',
        ]"
      >
        {{ notify.msg }}

        <i
          class="fa fa-times link-hover"
          aria-hidden="true"
          @click="() => notify.id && dismissNotify(notify.id)"
        />

        <span
          v-if="notify.time"
          class="disappearing-time"
          :style="{ 'animation-duration': notify.time + 'ms' }"
        />
      </li>
    </transition-group>
  </ul>
</template>

<style lang="scss" scoped>
//
</style>
