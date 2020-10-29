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
