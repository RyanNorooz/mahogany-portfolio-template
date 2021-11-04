<script lang="ts">
export default defineComponent({ name: 'PortfolioPage' })
</script>

<script setup lang="ts"></script>

<template>
  <!-- start of portfolio page -->
  <div class="portfolio-page portfolio-section section page">
    <div class="container">
      <div class="section-content">
        <!-- portfolio items -->
        <ul ref="portfolioItems" class="portfolio-items">
          <li>
            <!-- text box -->
            <div class="text-box-block">
              <span class="subtitle">
                <a
                  :href="
                    'archive-portfolio.html?tax=cat&cat=' +
                    getSinglePortfolioItem.category
                  "
                  >{{ getSinglePortfolioItem.category }}</a
                >
              </span>
              <h2>{{ getSinglePortfolioItem.title.en }}</h2>
              <p>{{ getSinglePortfolioItem.desc.en }}</p>
              <ul class="work-tools">
                <li v-for="tool in getSinglePortfolioItem.tools" :key="tool">
                  <a :href="'archive-portfolio.html?tax=tools&tools=' + tool">{{
                    tool
                  }}</a>
                </li>
              </ul>
            </div>
          </li>

          <!-- start items list -->
          <li
            v-for="screenshot in getSinglePortfolioItem.screenshots"
            :key="screenshot.caption.en"
            class="portfolio-item"
          >
            <!-- href points to the fully sized image -->
            <a
              class="glightbox"
              target="_blank"
              rel="noopener"
              data-gallery="gallery1"
              :href="screenshot.url"
              :data-glightbox="'title:' + screenshot.caption.en"
            >
              <div class="item-img">
                <!-- thumbnails -->
                <img :src="screenshot.url" :alt="screenshot.caption.en" />
              </div>
              <div class="item-details">
                <h3 class="title">{{ screenshot.caption.en }}</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- end of portfolio page -->
</template>

<style lang="scss" scoped>
//
</style>
