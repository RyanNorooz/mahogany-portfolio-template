<script setup lang="ts">
import GLightbox from 'glightbox'
import VanillaTilt from 'vanilla-tilt'
import { createPopper } from '@popperjs/core'

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

import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  portfolio10,
  portfolio11,
  portfolio12,
  portfolio13,
  portfolio14,
  portfolio15,
  portfolio16,
  portfolio17,
  portfolio18,
} from '@/assets/portfolio'

import {
  singlePortfolio1,
  singlePortfolio2,
  singlePortfolio3,
  singlePortfolio4,
  singlePortfolio5,
} from '@/assets/single-portfolio'
</script>

<script lang="ts">
export default defineComponent({
  name: 'HomePage',

  directives: {
    // clone directive
    clone: {
      mounted(el) {
        el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling)
      },
    },

    // add stagger delay to children elements
    staggerdelay: {
      mounted(el, binding) {
        ;[...el.children].forEach((child, i) => {
          child.setAttribute(
            'style',
            `animation-delay: ${(i + 1) * (binding.value || 100)}ms`
          )
        })
      },
    },

    // tooltip directive
    tooltip: {
      mounted(el, binding) {
        el.classList.add('has-tooltip')
        el.insertAdjacentHTML(
          'beforeend',
          `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`
        )
      },
    },
  },

  data() {
    return {
      // the date my career started (change to yours)
      careerStartDate: 2009,

      // the date copyright started (change to yours)
      copyrightStartDate: 2021,

      // toast notifications array
      notifications: [],

      // for minimizing the header on scrolling down
      startMinimizingHeaderAt: 100,
      isHeaderBig: true,
      // for toggling the header on scrolling down
      lastScrollPosition: 0,
      isHeaderHidden: false,
      // for scroll to top button
      startShowingScrollTopBtnAt: 600,
      isScrollTopBtnDisplayed: false,

      // flag to toggle focus style class
      isAnyFocus: false,

      // flag to toggle nav menu
      isNavMenuOpen: false,

      // list of nav links to loop through it
      navLinks: [
        {
          url: '#hero',
          title: { en: 'Home', ar: 'الرئيسية' },
        },
        {
          url: '#about',
          title: { en: 'About', ar: 'من أنا' },
        },
        {
          url: '#skills',
          title: { en: 'Skills', ar: 'مهاراتي' },
        },
        {
          url: '#portfolio',
          title: { en: 'Portfolio', ar: 'أعمالي' },
        },
        {
          url: '#contact',
          title: { en: 'Contact', ar: 'اتصل بي' },
        },
      ],

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

      // current page of portfolio items
      portfolioItemsPage: 1,

      // portfolio items per page
      itemsPerPage: 7,

      // portfolio items filter by type
      filters: ['All', 'HTML', 'Angular', 'Vue'],
      currentFilter: 'All',

      // portfolio archive name
      portfolioArchiveName: '',

      // list of portfolio items to loop through it
      allPortfolioItems: [
        {
          id: 1,
          url: 'single-portfolio.html?id=1',
          imgUrl: portfolio1,
          title: { en: 'Lorem Ipsum Dolor 1', ar: 'هنا عنوان المشروع 1' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'HTML',
          tools: [
            'HTML',
            'PugJS',
            'CSS',
            'SCSS',
            'JavaScript',
            'Gulp',
            'Bootstrap',
            'AJAX',
            'Vue',
            'Firebase',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 2,
          url: 'single-portfolio.html?id=2',
          imgUrl: portfolio2,
          title: { en: 'Lorem Ipsum Dolor 2', ar: 'هنا عنوان المشروع 2' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Angular',
          tools: [
            'HTML',
            'Slim',
            'CSS',
            'Less',
            'JavaScript',
            'TypeScript',
            'TailwindCSS',
            'AJAX',
            'Angular',
            'NodeJs',
            'MongoDB',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 3,
          url: 'single-portfolio.html?id=3',
          imgUrl: portfolio3,
          title: { en: 'Lorem Ipsum Dolor 3', ar: 'هنا عنوان المشروع 3' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Vue',
          tools: [
            'HTML',
            'PugJS',
            'CSS',
            'SCSS',
            'JavaScript',
            'Gulp',
            'Materialize',
            'AJAX',
            'Vue',
            'Firebase',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 4,
          url: 'single-portfolio.html?id=4',
          imgUrl: portfolio4,
          title: { en: 'Lorem Ipsum Dolor 4', ar: 'هنا عنوان المشروع 4' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'HTML',
          tools: [
            'HTML',
            'Slim',
            'CSS',
            'Less',
            'JavaScript',
            'TypeScript',
            'TailwindCSS',
            'AJAX',
            'Angular',
            'NodeJs',
            'MongoDB',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 5,
          url: 'single-portfolio.html?id=5',
          imgUrl: portfolio5,
          title: { en: 'Lorem Ipsum Dolor 5', ar: 'هنا عنوان المشروع 5' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Angular',
          tools: [
            'HTML',
            'PugJS',
            'CSS',
            'SCSS',
            'JavaScript',
            'Gulp',
            'Bootstrap',
            'AJAX',
            'Vue',
            'Firebase',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 6,
          url: 'single-portfolio.html?id=6',
          imgUrl: portfolio6,
          title: { en: 'Lorem Ipsum Dolor 6', ar: 'هنا عنوان المشروع 6' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Vue',
          tools: [
            'HTML',
            'Slim',
            'CSS',
            'Less',
            'JavaScript',
            'TypeScript',
            'Materialize',
            'AJAX',
            'Angular',
            'NodeJs',
            'MongoDB',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 7,
          url: 'single-portfolio.html?id=7',
          imgUrl: portfolio7,
          title: { en: 'Lorem Ipsum Dolor 7', ar: 'هنا عنوان المشروع 7' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'HTML',
          tools: [
            'HTML',
            'PugJS',
            'CSS',
            'SCSS',
            'JavaScript',
            'Gulp',
            'Bootstrap',
            'AJAX',
            'Vue',
            'Firebase',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 8,
          url: 'single-portfolio.html?id=8',
          imgUrl: portfolio8,
          title: { en: 'Lorem Ipsum Dolor 8', ar: 'هنا عنوان المشروع 8' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Vue',
          tools: [
            'HTML',
            'Slim',
            'CSS',
            'Less',
            'JavaScript',
            'TypeScript',
            'TailwindCSS',
            'AJAX',
            'Angular',
            'NodeJs',
            'MongoDB',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 9,
          url: 'single-portfolio.html?id=9',
          imgUrl: portfolio9,
          title: { en: 'Lorem Ipsum Dolor 9', ar: 'هنا عنوان المشروع 9' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Angular',
          tools: [
            'HTML',
            'PugJS',
            'CSS',
            'SCSS',
            'JavaScript',
            'Gulp',
            'Materialize',
            'AJAX',
            'Vue',
            'Firebase',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 10,
          url: 'single-portfolio.html?id=10',
          imgUrl: portfolio10,
          title: { en: 'Lorem Ipsum Dolor 10', ar: 'هنا عنوان المشروع 10' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'HTML',
          tools: [
            'HTML',
            'Slim',
            'CSS',
            'Less',
            'JavaScript',
            'TypeScript',
            'Bootstrap',
            'AJAX',
            'Angular',
            'NodeJs',
            'MongoDB',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 11,
          url: 'single-portfolio.html?id=11',
          imgUrl: portfolio11,
          title: { en: 'Lorem Ipsum Dolor 11', ar: 'هنا عنوان المشروع 11' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Vue',
          tools: [
            'HTML',
            'PugJS',
            'CSS',
            'SCSS',
            'JavaScript',
            'Gulp',
            'TailwindCSS',
            'AJAX',
            'Angular',
            'Firebase',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 12,
          url: 'single-portfolio.html?id=12',
          imgUrl: portfolio12,
          title: { en: 'Lorem Ipsum Dolor 12', ar: 'هنا عنوان المشروع 12' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Angular',
          tools: [
            'HTML',
            'Slim',
            'CSS',
            'Less',
            'JavaScript',
            'TypeScript',
            'Materialize',
            'AJAX',
            'Vue',
            'NodeJs',
            'MongoDB',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 13,
          url: 'single-portfolio.html?id=13',
          imgUrl: portfolio13,
          title: { en: 'Lorem Ipsum Dolor 13', ar: 'هنا عنوان المشروع 13' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'HTML',
          tools: [
            'HTML',
            'PugJS',
            'CSS',
            'SCSS',
            'JavaScript',
            'Gulp',
            'TailwindCSS',
            'AJAX',
            'Angular',
            'Firebase',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 14,
          url: 'single-portfolio.html?id=14',
          imgUrl: portfolio14,
          title: { en: 'Lorem Ipsum Dolor 14', ar: 'هنا عنوان المشروع 14' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Angular',
          tools: [
            'HTML',
            'Slim',
            'CSS',
            'Less',
            'JavaScript',
            'TypeScript',
            'Bootstrap',
            'AJAX',
            'Vue',
            'NodeJs',
            'MongoDB',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 15,
          url: 'single-portfolio.html?id=15',
          imgUrl: portfolio15,
          title: { en: 'Lorem Ipsum Dolor 15', ar: 'هنا عنوان المشروع 15' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Vue',
          tools: [
            'HTML',
            'PugJS',
            'CSS',
            'SCSS',
            'JavaScript',
            'Gulp',
            'Materialize',
            'AJAX',
            'Angular',
            'Firebase',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 16,
          url: 'single-portfolio.html?id=16',
          imgUrl: portfolio16,
          title: { en: 'Lorem Ipsum Dolor 16', ar: 'هنا عنوان المشروع 16' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'HTML',
          tools: [
            'HTML',
            'Slim',
            'CSS',
            'Less',
            'JavaScript',
            'TypeScript',
            'Bootstrap',
            'AJAX',
            'Vue',
            'NodeJs',
            'MongoDB',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 17,
          url: 'single-portfolio.html?id=17',
          imgUrl: portfolio17,
          title: { en: 'Lorem Ipsum Dolor 17', ar: 'هنا عنوان المشروع 17' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Angular',
          tools: [
            'HTML',
            'PugJS',
            'CSS',
            'SCSS',
            'JavaScript',
            'Gulp',
            'TailwindCSS',
            'AJAX',
            'Angular',
            'Firebase',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
        {
          id: 18,
          url: 'single-portfolio.html?id=18',
          imgUrl: portfolio18,
          title: { en: 'Lorem Ipsum Dolor 18', ar: 'هنا عنوان المشروع 18' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.',
          },
          category: 'Vue',
          tools: [
            'HTML',
            'Slim',
            'CSS',
            'Less',
            'JavaScript',
            'TypeScript',
            'Materialize',
            'AJAX',
            'Vue',
            'NodeJs',
            'MongoDB',
          ],
          screenshots: {
            img1: {
              url: singlePortfolio5,
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' },
            },
            img2: {
              url: singlePortfolio4,
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' },
            },
            img3: {
              url: singlePortfolio3,
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' },
            },
            img4: {
              url: singlePortfolio2,
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' },
            },
            img5: {
              url: singlePortfolio1,
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' },
            },
          },
        },
      ].reverse(),

      // viewed portfolio items
      portfolioItems: [],

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

  computed: {
    // flag to toggle ajax loading spinner
    isAjaxLoading() {
      return this.ajaxLoading.some((state) => state === true)
    },

    // get the total years of experience
    experienceYears() {
      return (
        new Date(
          new Date() - new Date(String(this.careerStartDate))
        ).getFullYear() - 1970
      )
    },

    // split experience items into chunks of 3 items
    experienceChunks() {
      return [...Array(Math.ceil(this.experienceItems.length / 3))].map(() =>
        this.experienceItems.splice(0, 3)
      )
    },

    // filtered portfolio items
    filteredPortfolioItems() {
      const urlParams = new URLSearchParams(window.location.search)
      const tax = urlParams.get('tax')

      if (tax) {
        return this.portfolioItems
      } else {
        return this.portfolioItems.filter(
          (item) =>
            this.currentFilter === 'All' || item.category === this.currentFilter
        )
      }
    },

    // get single portfolio item
    getSinglePortfolioItem() {
      const urlParams = new URLSearchParams(window.location.search)
      const id = urlParams.get('id')

      return this.allPortfolioItems.find((item) => item.id == id)
    },

    // get the total years of copyright
    copyrightDate() {
      const yearsDuration =
        new Date(
          new Date() - new Date(String(this.copyrightStartDate))
        ).getFullYear() - 1970
      return yearsDuration === 0
        ? this.copyrightStartDate
        : `${this.copyrightStartDate} - ${
            this.copyrightStartDate + yearsDuration
          }`
    },
  },

  created() {
    // get a theme to use
    this.getAppTheme()
  },

  mounted() {
    if (window.innerWidth >= 992) {
      // apply pan effect hero image
      this.heroImgPanEffect()

      // initialize VanillaTilt library in portfolio section
      this.initializeTilt()
    }

    // nav menu tab trap
    this.navMenuTabTrap()

    // hide the preloader screen after loading
    window.addEventListener('load', () => (this.isPreloading = false))

    // scrolling options
    this.scrollingOptions()
    document.addEventListener('scroll', () => this.scrollingOptions())

    // initialize popper.js plugin
    document.querySelectorAll('.has-ultimate-tooltip').forEach((el) => {
      createPopper(el, el.querySelector('.ultimate-tooltip'), {
        placement: 'top',
        modifiers: [{ name: 'offset', options: { offset: [0, 30] } }],
      })
    })

    // get portfolio items
    this.getPortfolioItems()

    // init glightbox plugin
    const lightbox = new GLightbox({
      autoplayVideos: false,
    })

    // initialize the first displayed type of skills
    this.initSkillsFirstType()
  },

  methods: {
    // get a theme to use
    getAppTheme() {
      // get the saved theme from the localStorage
      const storageSavedTheme = localStorage.getItem('nafieSavedTheme')

      // Check to see if there a saved theme
      if (storageSavedTheme) {
        this.savedTheme = storageSavedTheme
      } else {
        // So, try to get the browser default theme or make your own default

        // Check to see if Media-Queries are supported
        if (window.matchMedia) {
          // Check if the dark-mode Media-Query matches
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.savedTheme = 'dark_theme'
          } else {
            this.savedTheme = 'light_theme'
          }
        } else {
          // Default (when Media-Queries are not supported)
          this.savedTheme = this.appTheme
        }
      }

      // save the new theme in the localStorage
      localStorage.setItem('nafieSavedTheme', this.savedTheme)
    },

    // detect the theme changes
    changeAppTheme() {
      this.savedTheme === 'light_theme'
        ? (this.savedTheme = 'dark_theme')
        : (this.savedTheme = 'light_theme')

      // save the new theme in the localStorage
      localStorage.setItem('nafieSavedTheme', this.savedTheme)
    },

    // toggle nav menu
    toggleNavMenu() {
      this.isNavMenuOpen = !this.isNavMenuOpen
      this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu()
    },

    // open nav menu
    openNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0]

      this.isNavMenuOpen = true

      bodyEl.setAttribute('style', 'overflow-y: hidden;')

      // set focus on nav menu
      this.$refs.headerNav.querySelector('.desktop-menu-content').focus()
    },

    // close nav menu
    closeNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0]

      this.isNavMenuOpen = false

      bodyEl.removeAttribute('style')

      // set focus on nav menu toggle button
      this.$refs.navMenuToggleBtn.focus()
    },

    // nav menu tab trap
    navMenuTabTrap() {
      const nav = this.$refs.headerNav
      const focusableElementsString =
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
      let firstTabStop
      let lastTabStop
      let isFirstTabStop
      let isLastTabStop

      document.addEventListener('keyup', (e) => {
        if (nav.classList.contains('menu-open')) {
          // get first & last focusable elements in the side menu for the tab trap
          const visibleFocusableEls = [
            ...nav.querySelectorAll(focusableElementsString),
          ].filter(
            (el) =>
              window.getComputedStyle(el).getPropertyValue('visibility') !==
              'hidden'
          )
          firstTabStop = visibleFocusableEls[0]
          lastTabStop = visibleFocusableEls[visibleFocusableEls.length - 1]

          if (e.code === 'Tab') {
            if (e.shiftKey) {
              /* shift + tab */ // if this is the first item, move to the last item
              isFirstTabStop && lastTabStop.focus()
            } /* tab */ else {
              // if this is the last item, go back to the first item
              isLastTabStop && firstTabStop.focus()
            }

            // close nav menu on Escape button press
          } else if (e.code === 'Escape') {
            this.toggleNavMenu()
          }

          // get current active element
          const activeEl = document.activeElement

          // check if last item or not
          isLastTabStop = activeEl === lastTabStop ? true : false

          // check if first item or not
          isFirstTabStop = activeEl === firstTabStop ? true : false
        }
      })
    },

    // apply pan effect hero image
    heroImgPanEffect() {
      const parent = this.$refs.heroSection

      // return if disabled
      if (!parent || !parent.getAttribute('data-paneffect')) {
        return
      }

      const layer1 = parent.querySelectorAll('.layer')[0]
      const layer2 = parent.querySelectorAll('.layer')[1]

      parent.addEventListener('mousemove', (e) => {
        const x =
          ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100
        const y =
          ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) * 100

        parent.classList.add('parallax-animation')

        layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`)
        layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`)
      })
    },

    // scrolling options
    scrollingOptions() {
      const scrollPosition = window.pageYOffset

      // check for current scroll position to minimize the header
      this.isHeaderBig =
        scrollPosition >= this.startMinimizingHeaderAt ? false : true

      // check for current scroll position to toggle the header
      this.isHeaderHidden =
        scrollPosition > 100 && scrollPosition > this.lastScrollPosition
          ? true
          : false
      this.lastScrollPosition = scrollPosition

      // check for current scroll position to show the scrollTop button
      this.isScrollTopBtnDisplayed =
        scrollPosition >= this.startShowingScrollTopBtnAt ? true : false
    },

    // scroll to top
    scrollToTop() {
      window.scroll({ top: 0, behavior: 'smooth' })
    },

    // initialize the first displayed type of skills
    initSkillsFirstType() {
      const skillsSwitchBtn = this.$refs.skillsSwitchBtn

      // return if disabled
      if (!skillsSwitchBtn) {
        return
      }

      this.skillsType = skillsSwitchBtn.querySelector('input').value
    },

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
          const tax = urlParams.get('tax')

          if (tax) {
            if (tax === 'cat') {
              const cat = urlParams.get('cat')

              this.portfolioArchiveName = cat
              return item.category === cat
            } else if (tax === 'tools') {
              const tool = urlParams.get('tools')

              this.portfolioArchiveName = tool
              return item.tools.includes(tool)
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
          msg: this.$refs.portfolioItems.getAttribute('data-no-works-msg'),
          time: 3000,
        })
      }
    },

    // filter portfolio items
    filterPortfolioItems(filter) {
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

    // contact form validation
    contactFormValidation() {
      // contact form
      const contactForm = this.$refs.contactForm

      // form controls
      const name = contactForm.querySelector('input[name="name"]')
      const email = contactForm.querySelector('input[name="email"]')
      const phone = contactForm.querySelector('input[name="phone"]')
      const message = contactForm.querySelector('textarea')

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
          msg: name.closest('.control').querySelector('.errors-msgs .required')
            .value,
        })
      } else {
        errors.name.required = false
        this.dismissNotify('nameRequired')
      }

      // minlength validation
      if (
        name.value.length > 0 &&
        name.value.length < name.getAttribute('minlength')
      ) {
        errors.name.minLength = true
        this.setNotify({
          id: 'nameMinLength',
          className: 'danger',
          msg: name.closest('.control').querySelector('.errors-msgs .minLength')
            .value,
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
          msg: email.closest('.control').querySelector('.errors-msgs .required')
            .value,
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
          msg: email.closest('.control').querySelector('.errors-msgs .invalid')
            .value,
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
        !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
          phone.value
        )
      ) {
        errors.phone.invalid = true
        this.setNotify({
          id: 'phoneInvalid',
          className: 'danger',
          msg: phone.closest('.control').querySelector('.errors-msgs .invalid')
            .value,
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
            .closest('.control')
            .querySelector('.errors-msgs .required').value,
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

    // show messages by toast notifications
    setNotify({ id, className, msg, time }) {
      const notify = {
        id: id || `${Date.now()}${this.notifications.length}`,
        className,
        msg,
        time,
      }

      if (id) {
        !this.notifications.some((e) => e.id === id) &&
          this.notifications.push(notify)
      } else {
        this.notifications.push(notify)
      }

      // remove this notification from the array after (n) seconds
      time && setTimeout(() => this.dismissNotify(notify.id), time)
    },

    // dismiss the notifications
    dismissNotify(id) {
      const index = this.notifications.findIndex((notify) => notify.id === id)
      index > -1 && this.notifications.splice(index, 1)
    },

    // add ajax loading spinner
    startLoading() {
      this.ajaxLoading.push(true)
    },

    // remove ajax loading spinner
    endLoading() {
      this.ajaxLoading.pop()
    },
  },
})
</script>

<template>
  <div id="home-page">
    <!-- start of hero section -->
    <div id="hero" ref="heroSection" class="hero-section" data-paneffect="true">
      <div class="hero-img">
        <div v-clone class="layer">
          <img src="@/assets/hero-img.png" alt="User Name" />
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
                    src="@/assets/icons/emblem.png"
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
                    src="@/assets/icons/check-mark.png"
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
                  <img src="@/assets/icons/happy.png" alt="Happy Clients" />
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
                    v-for="(item, itemIndex) in group"
                    :key="itemIndex"
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
                <img src="@/assets/icons/email.png" alt="Email" />
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
