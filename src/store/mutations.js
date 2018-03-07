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
  state.systemOpen = false
  state.automationsOpen = false
  state.languagesOpen = false
  state.pluginsOpen = false
  state.rolesOpen = false
  state.usersOpen = false
}

// mutations for API
export const setEnvironmentsList = (state, {list}) => {
  state.environments = list
}

export const setCommandsList = (state, {list}) => {
  state.commands = list
}

export const setTriggersList = (state, {list}) => {
  state.triggers = list
}

export const setAutomationsList = (state, {list}) => {
  state.automations = list
}

export const setUsersList = (state, {list}) => {
  state.users = list
}

export const setRolesList = (state, {list}) => {
  state.roles = list
}
