export const authStatus = state => {
  state.status
}

export const getAvailableProtocols = state => {
  const protocols = []
  state.pluginsList.filter(plug => {
    if (plug.configuration.props['protocol.name'] !== undefined) {
      if (protocols.indexOf(plug.configuration.props['protocol.name']) === -1) {
        protocols.push(plug.configuration.props['protocol.name'])
      }
    }
  })
  protocols.push('unknown')
  return protocols
}

export const getHardwareTriggers = state => {
  return state.triggersList.filter(trigger => {
    if (trigger.hardwareLevel === true) {
      return trigger
    }
  })
}
