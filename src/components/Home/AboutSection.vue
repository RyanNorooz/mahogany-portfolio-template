<script setup lang="ts"></script>

<script lang="ts">
export default defineComponent({ name: 'AboutSection' })
</script>

<template>
  <!-- start of about section -->
  <div id="about" class="about-section section" tabindex="-1">
    <div class="container">
      <div class="section-content row">
        <!-- about image -->
        <div class="about-img col-lg-6">
          <div v-clone class="layer">
            <img src="@/assets/about-img.png" alt="User Name" />
          </div>
        </div>

        <!-- text box -->
        <div class="about-text col-lg-6">
          <div class="text-box-inline">
            <span class="subtitle">about me</span>

            <h2>
              Need a Creative Product?
              <br />
              I can Help You!
            </h2>

            <p>
              Hi! I’m Muhammad Mabrouk, and I’m a developer who has passion for
              building clean web applications with intuitive functionality. I
              enjoy the process of turning ideas into reality using creative
              solutions. I’m always curious about learning new skills, tools,
              and concepts. In addition to working on various solo full stack
              projects, I have worked with creative teams, which involves daily
              stand-ups and communications, source control, and project
              management.
            </p>

            <div class="btns-container">
              <a href="#contact" class="btn btn-primary">Hire Me</a>
              <a download href="#" class="btn btn-outline-light">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end of about section -->
</template>

<style lang="scss" scoped></style>
