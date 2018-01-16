import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Dashboard state
    displaySettings: false,
    displayInfo: false,
    displayAlerts: false,
    displayLogout: false,
    blur: false,
    // end of Dashboard state
    language: 'en',
    // Settings state
    systemOpen: false,
    automationsOpen: false,
    languagesOpen: false,
    pluginsOpen: false,
    rolesOpen: false,
    usersOpen: false
    // end of Settings state
  },
  actions,
  mutations
})
