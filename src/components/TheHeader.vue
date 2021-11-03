<script lang="ts">
export default defineComponent({ name: 'TheHeader' })
</script>

<script setup lang="ts"></script>

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
            @click="changeAppTheme"
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
            <span></span>
            <span></span>
            <span></span>
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
