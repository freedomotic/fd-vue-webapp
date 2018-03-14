import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

// Temporarly populated from static json
import automationsList from '../assets/json/automations.json'
import triggersList from '../assets/json/triggers.json'
import commandsList from '../assets/json/commands.json'
import pluginsList from '../assets/json/plugins.json'
import rolesList from '../assets/json/roles.json'
import thingsList from '../assets/json/things.json'
import usersList from '../assets/json/users.json'
import marketplaceCategories from '../assets/json/marketplace_categories.json'
import marketplaceCategoriesPlugins from '../assets/json/automation_protocols_plugins.json'
import environmentsList from '../assets/json/environments.json'
import environmentThings from '../assets/json/environment_things.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    automationsList,
    commandsList,
    environmentsList,
    environmentThings,
    marketplaceCategories,
    marketplaceCategoriesPlugins,
    pluginsList,
    rolesList,
    thingsList,
    triggersList,
    usersList
  },
  actions,
  mutations
})
