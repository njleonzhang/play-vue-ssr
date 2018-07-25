import { createApp } from './app'

export default context => {
  const { app, router } = createApp()
  router.push(context.url)
  return app
}
