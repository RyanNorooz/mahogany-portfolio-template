<script setup lang="ts">
import {
  TestimonialsAnonymousUserAvatar,
  TestimonialsAvatar1,
  TestimonialsAvatar2,
  TestimonialsAvatar3,
  TestimonialsAvatar4,
  TestimonialsAvatar5,
  TestimonialsAvatar6,
  TestimonialsAvatar7,
  TestimonialsAvatar8,
  TestimonialsAvatar9,
  TestimonialsAvatar10,
  TestimonialsAvatar11,
  TestimonialsAvatar12,
  TestimonialsAvatar13,
  TestimonialsAvatar14,
  TestimonialsAvatar15,
  TestimonialsAvatar16,
  TestimonialsAvatar17,
  TestimonialsAvatar18,
} from '@/assets/testimonials'
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      // list of testimonials items to loop through it
      testimonialsItems: [
        {
          imgUrl: TestimonialsAvatar1,
          quoteContent: {
            en: 'Nafie simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Nafie to anyone.',
            ar: 'محمد يقدم خدمات مذهلة في تطوير الويب، ولديه فريق محترف يجعل التعامل معهم مطمئن للغاية. أوصي بفريقهم للجميع.',
          },

          quoteAuthor: { en: 'Terrell Grimes', ar: 'جابر العواني' },
          jobTitle: { en: 'Photographer', ar: 'مصور فوتوغرافي' },
        },
        {
          imgUrl: TestimonialsAvatar2,
          quoteContent: {
            en: 'Excellent Team to work with. Always positive to find the most appropriate solution. Nafie is one of the professional web development agency that provides awesome services.',
            ar: 'فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.',
          },

          quoteAuthor: { en: 'Lonny Corkery', ar: 'حسون القلال' },
          jobTitle: { en: 'Project Manager', ar: 'مدير المشاريع' },
        },
        {
          imgUrl: TestimonialsAvatar3,
          quoteContent: {
            en: 'Nafie team is very professional, always delivers high quality results, and is always there to help. Look forward to working with Nafie in other projects.',
            ar: 'محمد مطور محترف للغاية يقدم دائمًا نتائج عالية الجودة ، وهو دائمًا موجود للمساعدة. نتطلع إلى العمل معه في مشاريع أخرى.',
          },

          quoteAuthor: { en: 'Max Schmidt DDS', ar: 'مصطفى الخليفي' },
          jobTitle: { en: 'CEO, Designer', ar: 'أخصائي SEO' },
        },
        {
          imgUrl: TestimonialsAvatar4,
          quoteContent: {
            en: 'Nafie worked on a handful of projects for us and has always exceeded our expectations. Nafie team is dedicated, talented and a delight to work with.',
            ar: 'عمل محمد في عدد كبير من المشاريع لأجلنا وكان دائمًا يفوق توقعاتنا. مطور متخصص وموهوب ونسعد دائمًا بالعمل معه.',
          },

          quoteAuthor: { en: 'Amir Stoltenberg', ar: 'عباس العنابي' },
          jobTitle: { en: 'Sales Manager', ar: 'مدير مبيعات' },
        },
        {
          imgUrl: TestimonialsAvatar5,
          quoteContent: {
            en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!',
            ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.',
          },

          quoteAuthor: { en: 'Kenton Marquardt', ar: 'سمير النجار' },
          jobTitle: { en: 'Art Director', ar: 'آرت دايركتور' },
        },
        {
          imgUrl: TestimonialsAvatar6,
          quoteContent: {
            en: 'Muhammad was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
            ar: 'أنا سعيد حقًا بالعمل مع محمد وأتطلع إلى العمل معه مرة أخرى قريبا. هو بالتأكيد من المطورين الذي يمكنك الوثوق بهم للعمل على مشروعك من البداية إلى النهاية.',
          },

          quoteAuthor: { en: 'Reyna Hammes', ar: 'أمير داوود' },
          jobTitle: { en: 'Motion Graphic Animator', ar: 'مصمم موشن جرافيك' },
        },
        {
          imgUrl: TestimonialsAvatar7,
          quoteContent: {
            en: 'Muhammad was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
            ar: 'أنا سعيد حقًا بالعمل مع محمد وأتطلع إلى العمل معه مرة أخرى قريبا. هو بالتأكيد من المطورين الذي يمكنك الوثوق بهم للعمل على مشروعك من البداية إلى النهاية.',
          },

          quoteAuthor: { en: 'Jovan Parisian', ar: 'منصور السقاط' },
          jobTitle: { en: 'Motion Graphic Animator', ar: 'مصمم موشن جرافيك' },
        },
        {
          imgUrl: TestimonialsAvatar8,
          quoteContent: {
            en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!',
            ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.',
          },

          quoteAuthor: { en: 'Pasquale Deckow', ar: 'عطا بن عاشور' },
          jobTitle: { en: 'Art Director', ar: 'آرت دايركتور' },
        },
        {
          imgUrl: TestimonialsAvatar9,
          quoteContent: {
            en: 'Nafie worked on a handful of projects for us and has always exceeded our expectations. Nafie team is dedicated, talented and a delight to work with.',
            ar: 'عمل محمد في عدد كبير من المشاريع لأجلنا وكان دائمًا يفوق توقعاتنا. مطور متخصص وموهوب ونسعد دائمًا بالعمل معه.',
          },

          quoteAuthor: { en: 'Rosa Ferry', ar: 'نافع حاتم' },
          jobTitle: { en: 'Sales Manager', ar: 'مدير مبيعات' },
        },
        {
          imgUrl: TestimonialsAvatar10,
          quoteContent: {
            en: 'Nafie team is very professional, always delivers high quality results, and is always there to help. Look forward to working with Nafie in other projects.',
            ar: 'محمد مطور محترف للغاية يقدم دائمًا نتائج عالية الجودة ، وهو دائمًا موجود للمساعدة. نتطلع إلى العمل معه في مشاريع أخرى.',
          },

          quoteAuthor: { en: 'Keshaun Robel', ar: 'صدقي الطويل' },
          jobTitle: { en: 'CEO, Designer', ar: 'أخصائي SEO' },
        },
        {
          imgUrl: TestimonialsAvatar11,
          quoteContent: {
            en: 'Excellent Team to work with. Always positive to find the most appropriate solution. Nafie is one of the professional web development agency that provides awesome services.',
            ar: 'فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.',
          },

          quoteAuthor: { en: 'Casper Paucek', ar: 'حسان ادريس' },
          jobTitle: { en: 'Project Manager', ar: 'مدير المشاريع' },
        },
        {
          imgUrl: TestimonialsAvatar12,
          quoteContent: {
            en: 'Nafie simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Nafie to anyone.',
            ar: 'محمد يقدم خدمات مذهلة في تطوير الويب، ولديه فريق محترف يجعل التعامل معهم مطمئن للغاية. أوصي بفريقهم للجميع.',
          },

          quoteAuthor: { en: 'Archibald Fadel', ar: 'مجد الكافي' },
          jobTitle: { en: 'Photographer', ar: 'مصور فوتوغرافي' },
        },
        {
          imgUrl: TestimonialsAvatar13,
          quoteContent: {
            en: 'Nafie simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Nafie to anyone.',
            ar: 'محمد يقدم خدمات مذهلة في تطوير الويب، ولديه فريق محترف يجعل التعامل معهم مطمئن للغاية. أوصي بفريقهم للجميع.',
          },

          quoteAuthor: { en: 'Tabitha Denesik', ar: 'آسر بنسلامة' },
          jobTitle: { en: 'Photographer', ar: 'مصور فوتوغرافي' },
        },
        {
          imgUrl: TestimonialsAvatar14,
          quoteContent: {
            en: 'Excellent Team to work with. Always positive to find the most appropriate solution. Nafie is one of the professional web development agency that provides awesome services.',
            ar: 'فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.',
          },

          quoteAuthor: { en: 'Javon Bogan', ar: 'صهيب الشريف' },
          jobTitle: { en: 'Project Manager', ar: 'مدير المشاريع' },
        },
        {
          imgUrl: TestimonialsAvatar15,
          quoteContent: {
            en: 'Nafie team is very professional, always delivers high quality results, and is always there to help. Look forward to working with Nafie in other projects.',
            ar: 'محمد مطور محترف للغاية يقدم دائمًا نتائج عالية الجودة ، وهو دائمًا موجود للمساعدة. نتطلع إلى العمل معه في مشاريع أخرى.',
          },

          quoteAuthor: { en: 'Duncan Kemmer', ar: 'سيد كرم' },
          jobTitle: { en: 'CEO, Designer', ar: 'أخصائي SEO' },
        },
        {
          imgUrl: TestimonialsAvatar16,
          quoteContent: {
            en: 'Nafie worked on a handful of projects for us and has always exceeded our expectations. Nafie team is dedicated, talented and a delight to work with.',
            ar: 'عمل محمد في عدد كبير من المشاريع لأجلنا وكان دائمًا يفوق توقعاتنا. مطور متخصص وموهوب ونسعد دائمًا بالعمل معه.',
          },

          quoteAuthor: { en: 'Coy Johns', ar: 'هيثم الشريف' },
          jobTitle: { en: 'Sales Manager', ar: 'مدير مبيعات' },
        },
        {
          imgUrl: TestimonialsAvatar17,
          quoteContent: {
            en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!',
            ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.',
          },

          quoteAuthor: { en: 'Murphy Roberts', ar: 'إسلام مصطفى' },
          jobTitle: { en: 'Art Director', ar: 'آرت دايركتور' },
        },
        {
          imgUrl: TestimonialsAvatar18,
          quoteContent: {
            en: 'Muhammad was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
            ar: 'أنا سعيد حقًا بالعمل مع محمد وأتطلع إلى العمل معه مرة أخرى قريبا. هو بالتأكيد من المطورين الذي يمكنك الوثوق بهم للعمل على مشروعك من البداية إلى النهاية.',
          },

          quoteAuthor: { en: 'Dimitri Lockman', ar: 'وسيم السقا' },
          jobTitle: { en: 'Motion Graphic Animator', ar: 'مصمم موشن جرافيك' },
        },
      ],
    }
  },
})
</script>

<template>
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
                :src="item.imgUrl || TestimonialsAnonymousUserAvatar"
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
</template>

<style lang="scss" scoped>
//
</style>
