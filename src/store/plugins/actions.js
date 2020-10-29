import axios from '@/utils/fd-axios'

export const getPluginsList = (context) => {
  axios.get('/plugins').then((response) => {
    console.log('Retrieving Plugins list')
    // commit setPluginsList mutation
    context.commit('setPluginsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}

export const updatePluginFromWS = (context, plugin) => {
  // commit updatePluginFromWS mutation
  context.commit('updatePluginFromWS', plugin)
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
