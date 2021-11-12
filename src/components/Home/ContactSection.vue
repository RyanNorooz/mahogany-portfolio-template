<script setup lang="ts">
import { mapActions } from 'pinia'
import { useMainStore } from '@/stores/main'
</script>

<script lang="ts">
export default defineComponent({
  name: 'ContactSection',

  methods: {
    ...mapActions(useMainStore, ['setNotify']),

    // contact form validation
    contactFormValidation() {
      // contact form
      const contactForm = this.$refs.contactForm as HTMLFormElement

      // form controls
      const name = contactForm.querySelector(
        'input[name="name"]'
      ) as HTMLInputElement
      const email = contactForm.querySelector(
        'input[name="email"]'
      ) as HTMLInputElement
      const phone = contactForm.querySelector(
        'input[name="phone"]'
      ) as HTMLInputElement
      const message = contactForm.querySelector(
        'textarea'
      ) as HTMLTextAreaElement

      // form validation status
      let errors = {
        name: { required: true, minLength: true },
        email: { required: true, invalid: true },
        phone: { invalid: true },
        message: { required: true },
      }

      /* --------------- */
      /* name validation */
      /* --------------- */

      // required validation
      if (name.value === '') {
        errors.name.required = true
        this.setNotify({
          id: 'nameRequired',
          className: 'danger',
          msg: name.closest('.control')?.querySelector('.errors-msgs .required')
            ?.value,
        })
      } else {
        errors.name.required = false
        this.dismissNotify('nameRequired')
      }

      // minlength validation
      if (
        name.value.length > 0 &&
        name.value.length < parseInt(name.getAttribute('minlength') || '')
      ) {
        errors.name.minLength = true
        this.setNotify({
          id: 'nameMinLength',
          className: 'danger',
          msg: name
            .closest('.control')
            ?.querySelector('.errors-msgs .minLength')?.value,
        })
      } else {
        errors.name.minLength = false
        this.dismissNotify('nameMinLength')
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.name).some((err) => errors.name[err] === true)) {
        name.classList.remove('valid')
        name.classList.add('invalid')
      } else {
        name.classList.remove('invalid')
        name.classList.add('valid')
      }

      /* ---------------- */
      /* email validation */
      /* ---------------- */

      // required validation
      if (email.value === '') {
        errors.email.required = true
        this.setNotify({
          id: 'emailRequired',
          className: 'danger',
          msg: email
            .closest('.control')
            ?.querySelector('.errors-msgs .required')?.value,
        })
      } else {
        errors.email.required = false
        this.dismissNotify('emailRequired')
      }

      // email validation
      if (
        email.value.length > 0 &&
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email.value
        )
      ) {
        errors.email.invalid = true
        this.setNotify({
          id: 'emailInvalid',
          className: 'danger',
          msg: email.closest('.control')?.querySelector('.errors-msgs .invalid')
            ?.value,
        })
      } else {
        errors.email.invalid = false
        this.dismissNotify('emailInvalid')
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.email).some((err) => errors.email[err] === true)) {
        email.classList.remove('valid')
        email.classList.add('invalid')
      } else {
        email.classList.remove('invalid')
        email.classList.add('valid')
      }

      /* ---------------- */
      /* phone validation */
      /* ---------------- */

      // phone validation
      if (
        phone.value.length > 0 &&
        !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
          phone.value
        )
      ) {
        errors.phone.invalid = true
        this.setNotify({
          id: 'phoneInvalid',
          className: 'danger',
          msg: phone.closest('.control')?.querySelector('.errors-msgs .invalid')
            ?.value,
        })
      } else {
        errors.phone.invalid = false
        this.dismissNotify('phoneInvalid')
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.phone).some((err) => errors.phone[err] === true)) {
        phone.classList.remove('valid')
        phone.classList.add('invalid')
      } else {
        phone.classList.remove('invalid')
        phone.classList.add('valid')
      }

      /* ------------------ */
      /* message validation */
      /* ------------------ */

      // required validation
      if (message.value === '') {
        errors.message.required = true
        this.setNotify({
          id: 'messageRequired',
          className: 'danger',
          msg: message
            ?.closest('.control')
            .querySelector('.errors-msgs .required')?.value,
        })
      } else {
        errors.message.required = false
        this.dismissNotify('messageRequired')
      }

      // toggle invalid errors & style classes
      if (
        Object.keys(errors.message).some((err) => errors.message[err] === true)
      ) {
        message.classList.remove('valid')
        message.classList.add('invalid')
      } else {
        message.classList.remove('invalid')
        message.classList.add('valid')
      }

      // send the message if the form is valid
      !Object.values(errors).some((control) =>
        Object.values(control).some(Boolean)
      ) && this.sendContactFormMessage(contactForm)
    },

    // send message from contact form
    sendContactFormMessage(form) {
      const url = form.getAttribute('action')
      const formData = new FormData(form)

      // start loading spinner
      this.startLoading()

      // send post request
      fetch(url, { method: 'POST', body: formData })
        .then((res) => res.text())
        .then((data) => {
          if (data === 'success') {
            // show success message
            this.setNotify({
              className: 'success',
              msg: form.getAttribute('data-success-msg'),
              time: 5000,
            })

            // reset all form inputs
            form.reset()

            // remove inputs valid classes
            form
              .querySelectorAll('.valid')
              .forEach((el) => el.classList.remove('valid'))
          } else if (data === 'error') {
            // show error message
            this.setNotify({
              className: 'danger',
              msg: form.getAttribute('data-err-msg'),
              time: 5000,
            })
          }

          // end loading spinner
          this.endLoading()

          console.log(data)
        })
        .catch((err) => console.log(err))
    },
  },
})
</script>

<template>
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
              Get in touch and let me know how i can help. Fill out the form and
              i’ll be in touch as soon as possible.
            </p>
          </div>

          <!-- contact info -->
          <ul class="contact-info">
            <li>
              <img src="@/assets/icons/address.png" alt="Address" />
              <div>
                <strong>Address:</strong>
                941 Saqrqorish Road, alandalos, grnata, wa 47122-4194
              </div>
            </li>
            <li>
              <img src="@/assets/icons/phone.png" alt="Phone" />
              <div>
                <strong>Phone:</strong>

                <ul>
                  <li>
                    <a href="tel:02966202290" class="ltr-dir">
                      (02) 966 202 290
                    </a>
                  </li>
                  <li>
                    <a href="tel:02966202291" class="ltr-dir">
                      (02) 966 202 291
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <img src="@/assets/icons/email.png" alt="Email" />
              <div>
                <strong>Email:</strong>
                <ul>
                  <li>
                    <a href="mailto:info@Website.com">info@Website.com</a>
                  </li>
                  <li>
                    <a href="mailto:support@Website.com">support@Website.com</a>
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
                <i class="fab fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                v-tooltip="{ text: 'Twitter', dir: 'top' }"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                v-tooltip="{ text: 'LinkedIn', dir: 'top' }"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                v-tooltip="{ text: 'YouTube', dir: 'top' }"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-youtube-play" aria-hidden="true"></i>
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
                  class="fas fa-user-circle prefix-icon"
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
                <i class="fas fa-envelope prefix-icon" aria-hidden="true"></i>

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
                <i class="fas fa-phone prefix-icon" aria-hidden="true"></i>

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
                <i class="fas fa-comments prefix-icon" aria-hidden="true"></i>

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
</template>

<style lang="scss" scoped></style>
