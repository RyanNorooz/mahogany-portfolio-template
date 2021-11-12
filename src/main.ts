/* eslint-disable import/no-unresolved */

import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'
import App from './App.vue'

if (!import.meta.env.SSR) {
  import('bootstrap')
}
import '@/styles/libraries.min.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import './styles/main.scss'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  // ? vite-ssg takes care of mounting the app for us
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./plugins/*.ts')).map((i) =>
      i.install?.(ctx)
    )
  }
)
