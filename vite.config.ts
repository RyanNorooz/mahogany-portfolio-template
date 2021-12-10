import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

/**
 * workaround for ssr (vite-ssg) issues with custom directives
 */
function ssrTransformCustomDirective() {
  return {
    props: [],
    needRuntime: true,
  }
}

export default defineConfig({
  base: process.env.BASE_URL ?? '/',

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import '@/styles/Variables.scss'; @import '@/styles/Mixins.scss';`,
      },
    },
  },

  resolve: {
    alias: [
      { find: /^@(?=\/)/, replacement: path.resolve(__dirname, './src') },
    ],
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],

      template: {
        ssr: true,
        compilerOptions: {
          directiveTransforms: {
            clone: ssrTransformCustomDirective,
            staggerdelay: ssrTransformCustomDirective,
            tooltip: ssrTransformCustomDirective,
          },
        },
      },
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      dts: 'src/components.d.ts',

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
      'gsap',
      'glightbox',
      '@popperjs/core',
      'vanilla-tilt',
    ],
    exclude: [],
  },
})
