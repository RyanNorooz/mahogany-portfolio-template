<script setup lang="ts"></script>

<script lang="ts">
import { mapState } from 'pinia'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'ExperienceSection',

  data() {
    return {
      // list of experience items to loop through it
      experienceItems: [
        {
          date: '2009',
          companyName: { en: 'Google Inc.', ar: 'شركة جوجل' },
          jobTitle: { en: 'Front-End Developer', ar: 'مطور الواجهة الأمامية' },
          desc: {
            en: 'Monitored technical aspects of the front-end delivery for projects.',
            ar: 'مراقبة الجوانب الفنية لتطوير الواجهات الأمامية للمشاريع.',
          },
        },
        {
          date: '2011',
          companyName: { en: 'Facebook Inc.', ar: 'شركة فيسبوك' },
          jobTitle: { en: 'Full Stack Developer', ar: 'مطوّر الويب المتكامل' },
          desc: {
            en: 'Collaborate with creative and development teams on the execution of ideas.',
            ar: 'تعاونت مع الفرق الإبداعية في تطوير وتنفيذ أفكار مبتكرة.',
          },
        },
        {
          date: '2013',
          companyName: { en: 'Envato Inc.', ar: 'شركة انفاتو' },
          jobTitle: { en: 'UI/UX Developer', ar: 'مطور UI/UX' },
          desc: {
            en: 'Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript.',
            ar: 'تم تحويل تخطيطات Photoshop إلى صفحات ويب باستخدام HTML و CSS و JavaScript.',
          },
        },
        {
          date: '2015',
          companyName: { en: 'Google Inc.', ar: 'شركة جوجل' },
          jobTitle: { en: 'Front-End Developer', ar: 'مطور الواجهة الأمامية' },
          desc: {
            en: 'Monitored technical aspects of the front-end delivery for projects.',
            ar: 'مراقبة الجوانب الفنية لتطوير الواجهات الأمامية للمشاريع.',
          },
        },
        {
          date: '2017',
          companyName: { en: 'Facebook Inc.', ar: 'شركة فيسبوك' },
          jobTitle: { en: 'Full Stack Developer', ar: 'مطوّر الويب المتكامل' },
          desc: {
            en: 'Collaborate with creative and development teams on the execution of ideas.',
            ar: 'تعاونت مع الفرق الإبداعية في تطوير وتنفيذ أفكار مبتكرة.',
          },
        },
        {
          date: '2019',
          companyName: { en: 'Google Inc.', ar: 'شركة جوجل' },
          jobTitle: { en: 'Front-End Developer', ar: 'مطور الواجهة الأمامية' },
          desc: {
            en: 'Monitored technical aspects of the front-end delivery for projects.',
            ar: 'مراقبة الجوانب الفنية لتطوير الواجهات الأمامية للمشاريع.',
          },
        },
        {
          date: '2021',
          companyName: { en: 'Facebook Inc.', ar: 'شركة فيسبوك' },
          jobTitle: { en: 'Full Stack Developer', ar: 'مطوّر الويب المتكامل' },
          desc: {
            en: 'Collaborate with creative and development teams on the execution of ideas.',
            ar: 'تعاونت مع الفرق الإبداعية في تطوير وتنفيذ أفكار مبتكرة.',
          },
        },
        {},
        {},
      ],
    }
  },

  computed: {
    ...mapState(useMainStore, ['experienceYears']),

    // split experience items into chunks of 3 items
    experienceChunks(): Record<string, any>[][] {
      return [...Array(Math.ceil(this.experienceItems.length / 3))].map(() =>
        this.experienceItems.splice(0, 3)
      )
    },
  },
})
</script>

<template>
  <!-- start of experience section -->
  <div id="experience" class="experience-section section" tabindex="-1">
    <div class="container">
      <div class="section-content row">
        <!-- timeline -->
        <div class="experience-timeline col-lg-6">
          <ul class="outer-ul">
            <li
              v-for="(group, index) in experienceChunks"
              :key="index"
              class="outer-li"
            >
              <ul class="inner-ul">
                <li
                  v-for="(item, itemIndex) in group"
                  :key="itemIndex"
                  class="has-ultimate-tooltip"
                  tabindex="0"
                >
                  <template v-if="Object.keys(item).length > 0">
                    <h3>{{ item.date }}</h3>
                    <div class="ultimate-tooltip">
                      <h4 class="ultimate-tooltip-title">
                        {{ item.companyName?.en }}
                      </h4>
                      <h5 class="ultimate-tooltip-subtitle">
                        {{ item.jobTitle?.en }}
                      </h5>
                      <p>{{ item.desc?.en }}</p>
                    </div>
                    <div class="ultimate-tooltip-arrow"></div>
                  </template>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- text box -->
        <div class="experience-text col-lg-6">
          <div class="text-box-inline">
            <span class="subtitle">experience</span>
            <h2>
              {{ experienceYears }}+ Years of Experience
              <br />
              With Many Awards!
            </h2>
            <p>
              I have been developing sites and apps for
              {{ experienceYears }} years and i know for sure the main trends
              and directions of modern design, I have been a visionary and a
              reliable software engineering partner for world-class brands. You
              will get a decent result as you expect.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end of experience section -->
</template>

<style lang="scss" scoped>
//
</style>
