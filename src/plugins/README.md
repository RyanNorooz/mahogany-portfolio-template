## Plugins

**A custom made Plugin system.**

for plugins which need integration with the vue app or need to change the behavior of the `vue-router`.

Place a `.ts` file with the following template, it will be installed automatically.

```ts
import type { UserModule } from '@/types'

export const install: UserModule = ({ app, router, isClient }) => {
  // app.use(...)
  // router.beforeEach(...)
}
```
