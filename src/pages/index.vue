<script lang="ts">
export default defineComponent({ name: 'HomePage' })
</script>

<script setup lang="ts">
//
</script>

<template>
  <div id="home-page">
    <!-- start of hero section -->
    <div id="hero" ref="heroSection" class="hero-section" data-paneffect="true">
      <div class="hero-img">
        <div v-clone class="layer">
          <img src="assets/images/hero-img.png" alt="User Name" />
        </div>
      </div>

      <div class="hero-text">
        <h2>
          We Design & Build
          <br />
          Creative Products
        </h2>
        <a href="#contact" class="btn">Get In Touch</a>
      </div>

      <div class="social">
        <ul>
          <li>
            <a
              v-tooltip="{ text: 'Facebook', dir: 'right' }"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              v-tooltip="{ text: 'Twitter', dir: 'right' }"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              v-tooltip="{ text: 'LinkedIn', dir: 'right' }"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="scroll-down">
        <a href="#about" title="Scroll Down">Scroll</a>
      </div>
    </div>
    <!-- end of hero section -->

    <!-- start of statistics section -->
    <div id="statistics" class="statistics-section section">
      <div class="section-content">
        <div class="container">
          <ul class="statistics-items row">
            <li class="col-sm-12 col-md-6 col-lg-4">
              <a href="#experience">
                <div class="icon">
                  <img
                    src="assets/images/icons/emblem.png"
                    alt="Years of Experience"
                  />
                </div>
                <div class="text">
                  <h3>{{ experienceYears }}+</h3>
                  <strong>Years of Experience</strong>
                </div>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </li>
            <li class="col-sm-12 col-md-6 col-lg-4">
              <a href="#portfolio">
                <div class="icon">
                  <img
                    src="assets/images/icons/check-mark.png"
                    alt="Completed Projects"
                  />
                </div>
                <div class="text">
                  <h3>230+</h3>
                  <strong>Completed Projects</strong>
                </div>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </li>
            <li class="col-sm-12 col-md-6 col-lg-4">
              <a href="#testimonials">
                <div class="icon">
                  <img
                    src="assets/images/icons/happy.png"
                    alt="Happy Clients"
                  />
                </div>
                <div class="text">
                  <h3>95+</h3>
                  <strong>Happy Clients</strong>
                </div>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- end of statistics section -->

    <!-- start of about section -->
    <div id="about" class="about-section section" tabindex="-1">
      <div class="container">
        <div class="section-content row">
          <!-- about image -->
          <div class="about-img col-lg-6">
            <div v-clone class="layer">
              <img src="assets/images/about-img.png" alt="User Name" />
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
                Hi! I’m Muhammad Mabrouk, and I’m a developer who has passion
                for building clean web applications with intuitive
                functionality. I enjoy the process of turning ideas into reality
                using creative solutions. I’m always curious about learning new
                skills, tools, and concepts. In addition to working on various
                solo full stack projects, I have worked with creative teams,
                which involves daily stand-ups and communications, source
                control, and project management.
              </p>
              <div class="btns-container">
                <a href="#contact" class="btn btn-primary">Hire Me</a>
                <a download href="#" class="btn btn-outline-light"
                  >Download CV</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of about section -->

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
                    v-for="item in group"
                    class="has-ultimate-tooltip"
                    tabindex="0"
                  >
                    <template v-if="Object.keys(item).length > 0">
                      <h3>{{ item.date }}</h3>
                      <div class="ultimate-tooltip">
                        <h4 class="ultimate-tooltip-title">
                          {{ item.companyName.en }}
                        </h4>
                        <h5 class="ultimate-tooltip-subtitle">
                          {{ item.jobTitle.en }}
                        </h5>
                        <p>{{ item.desc.en }}</p>
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
                reliable software engineering partner for world-class brands.
                You will get a decent result as you expect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of experience section -->

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

    <!-- start of testimonials section -->
    <div id="testimonials" class="testimonials-section section" tabindex="-1">
      <div class="container">
        <div class="section-title">
          <span class="subtitle">testimonials</span>
          <h2 class="title">
            Check What's My Clients
            <br />
            Say About Me
          </h2>
        </div>
      </div>

      <div class="section-content">
        <ul v-staggerdelay="500" class="testimonials-items">
          <li
            v-for="item in testimonialsItems"
            :key="item.quoteAuthor.en"
            class="has-ultimate-tooltip"
            tabindex="0"
          >
            <div class="testimonials-item">
              <div class="testimonial-author-img">
                <img
                  :src="
                    item.imgUrl ||
                    'assets/images/testimonials/anonymous-user.png'
                  "
                  :alt="item.quoteAuthor.en"
                />
              </div>
              <div class="ultimate-tooltip">
                <p>{{ item.quoteContent.en }}</p>
                <h4 class="ultimate-tooltip-title">
                  {{ item.quoteAuthor.en }}
                </h4>
                <h5 class="ultimate-tooltip-subtitle">
                  {{ item.jobTitle.en }}
                </h5>
              </div>
              <div class="ultimate-tooltip-arrow"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- end of testimonials section -->

    <!-- start of contact section -->
    <div id="contact" class="contact-section section" tabindex="-1">
      <div class="container">
        <div class="section-content row">
          <!-- text box -->
          <div class="contact-text col-lg-6">
            <div class="text-box-inline">
              <span class="subtitle">contact</span>
              <h2>
                Have You Any Project?
                <br />
                Please Drop a Message
              </h2>
              <p>
                Get in touch and let me know how i can help. Fill out the form
                and i’ll be in touch as soon as possible.
              </p>
            </div>

            <!-- contact info -->
            <ul class="contact-info">
              <li>
                <img src="assets/images/icons/address.png" alt="Address" />
                <div>
                  <strong>Address:</strong>
                  941 Saqrqorish Road, alandalos, grnata, wa 47122-4194
                </div>
              </li>
              <li>
                <img src="assets/images/icons/phone.png" alt="Phone" />
                <div>
                  <strong>Phone:</strong>
                  <ul>
                    <li>
                      <a href="tel:02966202290" class="ltr-dir"
                        >(02) 966 202 290</a
                      >
                    </li>
                    <li>
                      <a href="tel:02966202291" class="ltr-dir"
                        >(02) 966 202 291</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <img src="assets/images/icons/email.png" alt="Email" />
                <div>
                  <strong>Email:</strong>
                  <ul>
                    <li><a href="mailto:info@nafie.com">info@nafie.com</a></li>
                    <li>
                      <a href="mailto:support@nafie.com">support@nafie.com</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <!-- social links -->
            <ul class="social">
              <li>
                <a
                  v-tooltip="{ text: 'Facebook', dir: 'top' }"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  v-tooltip="{ text: 'Twitter', dir: 'top' }"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  v-tooltip="{ text: 'LinkedIn', dir: 'top' }"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  v-tooltip="{ text: 'YouTube', dir: 'top' }"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>

          <!-- contact form -->
          <div class="col-lg-6">
            <form
              ref="contactForm"
              class="contact-form form-styled"
              action="contact_form.php"
              data-success-msg="Message sent successfully!"
              data-err-msg="Oops! something went wrong, please try again."
            >
              <div class="group">
                <label>Name</label>
                <div class="control has-prefix-icon">
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. John Doe"
                    minlength="3"
                    required
                  />
                  <i
                    class="fa fa-user-circle prefix-icon"
                    aria-hidden="true"
                  ></i>

                  <!-- validation errors messages -->
                  <div class="errors-msgs">
                    <input
                      class="required"
                      type="hidden"
                      value="Name is required"
                    />
                    <input
                      class="minLength"
                      type="hidden"
                      value="Name must be at least 3 characters"
                    />
                  </div>
                </div>
              </div>
              <div class="group">
                <label>Email</label>
                <div class="control has-prefix-icon">
                  <input
                    class="ltr-dir"
                    type="email"
                    inputmode="email"
                    name="email"
                    placeholder="e.g. john.doe@gmail.com"
                    required
                  />
                  <i class="fa fa-envelope prefix-icon" aria-hidden="true"></i>

                  <!-- validation errors messages -->
                  <div class="errors-msgs">
                    <input
                      class="required"
                      type="hidden"
                      value="Email is required"
                    />
                    <input
                      class="invalid"
                      type="hidden"
                      value="Please enter a valid email address"
                    />
                  </div>
                </div>
              </div>
              <div class="group phone-number">
                <label>Phone <span class="optional">(Optional)</span></label>
                <div class="control has-prefix-icon">
                  <input
                    type="tel"
                    inputmode="tel"
                    name="phone"
                    placeholder="Phone Number"
                  />
                  <i class="fa fa-phone prefix-icon" aria-hidden="true"></i>

                  <!-- validation errors messages -->
                  <div class="errors-msgs">
                    <input
                      class="invalid"
                      type="hidden"
                      value="Please enter a valid Phone Number"
                    />
                  </div>
                </div>
              </div>
              <div class="group">
                <label>Message</label>
                <div class="control has-prefix-icon">
                  <textarea
                    name="message"
                    placeholder="Write message..."
                    required
                  ></textarea>
                  <i class="fa fa-comments prefix-icon" aria-hidden="true"></i>

                  <!-- validation errors messages -->
                  <div class="errors-msgs">
                    <input
                      class="required"
                      type="hidden"
                      value="Message is required"
                    />
                  </div>
                </div>
              </div>
              <div class="group">
                <div class="control">
                  <button
                    class="submit-btn btn btn-dark"
                    type="button"
                    @click="contactFormValidation"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- end of contact section -->
  </div>
</template>

<style lang="scss" scoped>
//
</style>
