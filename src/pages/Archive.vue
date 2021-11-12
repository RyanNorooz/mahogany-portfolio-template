<script lang="ts">
export default defineComponent({ name: 'ProjectArchivePage' })
</script>

<script setup lang="ts"></script>

<template>
  <!-- start of archive page -->
  <div class="archive-page portfolio-section section page">
    <div class="container">
      <div class="section-title">
        <span class="subtitle">{{ portfolioArchiveName }}</span>
        <h2 class="title">
          The latest projects in
          <br />
          {{ portfolioArchiveName }} taxonomy
        </h2>
      </div>

      <div class="section-content">
        <!-- portfolio items -->
        <ul
          ref="portfolioItems"
          class="portfolio-items"
          data-no-works-msg="No works to load"
        >
          <li
            v-for="work in filteredPortfolioItems"
            :key="work.title.en"
            class="portfolio-item"
          >
            <router-link :to="work.url" target="_blank" rel="noopener">
              <div class="item-img">
                <img :src="work.imgUrl" :alt="work.title.en" />
              </div>
              <div class="item-details">
                <h3 class="title">{{ work.title.en }}</h3>
                <div class="date">{{ work.date.en }}</div>
              </div>
            </router-link>
          </li>
          <li>
            <button class="more" @click="getPortfolioItems">
              Load more works
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- end of archive page -->
</template>

<style lang="scss" scoped></style>
