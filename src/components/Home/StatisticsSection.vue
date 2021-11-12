<script setup lang="ts"></script>

<script lang="ts">
import { mapState } from 'pinia'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'StatisticsSection',

  data() {
    return {}
  },

  computed: {
    ...mapState(useMainStore, ['experienceYears']),
  },
})
</script>

<template>
  <!-- start of statistics section -->
  <div id="statistics" class="statistics-section section">
    <div class="section-content">
      <div class="container">
        <ul class="statistics-items row">
          <li class="col-sm-12 col-md-6 col-lg-4">
            <router-link to="#experience">
              <div class="icon">
                <img
                  src="@/assets/icons/emblem.png"
                  alt="Years of Experience"
                />
              </div>
              <div class="text">
                <h3>{{ experienceYears }}+</h3>
                <strong>Years of Experience</strong>
              </div>
              <i class="fas fa-angle-right" aria-hidden="true" />
            </router-link>
          </li>
          <li class="col-sm-12 col-md-6 col-lg-4">
            <router-link to="#portfolio">
              <div class="icon">
                <img
                  src="@/assets/icons/check-mark.png"
                  alt="Completed Projects"
                />
              </div>
              <div class="text">
                <h3>230+</h3>
                <strong>Completed Projects</strong>
              </div>
              <i class="fas fa-angle-right" aria-hidden="true" />
            </router-link>
          </li>
          <li class="col-sm-12 col-md-6 col-lg-4">
            <router-link to="#testimonials">
              <div class="icon">
                <img src="@/assets/icons/happy.png" alt="Happy Clients" />
              </div>
              <div class="text">
                <h3>95+</h3>
                <strong>Happy Clients</strong>
              </div>
              <i class="fas fa-angle-right" aria-hidden="true" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- end of statistics section -->
</template>

<style lang="scss" scoped></style>
