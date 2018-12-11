import router from 'v-routes-builder'

router.path('/')
  .component(() => import('pages/Login.vue'))

router.path('/home')
  .name('home')
  .component(() => import('pages/Home.vue'))

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  router.path('*')
    .component(() => import('pages/Error404.vue'))
}

export default router.getRoutes()
