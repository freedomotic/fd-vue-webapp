// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAxios from 'vue-axios'
import axios from './utils/fd-axios'

// load vuex i18n module
import vuexI18n from 'vuex-i18n'

// import translation files
import en from './i18n/en.json'
import it from './i18n/it_IT.json'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'

import store from './store'

Vue.use(VueAxios, axios)
Vue.use(VueMaterial)

// Initialize the internationalization plugin on the Vue instance.
// Note that the store must be passed to the plugin. the plugin will then generate some
// helper functions for components (i.e. this.$i18n.set, this.$t) and on the Vue
// instance (i.e. Vue.i18n.set).
Vue.use(vuexI18n.plugin, store)

// Add translations directly to the application
Vue.i18n.add('en', en)
Vue.i18n.add('it', it)

// Set the start locale to use
Vue.i18n.set('en')

// Set English also as fallback locale
Vue.i18n.fallback('en')

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
