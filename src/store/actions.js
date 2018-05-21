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

export const getEnvironmentThingsList = (context, envId) => {
  // mapped to /environments/{{envId}}/things
  // commit setEnvironmentThingsList mutation
  console.log('Executing getEnvironmentThingsList')
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

export const startPlugin = (context, pluginId) => {
  // mapped to  API
  console.log('Executing startPlugin ' + pluginId)
}

export const stopPlugin = (context, pluginId) => {
  // mapped to  API
  console.log('Executing stopPlugin ' + pluginId)
}

export const getResource = (context, resourceId) => {
  // mapped to  API /resource/{resourceId}
  console.log('Executing getResource ' + resourceId)
}

export const cloneThing = (context, thingId) => {
  // mapped to  API /things/{thingId}/copy - POST
  console.log('Executing cloneThing ' + thingId)
}

export const deleteThing = (context, thingId) => {
  // mapped to  API /things/{thingId} - DELETE
  console.log('Executing deleteThing ' + thingId)
}

export const updateThing = (context, thingId, thing) => {
  // mapped to  API /things/{thingId}/copy - PUT
  console.log('Executing updateThing ' + thingId)
}

export const moveThing = (context, thingId, x, y) => {
  // mapped to  API /things/{thingId}/move/{x}/{y} - POST
  console.log('Executing moveThing ' + thingId)
}

export const changeBehavior = (context, thingId, behaviorId, newBehaviorValue) => {
  // mapped to  API /things/{thingId}/behaviorchange/{behaviorId}/{newBehaviorValue} - POST
  console.log('Executing moveThing ' + thingId)
}

export const addAutomation = (context, automation) => {
  // mapped to  API /reactions - POST
  console.log('Executing addAutomation ' + JSON.stringify(automation))
}

export const deleteAutomation = (context, automationId) => {
  // mapped to  API /reactions/automationId - DELETE
  console.log('Executing deleteAutomation ' + automationId)
}

// actions for authentication
export const login = (context, payload) => {
  return new Promise((resolve, reject) => {
    // mapped to  API
    if (payload.username === 'admin' && payload.password === 'admin') {
      // create token
      var token = btoa(payload.username + ':' + payload.password)
      localStorage.setItem('user-token', token)
      context.commit('authSuccess', token)
      resolve()
    } else {
      context.commit('authError')
      localStorage.removeItem('user-token')
      reject()
    }
  })
}

export const logout = (context) => {
  // mapped to  API
  console.log('Executing logout ')
  context.commit('authLogout')
  localStorage.removeItem('user-token')
}

