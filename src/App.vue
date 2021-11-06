<script setup lang="ts">
import { useMainStore } from '@/stores/main'

useHead({
  title: 'Ryan Norooz - Portfolio',
  meta: [{ name: 'description', content: 'Portfolio website' }],
})

const store = useMainStore()
const savedTheme = store.savedTheme
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      // flag to toggle focus style class
      isAnyFocus: false,
    }
  },

  mounted() {
    if (window.innerWidth >= 992) {
      // initialize circle cursor
      this.initCircleCursor()
    }
  },

  methods: {
    // initialize circle cursor
    initCircleCursor() {
      const app = this.$refs.appRef as HTMLElement
      const outer = this.$refs.circleCursorOuter as HTMLElement
      const inner = this.$refs.circleCursorInner as HTMLElement

      // return if disabled
      if (!outer || !inner) {
        return
      }

      app.addEventListener('mousemove', (e: MouseEvent) => {
        // make the circles follow the cursor
        outer.setAttribute(
          'style',
          `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`
        )
        inner.setAttribute(
          'style',
          `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`
        )

        // add link hover style
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.link-hover')
          ? inner.classList.add('cursor-link-hover')
          : inner.classList.remove('cursor-link-hover')
      })

      app.addEventListener('click', () => {
        // add pulse effect on click
        inner.classList.add('cursor-click-effect')
        setTimeout(() => inner.classList.remove('cursor-click-effect'), 200)
      })
    },
  },
})
</script>

<template>
  <div
    id="app-inner"
    ref="appRef"
    :class="[savedTheme, { 'enable-focus-style': isAnyFocus }]"
    @click="isAnyFocus = false"
    @keyup.tab="isAnyFocus = true"
  >
    <div ref="circleCursorOuter" class="circle-cursor circle-cursor-outer" />
    <div ref="circleCursorInner" class="circle-cursor circle-cursor-inner" />

    <router-view />
  </div>
</template>
