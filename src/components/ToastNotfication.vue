<script lang="ts">
export default defineComponent({ name: 'ToastNotification' })
</script>

<script setup lang="ts"></script>

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
          @click="dismissNotify(notify.id)"
        ></i>
        <span
          v-if="notify.time"
          class="disappearing-time"
          :style="{ 'animation-duration': notify.time + 'ms' }"
        ></span>
      </li>
    </transition-group>
  </ul>
</template>

<style lang="scss" scoped>
//
</style>
