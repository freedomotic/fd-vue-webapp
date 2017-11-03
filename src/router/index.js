import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth/auth'
import Plugin from '@/components/Plugin.vue'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/plugin', component: Plugin },
    { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
