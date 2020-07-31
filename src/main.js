import Vue from 'vue'
import App from './App.vue'
import './quasar'
import VueAxios from 'vue-axios'
import axios from './utils/fd-axios'
import vuexI18n from 'vuex-i18n'
import store from './store'
import router from './router'

// Import translation files
import br from './i18n/pt_BR.json'
import en from './i18n/en.json'
import de from './i18n/de_DE.json'
import it from './i18n/it_IT.json'
import nl from './i18n/nl_NL.json'
import no from './i18n/nb_NO.json'
import ro from './i18n/ro_RO.json'
import ru from './i18n/ru_RU.json'
import sk from './i18n/sk_SK.json'
import es from './i18n/es_ES.json'
import fr from './i18n/fr_FR.json'
import tr from './i18n/tr_TR.json'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

// Initialize the internationalization plugin on the Vue instance.
// Note that the store must be passed to the plugin. the plugin will then generate some
// helper functions for components (i.e. this.$i18n.set, this.$t) and on the Vue
// instance (i.e. Vue.i18n.set).
Vue.use(vuexI18n.plugin, store)

// Add translations directly to the application
Vue.i18n.add('br', br)
Vue.i18n.add('en', en)
Vue.i18n.add('de', de)
Vue.i18n.add('es', es)
Vue.i18n.add('fr', fr)
Vue.i18n.add('it', it)
Vue.i18n.add('no', no)
Vue.i18n.add('nl', nl)
Vue.i18n.add('ro', ro)
Vue.i18n.add('ru', ru)
Vue.i18n.add('sk', sk)
Vue.i18n.add('tr', tr)

// Set the start locale to use
Vue.i18n.set('en')

// Set English also as fallback locale
Vue.i18n.fallback('en')

// Set authentication token
const token = store.state.token
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Basic ' + token
} else {
  console.log('No authentication token found')
}

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
