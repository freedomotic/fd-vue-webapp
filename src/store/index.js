import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

// Temporarly populated from static json
import marketplaceCategoriesList from '../assets/json/marketplace_categories.json'
import marketplaceCategoriesPluginsList from '../assets/json/automation_protocols_plugins.json'
import environmentsList from '../assets/json/environments.json'
import environmentThingsList from '../assets/json/environment_things.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Authentication state
    token: localStorage.getItem('token') || '',
    status: '',
    // end of Authentication state
    // Dashboard state
    displaySettings: false,
    displayInfo: false,
    displayAlerts: false,
    displayLogout: false,
    displayThings: false,
    blur: false,
    // end of Dashboard state
    language: 'en',
    // Settings state
    systemOpen: false,
    automationsOpen: false,
    languagesOpen: false,
    pluginsOpen: false,
    rolesOpen: false,
    usersOpen: false,
    // end of Settings state
    advancedMode: false,
    // API state
    automationsList: '',
    commandsList: '',
    environmentsList,
    environmentThingsList,
    marketplaceCategoriesList,
    marketplaceCategoriesPluginsList,
    pluginsList: '',
    rolesList: '',
    thingsList: '',
    triggersList: '',
    usersList: ''
  },
  actions,
  mutations,
  getters
})
