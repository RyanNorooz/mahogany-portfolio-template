<script setup lang="ts"></script>

<script lang="ts">
export default defineComponent({
  name: 'CustomCursor',

  mounted() {
    if (window.innerWidth >= 992) {
      // initialize circle cursor
      this.initCircleCursor()
    }
  },

  methods: {
    // initialize circle cursor
    initCircleCursor() {
      const app = this.$root?.$el
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

        const element = e.target as HTMLElement

        // add link hover style
        element.closest('a') ||
        element.closest('button') ||
        element.closest('.link-hover')
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
  <div ref="circleCursorOuter" class="circle-cursor circle-cursor-outer" />
  <div ref="circleCursorInner" class="circle-cursor circle-cursor-inner" />
</template>

<style lang="scss">
// * {
//   cursor: none;
// }
</style>
