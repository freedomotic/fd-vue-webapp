export const hideAll = state => {
  hideAllDashboardDisplays(state)
}

export const showSetup = state => {
  hideAllDashboardDisplays(state)
  state.displaySettings = true
  state.blur = !state.blur
}

export const showLogout = state => {
  hideAllDashboardDisplays(state)
  state.displayLogout = true
  state.blur = !state.blur
}

export const showInfo = state => {
  hideAllDashboardDisplays(state)
  state.displayInfo = true
  state.blur = !state.blur
}

export const showAlerts = state => {
  hideAllDashboardDisplays(state)
  state.displayAlerts = true
  state.blur = !state.blur
}

export const closeSection = state => {
  hideAllDashboardDisplays(state)
  state.blur = false
}

function hideAllDashboardDisplays (state) {
  state.displaySettings = false
  state.displayAlerts = false
  state.displayInfo = false
  state.displayLogout = false
}
