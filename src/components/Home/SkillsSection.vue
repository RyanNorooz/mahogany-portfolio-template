<script setup lang="ts">
import {
  Skills_html5,
  Skills_css3,
  Skills_javascript,
  Skills_typescript,
  Skills_jquery,
  Skills_bootstrap,
  Skills_angular,
  Skills_react,
  Skills_vue,
  Skills_firebase,
  Skills_pugjs,
  Skills_sass,
  Skills_ajax,
  Skills_gulp,
  Skills_webpack,
  Skills_git,
  Skills_npm,
  Skills_command,
  Skills_vscode,
  Skills_trello,
  Skills_clickup,
  Skills_slack,
  Skills_photoshop,
  Skills_adobexd,
} from '@/assets/skills'
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      // flag to toggle between skills types in skills section
      skillsType: '',

      // list of skills items to loop through it
      skillsItems: [
        {
          imgUrl: Skills_html5,
          title: 'HTML5',
        },
        {
          imgUrl: Skills_css3,
          title: 'CSS3',
        },
        {
          imgUrl: Skills_javascript,
          title: 'JavaScript',
        },
        {
          imgUrl: Skills_typescript,
          title: 'TypeScript',
        },
        {
          imgUrl: Skills_jquery,
          title: 'jQuery',
        },
        {
          imgUrl: Skills_bootstrap,
          title: 'Bootstrap',
        },
        {
          imgUrl: Skills_angular,
          title: 'Angular',
        },
        {
          imgUrl: Skills_react,
          title: 'React',
        },
        {
          imgUrl: Skills_vue,
          title: 'Vue',
        },
        {
          imgUrl: Skills_firebase,
          title: 'Firebase',
        },
        {
          imgUrl: Skills_pugjs,
          title: 'PugJS',
        },
        {
          imgUrl: Skills_sass,
          title: 'SASS',
        },
      ],

      // list of tools items to loop through it
      toolsItems: [
        {
          imgUrl: Skills_ajax,
          title: 'Ajax',
        },
        {
          imgUrl: Skills_gulp,
          title: 'Gulp',
        },
        {
          imgUrl: Skills_webpack,
          title: 'Webpack',
        },
        {
          imgUrl: Skills_git,
          title: 'Git (Github)',
        },
        {
          imgUrl: Skills_npm,
          title: 'Npm',
        },
        {
          imgUrl: Skills_command,
          title: 'Command Line',
        },
        {
          imgUrl: Skills_vscode,
          title: 'VsCode',
        },
        {
          imgUrl: Skills_trello,
          title: 'Trello',
        },
        {
          imgUrl: Skills_clickup,
          title: 'ClickUp',
        },
        {
          imgUrl: Skills_slack,
          title: 'Slack',
        },
        {
          imgUrl: Skills_photoshop,
          title: 'Photoshop',
        },
        {
          imgUrl: Skills_adobexd,
          title: 'Adobe XD',
        },
      ],
    }
  },

  mounted() {
    // initialize the first displayed type of skills
    this.initSkillsFirstType()
  },

  methods: {
    // initialize the first displayed type of skills
    initSkillsFirstType() {
      const skillsSwitchBtn = this.$refs.skillsSwitchBtn as HTMLElement

      // return if disabled
      if (!skillsSwitchBtn) {
        return
      }

      this.skillsType = skillsSwitchBtn.querySelector('input')?.value || ''
    },
  },
})
</script>

<template>
  <!-- start of skills section -->
  <div id="skills" class="skills-section section" tabindex="-1">
    <div class="container">
      <div class="section-content row">
        <!-- text box -->
        <div class="skills-text col-lg-6">
          <div class="text-box-inline">
            <span class="subtitle">my skills</span>
            <h2>
              What My Programming
              <br />
              Skills Included?
            </h2>
            <p>
              I develop simple, intuitive and responsive user interface that
              helps users get things done with less effort and time with those
              technologies.
            </p>
            <div ref="skillsSwitchBtn" class="toggle-switch-btn">
              <input
                id="skills-list"
                v-model="skillsType"
                type="radio"
                value="skills"
                checked
              />
              <label for="skills-list" class="link-hover">Skills</label>
              <input
                id="tools-list"
                v-model="skillsType"
                type="radio"
                value="tools"
              />
              <label for="tools-list" class="link-hover">Tools</label>
              <span
                class="switcher-toggle"
                style="width: calc((100% - 8px) / 2)"
              ></span>
            </div>
          </div>
        </div>

        <!-- skills items -->
        <div class="skills-items col-lg-6">
          <!-- skills list -->
          <ul v-show="skillsType === 'skills'" v-staggerdelay="50">
            <li
              v-for="skill in skillsItems"
              :key="skill.title"
              v-tooltip="{ text: skill.title, dir: 'top' }"
              tabindex="0"
            >
              <div class="skill-icon">
                <img :src="skill.imgUrl" :alt="skill.title" />
              </div>
            </li>
          </ul>

          <!-- tools list -->
          <ul v-show="skillsType === 'tools'" v-staggerdelay="50">
            <li
              v-for="tool in toolsItems"
              :key="tool.title"
              v-tooltip="{ text: tool.title, dir: 'top' }"
              tabindex="0"
            >
              <div class="skill-icon">
                <img :src="tool.imgUrl" :alt="tool.title" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- end of skills section -->
</template>

<style lang="scss" scoped></style>
