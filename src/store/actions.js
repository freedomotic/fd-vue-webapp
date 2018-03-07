export const openAutomations = (context) => {
  context.commit('closeSection')
  context.commit('showAutomationsPanel')
}

export const openLanguages = (context) => {
  context.commit('closeSection')
  context.commit('showLanguagesPanel')
}

export const openPlugins = (context) => {
  context.commit('closeSection')
  context.commit('showPluginsPanel')
}

export const openSettings = (context) => {
  context.commit('closeSection')
}

export const openSystem = (context) => {
  context.commit('closeSection')
  context.commit('showSystemPanel')
}

export const openRoles = (context) => {
  context.commit('closeSection')
  context.commit('showRolesPanel')
}

export const openUsers = (context) => {
  context.commit('closeSection')
  context.commit('showUsersPanel')
}

export const shutdownFD = (context) => {
  console.log('Implement this')
}

export const setAdvancedMode = (context) => {
  context.commit('setAdvancedMode')
}

// actions for API
export const getEnvironmentsList = (context) => {
  // mapped to /environments
  // commit setEnvironmentsList mutation
  console.log('Executing getEnvironmentsList')
}

export const getCommandsList = (context) => {
  // mapped to  /commands/user
  // commit setCommandsList mutation
  console.log('Executing getCommandsList')
}

export const getAutomationsList = (context) => {
  // mapped to  /reactions
  // commit setAutomationsList mutation
  console.log('Executing getAutomationsList')
}

export const getTriggersList = (context) => {
  // mapped to  /triggers
  // commit setTriggersList mutation
  console.log('Executing getTriggersList')
}

export const getUsersList = (context) => {
  // mapped to  /users
  // commit setUsersList mutation
  console.log('Executing getUsersList')
}

export const getRolesList = (context) => {
  // mapped to  /system/roles
  // commit setRolesList mutation
  console.log('Executing getRolesList')
}

export const getThingsList = (context) => {
  // mapped to  /things
  // commit setThingsList mutation
  console.log('Executing getThingsList')
}

export const getMarketplaceCategoriesList = (context) => {
  // mapped to /marketplace/categories
  // commit setMarketplaceCategoriesList mutation
  console.log('Executing getMarketplaceCategoriesList')
}

export const startPlugin = (context, {item}) => {
  // mapped to  API
  console.log('Executing startPlugin')
}
