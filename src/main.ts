/* eslint-disable import/no-unresolved */

import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

if (!import.meta.env.SSR) {
  import('bootstrap')
}
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/bootstrap-override.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.scss'
import 'virtual:windi-utilities.css' // windicss utilities should be the last style import

import 'virtual:windi-devtools' // windicss devtools support (dev only)

const routes = setupLayouts(generatedRoutes)

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
