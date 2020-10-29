import Vue from 'vue'

export const setPluginsList = (state, {list}) => {
  state.pluginsList = list
}

export const updatePluginFromWS = (state, plugin) => {
  var idx
  idx = state.pluginsList.findIndex(item => item.pluginName === plugin.pluginName)
  // state.pluginsList[idx] = plugin
  Vue.set(state.pluginsList, idx, plugin)
}

export const setMarketplaceCategoriesList = (state, {list}) => {
  state.marketplaceCategoriesList = list
}

export const setMarketplaceCategoryPluginsList = (state, {list}) => {
  state.marketplaceCategoryPluginsList = list
}
