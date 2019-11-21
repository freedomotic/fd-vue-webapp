import router from 'v-routes-builder'

router.path('/')
  .component(() => import('pages/Login.vue'))

router.path('/home')
  .component(() => import('layouts/Dashboard.vue'))
  .children(() => {
    router.path('')
      .name('home')
      .component(() => import('pages/Home.vue'))

    //     router.path('settings')
    //       .name('settings')
    //       .component(() => import('pages/Settings.vue'))
    //       .children(() => {
    //         router.path('language')
    //           .name('setting:language')
    //           .component(() => import('components/settings/Language.vue'))
    //         router.path('plugins')
    //           .name('setting:plugins')
    //           .component(() => import('components/settings/Plugins.vue'))
    //         router.path('automations')
    //           .name('setting:automations')
    //           .component(() => import('components/settings/Automations.vue'))
    //         router.path('users')
    //           .name('setting:users')
    //           .component(() => import('components/settings/Users.vue'))
    //         router.path('roles')
    //           .name('setting:roles')
    //           .component(() => import('components/settings/Roles.vue'))
    //         router.path('system')
    //           .name('setting:system')
    //           .component(() => import('components/settings/System.vue'))
    //       })
  })

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  router.path('*')
    .component(() => import('pages/Error404.vue'))
}

export default router.getRoutes()
