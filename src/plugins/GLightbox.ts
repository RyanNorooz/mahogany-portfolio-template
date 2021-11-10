import type { UserModule } from '@/types'

export const install: UserModule = async () => {
  // skip if ssr
  if (import.meta.env.SSR) return

  import('glightbox').then((GLightbox) => {
    // init glightbox plugin
    const lightbox = new GLightbox.default({
      autoplayVideos: false,
    })
  })
}
