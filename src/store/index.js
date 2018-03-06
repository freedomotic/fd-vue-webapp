import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

// Temporarly populated from static json
import automationsList from '../assets/automations.json'
import triggersList from '../assets/triggers.json'
import commandsList from '../assets/commands.json'
import pluginsList from '../assets/plugins.json'
import rolesList from '../assets/roles.json'
import thingsList from '../assets/things.json'
import usersList from '../assets/users.json'

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
    usersOpen: false,
    // end of Settings state
    advancedMode: false,
    // API state
    automationsList,
    commandsList,
    pluginsList,
    rolesList,
    thingsList,
    triggersList,
    usersList
  },
  actions,
  mutations
})
