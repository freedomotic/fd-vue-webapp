import Vue from 'vue'

export const setThingsList = (state, {list}) => {
  state.thingsList = list
}

export const updateThingFromWS = (state, thing) => {
  var idx
  idx = state.thingList.findIndex(item => item.name === thing.name)
  // state.thingsList[idx] = thing
  Vue.set(state.thingsList, idx, thing)
}

export const setThingTemplatesList = (state, {list}) => {
  state.thingTemplatesList = list
}
