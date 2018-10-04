// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAxios from 'vue-axios'
import axios from './utils/fd-axios'

// This already imports 'onsenui'
import VueOnsen from 'vue-onsenui'

import Snotify from 'vue-snotify'

// Manage modal components
import VModal from 'vue-js-modal'

// Manage tabs
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

// Load vuex i18n module
import vuexI18n from 'vuex-i18n'

// Import translation files
import en from './i18n/en.json'
import de from './i18n/de_DE.json'
import it from './i18n/it_IT.json'
import nl from './i18n/nl_NL.json'
import ro from './i18n/ro_RO.json'
import ru from './i18n/ru_RU.json'
import sk from './i18n/sk_SK.json'
import es from './i18n/es_ES.json'
import fr from './i18n/fr_FR.json'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'
import 'vue-snotify/styles/material.css'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import store from './store'

import MobileCustomToolbar from './components/mobile/MobileCustomToolbar.vue'
import MobilePlugin from './components/mobile/mobile-pages/Plugin.vue'
import MobileThing from './components/mobile/mobile-pages/Thing.vue'
import MobileAutomation from './components/mobile/mobile-pages/Automation.vue'
import MobileCommand from './components/mobile/mobile-pages/Command.vue'

Vue.use(VueAxios, axios)
Vue.use(VueMaterial)
Vue.use(Snotify)
Vue.use(VModal, { dialog: true, dynamic: true })
Vue.use(VueTabs)

// VueOnsen components
Vue.use(VueOnsen)
Vue.component('custom-toolbar', MobileCustomToolbar) // Common toolbar
Vue.component('mobile-plugin', MobilePlugin) // Mobile Plugin component
Vue.component('mobile-thing', MobileThing) // Mobile Thing component
Vue.component('mobile-automation', MobileAutomation) // Mobile Automation component
Vue.component('mobile-command', MobileCommand) // Mobile Command component

// Initialize the internationalization plugin on the Vue instance.
// Note that the store must be passed to the plugin. the plugin will then generate some
// helper functions for components (i.e. this.$i18n.set, this.$t) and on the Vue
// instance (i.e. Vue.i18n.set).
Vue.use(vuexI18n.plugin, store)

// Add translations directly to the application
Vue.i18n.add('en', en)
Vue.i18n.add('de', de)
Vue.i18n.add('es', es)
Vue.i18n.add('fr', fr)
Vue.i18n.add('it', it)
Vue.i18n.add('nl', nl)
Vue.i18n.add('ro', ro)
Vue.i18n.add('ru', ru)
Vue.i18n.add('sk', sk)

// Set the start locale to use
Vue.i18n.set('en')

// Set English also as fallback locale
Vue.i18n.fallback('en')

Vue.use(VueAxios, axios)

// Set authentication token
const token = store.state.token
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Basic ' + token
} else {
  console.log('No authentication token found')
}

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
