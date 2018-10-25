export const authStatus = state => {
  state.status
}

export const availableProtocols = state => {
  console.log('availableProtocols getter')
}

export const getHardwareTriggers = state => {
  return state.triggersList.filter(trigger => {
    if (trigger.hardwareLevel === true) {
      return trigger
    }
  })
}
