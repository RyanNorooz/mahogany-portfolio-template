<script lang="ts">
export default defineComponent({ name: 'TheFooter' })
</script>

<script setup lang="ts"></script>

<template>
  <!-- start of footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <!-- logo -->
          <div class="logo" title="Nafie">
            <h1>
              <a href="index.html"> Nafie </a>
            </h1>
          </div>
        </div>
        <div class="col-lg-6">
          &copy;
          <!-- {{ copyrightDate }} -->
          Proudly Powered by

          <a
            href="https://themeforest.net/user/webrouk/portfolio"
            target="_blank"
            rel="noopener"
          >
            Webrouk
          </a>
        </div>
      </div>
    </div>
  </footer>
  <!-- end of footer -->
</template>

<style lang="scss" scoped>
//
</style>
