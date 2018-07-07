export const hideAll = state => {
  hideAllDashboardDisplays(state)
}

export const showSetup = state => {
  hideAllDashboardDisplays(state)
  state.displaySettings = true
  state.blur = !state.blur
}

export const showLogout = state => {
  hideAllDashboardDisplays(state)
  state.displayLogout = true
  state.blur = !state.blur
}

export const showInfo = state => {
  hideAllDashboardDisplays(state)
  state.displayInfo = true
  state.blur = !state.blur
}

export const showThings = state => {
  hideAllDashboardDisplays(state)
  state.displayThings = true
  state.blur = !state.blur
}

export const showAlerts = state => {
  hideAllDashboardDisplays(state)
  state.displayAlerts = true
  state.blur = !state.blur
}

export const closeSection = state => {
  hideAllDashboardDisplays(state)
  state.blur = false
}

export const showSystemPanel = state => {
  hideAllDashboardDisplays(state)
  state.systemOpen = true
  console.log('Opening System panel')
}

export const showAutomationsPanel = state => {
  hideAllDashboardDisplays(state)
  state.automationsOpen = true
}

export const showLanguagesPanel = state => {
  hideAllDashboardDisplays(state)
  state.languagesOpen = true
  console.log('Opening Languages panel')
}

export const showPluginsPanel = state => {
  hideAllDashboardDisplays(state)
  state.pluginsOpen = true
  console.log('Opening Plugins panel')
}

export const showRolesPanel = state => {
  hideAllDashboardDisplays(state)
  state.rolesOpen = true
  console.log('Opening Roles panel')
}

export const showUsersPanel = state => {
  hideAllDashboardDisplays(state)
  state.usersOpen = true
  console.log('Opening Users panel')
}

export const setAdvancedMode = state => {
  state.advancedMode = !state.advancedMode
}

function hideAllDashboardDisplays (state) {
  state.displaySettings = false
  state.displayAlerts = false
  state.displayInfo = false
  state.displayLogout = false
  state.displayThings = false
  state.systemOpen = false
  state.automationsOpen = false
  state.languagesOpen = false
  state.pluginsOpen = false
  state.rolesOpen = false
  state.usersOpen = false
}

// Mutations for API

export const setEnvironmentsList = (state, {list}) => {
  state.environmentsList = list
}

export const setCommandsList = (state, {list}) => {
  state.commandsList = list
}

export const setTriggersList = (state, {list}) => {
  state.triggersList = list
}

export const setAutomationsList = (state, {list}) => {
  state.automationsList = list
}

// PLUGINS
export const setPluginsList = (state, {list}) => {
  state.pluginsList = list
}

export const updatePlugin = (state, plugin) => {
  var idx
  console.log(plugin.pluginName)
  idx = state.pluginsList.findIndex(item => item.pluginName === plugin.pluginName)
  state.pluginsList[idx] = plugin
}

export const setMarketplaceCategoriesList = (state, {list}) => {
  state.marketplaceCategoriesList = list
}

export const setMarketplaceCategoryPluginsList = (state, {list}) => {
  state.marketplaceCategoryPluginsList = list
}
// END PLUGINS

// THINGS
export const setThingsList = (state, {list}) => {
  state.thingsList = list
}

export const setThingTemplatesList = (state, {list}) => {
  state.thingTemplatesList = list
}
// END THINGS

export const setUsersList = (state, {list}) => {
  state.usersList = list
}

export const setRolesList = (state, {list}) => {
  state.rolesList = list
}

export const setSystemInfo = (state, data) => {
  state.systemInfo = data
}

export const setEnvironmentThingsList = (state, {list}) => {
  state.environmentThingsList = list
}
// end of mutations for API

// AUTHENTICATION
export const authRequest = (state) => {
  state.status = 'loading'
}

export const authError = (state) => {
  state.status = 'error'
}

export const authSuccess = (state, token) => {
  state.status = 'success'
  state.token = token
}

export const authLogout = (state) => {
  state.token = ''
}
// END AUTHENTICATION
