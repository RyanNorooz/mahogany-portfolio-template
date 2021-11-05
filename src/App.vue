<script lang="ts">
export default defineComponent({
  data() {
    return {
      // for the template theme
      appTheme: 'light_theme',
      savedTheme: null,

      // flag to toggle the preloader
      isPreloading: true,

      // manage loading spinner status
      ajaxLoading: [],
    }
  },
})
</script>

<script setup lang="ts">
useHead({
  title: 'Ryan Norooz - Portfolio',
  meta: [{ name: 'description', content: 'Portfolio website' }],
})

onMounted(() => {
  if (window.innerWidth >= 992) {
    // initialize circle cursor
    initCircleCursor()
  }
})

const appRef = ref()
const circleCursorOuter = ref()
const circleCursorInner = ref()

// initialize circle cursor
function initCircleCursor() {
  const app = appRef.value
  const outer = circleCursorOuter.value
  const inner = circleCursorInner.value

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
}
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
