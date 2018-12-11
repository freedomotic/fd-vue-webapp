import router from 'v-routes-builder'

router.path('/')
  .component(() => import('pages/Login.vue'))

router.path('/home')
  .component(() => import('layouts/Dashboard.vue'))
  .children(() => {
    router.path('')
      .name('home')
      .component(() => import('pages/Home.vue'))

    router.path('settings')
      .name('settings')
      .component(() => import('pages/Settings.vue'))
      .children(() => {
        router.path('language')
          .name('setting:language')
          .component(() => import('components/settings/Language.vue'))
      })
  })

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  router.path('*')
    .component(() => import('pages/Error404.vue'))
}

export default router.getRoutes()
