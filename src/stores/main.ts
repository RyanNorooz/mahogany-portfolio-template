import { acceptHMRUpdate, defineStore } from 'pinia'
import { isDark } from '@/logic'

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

export const useMainStore = defineStore({
  id: 'main',

  state: () => ({
    // for the template theme
    appTheme: isDark ? 'dark_theme' : 'light_theme',
    savedTheme: '',

    // flag to toggle the preloader
    isPreloading: true,

    // manage loading spinner status
    ajaxLoading: [] as boolean[],

    // toast notifications array
    notifications: [] as Array<{
      id?: string
      className: string
      msg: string
      time?: number
    }>,

    // for scroll to top button
    startShowingScrollTopBtnAt: 600,
    isScrollTopBtnDisplayed: false,

    // for minimizing the header on scrolling down
    startMinimizingHeaderAt: 100,
    isHeaderBig: true,

    // for toggling the header on scrolling down
    lastScrollPosition: 0,
    isHeaderHidden: false,

    // flag to toggle nav menu
    isNavMenuOpen: false,

    // the date my career started (change to yours)
    careerStartDate: 2009,

    // list of portfolio items to loop through it
    allPortfolioItems: [
      {
        id: 1,
        url: '/portfolio?id=1',
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
        url: '/portfolio?id=2',
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
        url: '/portfolio?id=3',
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
        url: '/portfolio?id=4',
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
        url: '/portfolio?id=5',
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
        url: '/portfolio?id=6',
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
        url: '/portfolio?id=7',
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
        url: '/portfolio?id=8',
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
        url: '/portfolio?id=9',
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
        url: '/portfolio?id=10',
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
        url: '/portfolio?id=11',
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
        url: '/portfolio?id=12',
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
        url: '/portfolio?id=13',
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
        url: '/portfolio?id=14',
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
        url: '/portfolio?id=15',
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
        url: '/portfolio?id=16',
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
        url: '/portfolio?id=17',
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
        url: '/portfolio?id=18',
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
  }),

  getters: {
    // flag to toggle ajax loading spinner
    isAjaxLoading(): boolean {
      return this.ajaxLoading.some((state) => state === true)
    },

    // get the total years of experience
    experienceYears(): number {
      return (
        new Date(
          new Date().getTime() -
            new Date(String(this.careerStartDate)).getTime()
        ).getFullYear() - 1970
      )
    },
  },

  actions: {
    // // get a theme to use
    // getAppTheme() {
    //   // get the saved theme from the localStorage

    //   const storageSavedTheme =
    //     !import.meta.env.SSR && localStorage.getItem('nafieSavedTheme')

    //   // Check to see if there a saved theme
    //   if (storageSavedTheme) {
    //     this.savedTheme = storageSavedTheme
    //   } else {
    //     // So, try to get the browser default theme or make your own default

    //     // Check to see if Media-Queries are supported
    //     if (window?.matchMedia) {
    //       // Check if the dark-mode Media-Query matches
    //       if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //         this.savedTheme = 'dark_theme'
    //       } else {
    //         this.savedTheme = 'light_theme'
    //       }
    //     } else {
    //       // Default (when Media-Queries are not supported)
    //       this.savedTheme = this.appTheme
    //     }
    //   }

    //   // save the new theme in the localStorage
    //   localStorage.setItem('nafieSavedTheme', this.savedTheme)
    // },

    // // detect the theme changes
    // changeAppTheme() {
    //   this.savedTheme === 'light_theme'
    //   ? (this.savedTheme = 'dark_theme')
    //   : (this.savedTheme = 'light_theme')

    //   // save the new theme in the localStorage
    //   localStorage.setItem('nafieSavedTheme', this.savedTheme)
    // },

    getAppTheme() {
      this.savedTheme = isDark ? 'dark_theme' : 'light_theme'
    },

    changeAppTheme() {
      this.savedTheme === 'light_theme'
        ? (this.savedTheme = 'dark_theme')
        : (this.savedTheme = 'light_theme')
    },

    // scrolling options
    scrollingOptions() {
      const scrollPosition = window?.pageYOffset

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

    // show messages by toast notifications
    setNotify({
      id,
      className,
      msg,
      time,
    }: {
      id?: string
      className: string
      msg: string
      time?: number
    }) {
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
    dismissNotify(id: string) {
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

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
