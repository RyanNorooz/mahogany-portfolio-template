<script setup lang="ts"></script>

<script lang="ts">
export default defineComponent({
  name: 'HeroSection',

  mounted() {
    if (window.innerWidth >= 992) {
      // apply pan effect hero image
      this.heroImgPanEffect()
    }
  },

  methods: {
    // apply pan effect hero image
    heroImgPanEffect() {
      const parent = this.$refs.heroSection as HTMLElement

      // return if disabled
      if (!parent || !parent.getAttribute('data-paneffect')) {
        return
      }

      const layer1 = parent.querySelectorAll('.layer')[0]
      const layer2 = parent.querySelectorAll('.layer')[1]

      parent.addEventListener('mousemove', (e) => {
        const x =
          ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100
        const y =
          ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) * 100

        parent.classList.add('parallax-animation')

        layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`)
        layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`)
      })
    },
  },
})
</script>

<template>
  <!-- start of hero section -->
  <div id="hero" ref="heroSection" class="hero-section" data-paneffect="true">
    <div class="hero-img">
      <div v-clone class="layer">
        <img src="@/assets/hero-img.png" alt="User Name" />
      </div>
    </div>

    <div class="hero-text">
      <h2>
        We Design & Build
        <br />
        Creative Products
      </h2>
      <router-link to="#contact" class="btn">Get In Touch</router-link>
    </div>

    <div class="social">
      <ul>
        <li>
          <a
            v-tooltip="{ text: 'Facebook', dir: 'right' }"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            v-tooltip="{ text: 'Twitter', dir: 'right' }"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            v-tooltip="{ text: 'LinkedIn', dir: 'right' }"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>

    <div class="scroll-down">
      <router-link to="#about" title="Scroll Down">Scroll</router-link>
    </div>
  </div>
  <!-- end of hero section -->
</template>

<style lang="scss" scoped></style>
