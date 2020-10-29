export const authRequest = (state) => {
  state.status = 'loading'
}

export const authError = (state) => {
  state.status = 'error'
}

export const authSuccess = (state, token) => {
  state.status = 'success'
  state.token = token
}

export const authLogout = (state) => {
  state.token = ''
}
