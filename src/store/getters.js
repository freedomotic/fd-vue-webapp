export const authStatus = state => {
  state.status
}

export const availableProtocols = state => {
  const protocols = []
  state.thingsList.filter(trigger => {
    if (protocols.indexOf(trigger.protocol) === -1) {
      protocols.push(trigger.protocol)
    }
  })
  return protocols
}

export const getHardwareTriggers = state => {
  return state.triggersList.filter(trigger => {
    if (trigger.hardwareLevel === true) {
      return trigger
    }
  })
}
