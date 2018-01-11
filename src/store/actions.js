export const openPlugins = (context) => {
  context.commit('closeSection')
}

export const openSettings = (context) => {
  context.commit('closeSection')
}

export const openSystem = (context) => {
  context.commit('closeSection')
  context.commit('showSystemPanel')
}

export const openUsers = (context) => {
  context.commit('closeSection')
}

export const openRoles = (context) => {
  context.commit('closeSection')
}

export const shutdownFD = (context) => {
  console.log('Implement this')
}
