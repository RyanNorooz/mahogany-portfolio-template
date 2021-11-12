<script setup lang="ts"></script>

<script lang="ts">
export default defineComponent({
  name: 'TheFooter',

  data() {
    return {
      // the date copyright started (change to yours)
      copyrightStartDate: 2021,
    }
  },

  computed: {
    // get the total years of copyright
    copyrightDate(): number | string {
      const yearsDuration =
        new Date(
          new Date().getTime() -
            new Date(String(this.copyrightStartDate)).getTime()
        ).getFullYear() - 1970
      return yearsDuration === 0
        ? this.copyrightStartDate
        : `${this.copyrightStartDate} - ${
            this.copyrightStartDate + yearsDuration
          }`
    },
  },
})
</script>

<template>
  <!-- start of footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <!-- logo -->
          <div class="logo" title="Website">
            <h1>
              <router-link to="/"> Portfolio </router-link>
            </h1>
          </div>
        </div>
        <div class="col-lg-6">
          Made by

          <a
            href="https://github.com/RyanNorooz"
            target="_blank"
            rel="noopener"
          >
            Ryan Norooz
          </a>
        </div>
      </div>
    </div>
  </footer>
  <!-- end of footer -->
</template>

<style lang="scss" scoped></style>
