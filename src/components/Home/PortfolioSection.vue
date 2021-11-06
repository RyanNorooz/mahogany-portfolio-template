<script setup lang="ts"></script>

<script lang="ts">
import VanillaTilt from 'vanilla-tilt'
import { mapState } from 'pinia'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'PortfolioSection',

  data() {
    return {
      // current page of portfolio items
      portfolioItemsPage: 1,

      // portfolio items per page
      itemsPerPage: 7,

      // portfolio items filter by type
      filters: ['All', 'HTML', 'Angular', 'Vue'],
      currentFilter: 'All',

      // portfolio archive name
      portfolioArchiveName: '',

      // viewed portfolio items
      portfolioItems: [],
    }
  },

  computed: {
    ...mapState(useMainStore, ['allPortfolioItems']),

    // filtered portfolio items
    filteredPortfolioItems() {
      // const urlParams = new URLSearchParams(window.location.search)
      // const tax = urlParams.get('tax')

      const tax = this.$route.query.tax

      if (tax) {
        return this.portfolioItems
      } else {
        return this.portfolioItems.filter(
          (item) =>
            this.currentFilter === 'All' || item.category === this.currentFilter
        )
      }
    },
  },

  mounted() {
    // get portfolio items
    this.getPortfolioItems()

    if (window.innerWidth >= 992) {
      // initialize VanillaTilt library in portfolio section
      this.initializeTilt()
    }
  },

  methods: {
    // initialize VanillaTilt library in portfolio section
    initializeTilt() {
      const portfolioItems = this.$refs.portfolioItems

      // return if disabled
      if (!portfolioItems) {
        return
      }

      VanillaTilt.init(portfolioItems.querySelectorAll('.portfolio-item'), {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
      })
    },

    // get portfolio items
    getPortfolioItems() {
      const itemsArr = this.allPortfolioItems
        .filter((item) => {
          const urlParams = new URLSearchParams(window.location.search)
          // const tax = urlParams.get('tax')

          const tax = this.$route.query.tax

          if (tax) {
            if (tax === 'cat') {
              const cat = urlParams.get('cat') ?? ''

              this.portfolioArchiveName = cat
              return item.category === cat
            } else if (tax === 'tools') {
              const tool = urlParams.get('tools')

              this.portfolioArchiveName = tool ?? ''
              return item.tools.includes(tool ?? '')
            }
          } else {
            return (
              this.currentFilter === 'All' ||
              item.category === this.currentFilter
            )
          }
        })
        .slice(
          this.filteredPortfolioItems.length,
          this.portfolioItemsPage * this.itemsPerPage
        )

      // check if have works or not
      if (itemsArr.length) {
        this.portfolioItems.push(...itemsArr)

        // initialize VanillaTilt for new items
        setTimeout(
          () => this.portfolioItemsPage > 1 && this.initializeTilt(),
          0
        )

        this.portfolioItemsPage++
      } else {
        // show message "No works" to the user
        this.setNotify({
          className: 'danger',
          msg: (this.$refs.portfolioItems as HTMLElement).getAttribute(
            'data-no-works-msg'
          ),
          time: 3000,
        })
      }
    },

    // filter portfolio items
    filterPortfolioItems(filter: string) {
      this.currentFilter = filter
      this.portfolioItemsPage = 1

      if (this.filteredPortfolioItems.length) {
        // initialize VanillaTilt for new items
        setTimeout(() => this.initializeTilt(), 0)
      } else {
        // get new portfolio items
        this.getPortfolioItems()
      }
    },
  },
})
</script>

<template>
  <!-- start of portfolio section -->
  <div id="portfolio" class="portfolio-section section" tabindex="-1">
    <div class="container">
      <div class="section-content">
        <!-- portfolio items -->
        <ul
          ref="portfolioItems"
          class="portfolio-items"
          data-no-works-msg="No works to load"
        >
          <li>
            <!-- text box -->
            <div class="text-box-inline">
              <span class="subtitle">my works</span>
              <h2>
                See My Works Which
                <br />
                Will Amaze You!
              </h2>
              <p>
                We develop the best quality website that serves for the
                long-term. Well-documented, clean, easy and elegant interface
                helps any non-technical clients.
              </p>
              <ul class="works-filter">
                <li v-for="filter in filters" :key="filter">
                  <button
                    :class="{ active: currentFilter === filter }"
                    @click="filterPortfolioItems(filter)"
                  >
                    {{ filter }}
                  </button>
                </li>
              </ul>
            </div>
          </li>

          <!-- start items list -->
          <li
            v-for="work in filteredPortfolioItems"
            :key="work.title.en"
            class="portfolio-item"
          >
            <a :href="work.url" target="_blank" rel="noopener">
              <div class="item-img">
                <img :src="work.imgUrl" :alt="work.title.en" />
              </div>
              <div class="item-details">
                <h3 class="title">{{ work.title.en }}</h3>
                <div class="date">{{ work.date.en }}</div>
              </div>
            </a>
          </li>
          <!-- end items list -->

          <li>
            <button class="more" @click="getPortfolioItems">
              Load more works
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- end of portfolio section -->
</template>

<style lang="scss" scoped>
//
</style>
