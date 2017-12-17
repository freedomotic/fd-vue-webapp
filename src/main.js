// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

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

Vue.use(VueAxios, axios)
Vue.use(VueMaterial)
Vue.use(Vuex)

// initialize the vuex store using the vuex module. note that you can change the
//  name of the module if you wish
const store = new Vuex.Store()

// initialize the internationalization plugin on the vue instance. note that
// the store must be passed to the plugin. the plugin will then generate some
// helper functions for components (i.e. this.$i18n.set, this.$t) and on the vue
// instance (i.e. Vue.i18n.set).
Vue.use(vuexI18n.plugin, store)

// Add translations directly to the application
Vue.i18n.add('en', en)
Vue.i18n.add('it', it)

// set the start locale to use
Vue.i18n.set('en')

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
