import axios from '@/utils/fd-axios'

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

// Actions for API

// ENVIRONMENTS
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
// END ENVIRONMENTS

export const getCommandsList = (context) => {
  axios.get('/commands/user').then((response) => {
    console.log('Retrieving Commands list')
    // commit setCommandsList mutation
    context.commit('setCommandsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}

// AUTOMATIONS
export const getAutomationsList = (context) => {
  axios.get('/reactions').then((response) => {
    console.log('Retrieving Automations list')
    // commit setAutomationsList mutation
    context.commit('setAutomationsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}

export const addAutomation = (context, automation) => {
  // mapped to  API /reactions - POST
  console.log('Executing addAutomation ' + JSON.stringify(automation))
}

export const deleteAutomation = (context, automationId) => {
  // mapped to  API /reactions/automationId - DELETE
  console.log('Executing deleteAutomation ' + automationId)
}
// END AUTOMATIONS

// TRIGGERS
export const getTriggersList = (context) => {
  axios.get('/triggers').then((response) => {
    console.log('Retrieving Triggers list')
    // commit setTriggersList mutation
    context.commit('setTriggersList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}
// END TRIGGERS

// USERS
export const getUsersList = (context) => {
  axios.get('/users').then((response) => {
    console.log('Retrieving Users list')
    // commit setUsersList mutation
    context.commit('setUsersList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}
// END USERS

// ROLES
export const getRolesList = (context) => {
  axios.get('/system/roles').then((response) => {
    console.log('Retrieving Roles list')
    // commit setRolesList mutation
    context.commit('setRolesList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}
// END ROLES

// PLUGINS
export const getPluginsList = (context) => {
  axios.get('/plugins').then((response) => {
    console.log('Retrieving Plugins list')
    // commit setPluginsList mutation
    context.commit('setPluginsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}

export const updatePlugin = (context, plugin) => {
  // commit updatePlugin mutation
  context.commit('updatePlugin', plugin)
}

export const startPlugin = (context, pluginId) => {
  axios.post('/plugins/' + pluginId + '/start').then((response) => {
    console.log('Starting plugin ' + pluginId)
  }, (err) => {
    console.log(err)
  })
}

export const stopPlugin = (context, pluginId) => {
  axios.post('/plugins/' + pluginId + '/stop').then((response) => {
    console.log('Stopping plugin ' + pluginId)
  }, (err) => {
    console.log(err)
  })
}

export const installPlugin = (context, pluginId) => {
  // mapped to  API
  console.log('Executing installPlugin ' + pluginId)
}

export const uninstallPlugin = (context, pluginId) => {
  // mapped to  API
  console.log('Executing uninstallPlugin ' + pluginId)
}

export const getMarketplaceCategoryPluginsList = (context, categoryId) => {
  axios.get('/marketplace/categories/' + categoryId + '/plugins').then((response) => {
    console.log('Retrieving Marketplace plugins list')
    // commit setMarketplaceCategoryPluginsList mutation
    context.commit('setMarketplaceCategoryPluginsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}

export const getMarketplaceCategoriesList = (context) => {
  axios.get('/marketplace/categories').then((response) => {
    console.log('Retrieving Marketplace categories list')
    // commit setMarketplaceCategoriesList mutation
    context.commit('setMarketplaceCategoriesList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}
// END PLUGINS

// RESOURCES
export const getResource = (context, resourceId) => {
  return new Promise((resolve, reject) => {
    axios.get('/resources/' + resourceId, {
      responseType: 'arraybuffer'
    }).then(response => {
      let image = btoa(
      new Uint8Array(response.data)
         .reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
      resolve(`data:${response.headers['content-type'].toLowerCase()};base64,${image}`)
    }, (err) => {
      console.log(err)
    })
  })
}
// END RESOURCES

// THINGS
export const getThingsList = (context) => {
  axios.get('/things').then((response) => {
    console.log('Retrieving Things list')
    // commit setThingsList mutation
    context.commit('setThingsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}

export const getThingTemplatesList = (context) => {
  axios.get('/things/templates').then((response) => {
    console.log('Retrieving Thing templates list')
    // commit setThingTemplatesList mutation
    context.commit('setThingTemplatesList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}

export const addNewThing = (context, template) => {
  axios.post('/things/templates/' + template + '/instantiate').then((response) => {
    console.log('Adding new Thing of type ' + template)
  }, (err) => {
    console.log(err)
  })
}

export const cloneThing = (context, thingId) => {
  axios.post('/things/' + thingId + '/copy').then((response) => {
    console.log('Cloning Thing ' + thingId)
  }, (err) => {
    console.log(err)
  })
}

export const deleteThing = (context, thingId) => {
  axios.delete('/things/' + thingId).then((response) => {
    console.log('Deleting Thing ' + thingId)
  }, (err) => {
    console.log(err)
  })
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
// END THINGS

// SYSTEM INFO
export const getSystemInfo = (context) => {
  axios.get('/system/info/framework').then((response) => {
    console.log('Retrieving System info')
    // commit setSystemInfo mutation
    context.commit('setSystemInfo', { data: response.data })
  }, (err) => {
    console.log(err)
  })
}
// END SYSTEM INFO

// AUTHENTICATION

// simulate login
export const pretendLogin = (context, payload) => {
  return new Promise((resolve, reject) => {
    // mapped to  API
    if (payload.username === 'admin' && payload.password === 'admin') {
      // create token
      var token = btoa(payload.username + ':' + payload.password)
      localStorage.setItem('token', token)
      context.commit('authSuccess', token)
      resolve()
    } else {
      context.commit('authError')
      localStorage.removeItem('token')
      reject()
    }
  })
}

export const login = (context, payload) => {
  return new Promise((resolve, reject) => {
    var body = new URLSearchParams()
    body.append('name', payload.password)
    body.append('password', payload.password)
    body.append('rememberMe', payload.remember)
    axios.post('/users/_/login', body,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
    .then(response => {
      // create token
      var token = btoa(payload.username + ':' + payload.password)
      // add axios default header
      axios.defaults.headers.common['Authorization'] = 'Basic ' + token
      localStorage.setItem('token', token)
      context.commit('authSuccess', token)
      resolve()
    })
    .catch(e => {
      console.log(e)
      context.commit('authError')
      localStorage.removeItem('token')
      reject()
    })
  })
}

// simulate logout
export const pretendLogout = (context) => {
  // mapped to  API
  console.log('Executing logout ')
  context.commit('authLogout')
  localStorage.removeItem('token')
}

export const logout = (context) => {
// axios.post('/users/_/logout')
//  .then(response => {
  context.commit('authLogout')
  localStorage.removeItem('token')
    // remove axios default header
  delete axios.defaults.headers.common['Authorization']
//  })
//  .catch(e => {
//    console.log(e)
//  })
}
// END AUTHENTICATION
