import Vue from 'vue'
import Vuex from 'vuex'

import authentication from './authentication'
import automations from './automations'
import commands from './commands'
import dashboard from './dashboard'
import environments from './environments'
import plugins from './plugins'
import resources from './resources'
import roles from './roles'
import system from './system'
import things from './things'
import triggers from './triggers'
import users from './users'

Vue.use(Vuex)

const state = {};
const actions = {};
const mutations = {};
const getters = {};

Object.assign(state,
  authentication.state,
  automations.state,
  commands.state,
  dashboard.state,
  environments.state,
  plugins.state,
  resources.state,
  roles.state,
  system.state,
  things.state,
  triggers.state,
  users.state
);

Object.assign(actions,
  authentication.actions,
  automations.actions,
  commands.actions,
  dashboard.actions,
  environments.actions,
  plugins.actions,
  resources.actions,
  roles.actions,
  system.actions,
  things.actions,
  triggers.actions,
  users.actions
);

Object.assign(mutations,
  authentication.mutations,
  automations.mutations,
  commands.mutations,
  dashboard.mutations,
  environments.mutations,
  plugins.mutations,
  resources.mutations,
  roles.mutations,
  system.mutations,
  things.mutations,
  triggers.mutations,
  users.mutations
);

Object.assign(getters,
  authentication.getters,
  automations.getters,
  commands.getters,
  dashboard.getters,
  environments.getters,
  plugins.getters,
  resources.getters,
  roles.getters,
  system.getters,
  things.getters,
  triggers.getters,
  users.getters
);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
