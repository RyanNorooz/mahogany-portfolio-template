import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  // clone directive
  app.directive('clone', {
    mounted(el) {
      el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling)
    },
  })

  // add stagger delay to children elements
  app.directive('staggerdelay', {
    mounted(el, binding) {
      ;[...el.children].forEach((child, i) => {
        child.setAttribute(
          'style',
          `animation-delay: ${(i + 1) * (binding.value || 100)}ms`
        )
      })
    },
  })

  // tooltip directive
  app.directive('tooltip', {
    mounted(el, binding) {
      el.classList.add('has-tooltip')
      el.insertAdjacentHTML(
        'beforeend',
        `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`
      )
    },
  })
}
