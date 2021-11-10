<script setup lang="ts">
import { mapState, mapActions } from 'pinia'
import { useMainStore } from '@/stores/main'
import { toggleDark } from '@/logic'
</script>

<script lang="ts">
export default defineComponent({
  name: 'TheHeader',

  data() {
    return {
      mainStore: useMainStore(),

      // list of nav links to loop through it
      navLinks: [
        {
          url: '#hero',
          title: { en: 'Home', ar: 'الرئيسية' },
        },
        {
          url: '#about',
          title: { en: 'About', ar: 'من أنا' },
        },
        {
          url: '#skills',
          title: { en: 'Skills', ar: 'مهاراتي' },
        },
        {
          url: '#portfolio',
          title: { en: 'Portfolio', ar: 'أعمالي' },
        },
        {
          url: '#contact',
          title: { en: 'Contact', ar: 'اتصل بي' },
        },
      ],
    }
  },

  computed: {
    ...mapState(useMainStore, [
      'savedTheme',
      'isHeaderBig',
      'isHeaderHidden',
      'isNavMenuOpen',
    ]),
  },

  mounted() {
    // nav menu tab trap
    this.navMenuTabTrap()
  },

  methods: {
    ...mapActions(useMainStore, ['changeAppTheme']),

    // toggle nav menu
    toggleNavMenu() {
      // this.isNavMenuOpen = !this.isNavMenuOpen
      this.mainStore.$patch({
        isNavMenuOpen: !this.isNavMenuOpen,
      })

      this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu()
    },

    // open nav menu
    openNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0]

      // this.isNavMenuOpen = true

      this.mainStore.$patch({
        isNavMenuOpen: true,
      })

      bodyEl.setAttribute('style', 'overflow-y: hidden;')

      // set focus on nav menu
      const headerNav = this.$refs.headerNav as HTMLElement
      const menu = headerNav.querySelector(
        '.desktop-menu-content'
      ) as HTMLElement
      menu.focus()
    },

    // close nav menu
    closeNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0]

      // this.isNavMenuOpen = false

      this.mainStore.$patch({
        isNavMenuOpen: false,
      })

      bodyEl.removeAttribute('style')

      // set focus on nav menu toggle button
      const toggleBtn = this.$refs.navMenuToggleBtn as HTMLElement
      toggleBtn.focus()
    },

    // nav menu tab trap
    navMenuTabTrap() {
      const nav = this.$refs.headerNav as HTMLElement
      const focusableElementsString =
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
      let firstTabStop
      let lastTabStop
      let isFirstTabStop: boolean
      let isLastTabStop: boolean

      document.addEventListener('keyup', (e) => {
        if (nav.classList.contains('menu-open')) {
          // get first & last focusable elements in the side menu for the tab trap
          const visibleFocusableEls = [
            ...nav.querySelectorAll(focusableElementsString),
          ].filter(
            (el) =>
              window.getComputedStyle(el).getPropertyValue('visibility') !==
              'hidden'
          )
          firstTabStop = visibleFocusableEls[0] as HTMLElement
          lastTabStop = visibleFocusableEls[
            visibleFocusableEls.length - 1
          ] as HTMLElement

          if (e.code === 'Tab') {
            if (e.shiftKey) {
              /* shift + tab */ // if this is the first item, move to the last item
              isFirstTabStop && lastTabStop.focus()
            } /* tab */ else {
              // if this is the last item, go back to the first item
              isLastTabStop && firstTabStop.focus()
            }

            // close nav menu on Escape button press
          } else if (e.code === 'Escape') {
            this.toggleNavMenu()
          }

          // get current active element
          const activeEl = document.activeElement

          // check if last item or not
          isLastTabStop = activeEl === lastTabStop ? true : false

          // check if first item or not
          isFirstTabStop = activeEl === firstTabStop ? true : false
        }
      })
    },
  },
})
</script>

<template>
  <!-- start of header -->
  <header
    :class="{
      'big-header': isHeaderBig,
      'small-header': !isHeaderBig,
      'header-hidden': isHeaderHidden,
    }"
  >
    <div class="container">
      <!-- logo -->
      <div class="logo" title="Nafie">
        <h1><a href="index.html">Nafie</a></h1>
      </div>

      <!-- nav links -->
      <nav ref="headerNav" :class="{ 'menu-open': isNavMenuOpen }">
        <!-- nav menu links -->
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.url">
            <a :href="link.url" @click="closeNavMenu">
              {{ link.title.en }}
            </a>
          </li>
        </ul>

        <!-- menu content in big devices (hidden in mobile/tablet) -->
        <div class="desktop-menu-content" tabindex="-1">
          <div class="container">
            <!-- about us -->
            <div class="about-us">
              <p>
                I love making things simple, intuitive and expertly crafted!
              </p>
              <h4 class="block-title">
                Product is the vital essence of what i do, truly great product
                is born of meticulous planning and process. This is where i
                specialized!
              </h4>
            </div>

            <!-- contact info -->
            <ul class="contact-info row">
              <li class="col-lg-4">
                <h4 class="block-title">Email</h4>
                <ul>
                  <li>
                    <a href="mailto:info@nafie.com">info@nafie.com</a>
                  </li>
                  <li>
                    <a href="mailto:support@nafie.com">support@nafie.com</a>
                  </li>
                </ul>
              </li>
              <li class="col-lg-4">
                <h4 class="block-title">Address</h4>
                <ul>
                  <li>
                    941 saqrqorish Road, alandalos,
                    <br />
                    grnata, wa 47122-4194
                  </li>
                </ul>
              </li>
              <li class="col-lg-4">
                <h4 class="block-title">Phone</h4>
                <ul>
                  <li><a href="tel:02966202290">(02) 966 202 290</a></li>
                  <li><a href="tel:02966202291">(02) 966 202 291</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- options icons -->
      <ul class="options-icons">
        <!-- lang switcher button -->
        <li class="lang-switcher">
          <a href="rtl-index.html" title="عرض باللغة العربية">
            <img src="@/assets/langs/ar.png" alt="العربية" />
          </a>
        </li>

        <!-- theme switcher button -->
        <li class="theme-switcher">
          <button
            :class="savedTheme"
            title="Change Mode"
            @click="
              () => {
                changeAppTheme()
                toggleDark()
              }
            "
          ></button>
        </li>

        <!-- hamburger button -->
        <li class="hamburger-btn" :class="{ open: isNavMenuOpen }">
          <button
            ref="navMenuToggleBtn"
            title="Toggle Side Menu"
            aria-label="Toggle Side Menu"
            @click="toggleNavMenu"
          >
            <span />
            <span />
            <span />
          </button>
        </li>
      </ul>
    </div>
  </header>
  <!-- end of header -->
</template>

<style lang="scss" scoped>
//
</style>
