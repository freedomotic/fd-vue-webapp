import axios from '@/utils/fd-axios'

export const login = (context, payload) => {
  return new Promise((resolve, reject) => {
    var body = new URLSearchParams()
    body.append('name', payload.password)
    body.append('password', payload.password)
    body.append('rememberMe', payload.remember)
    axios.post('/users/_/login', body,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
    .then(response => {
      // create token
      var token = btoa(payload.username + ':' + payload.password)
      // add axios default header
      axios.defaults.headers.common['Authorization'] = 'Basic ' + token
      sessionStorage.setItem('token', token)
      context.commit('authSuccess', token)
      resolve()
    })
    .catch(e => {
      console.log(e)
      context.commit('authError')
      sessionStorage.removeItem('token')
      reject()
    })
  })
}

export const logout = (context) => {
// axios.post('/users/_/logout')
//  .then(response => {
  context.commit('authLogout')
  localStorage.removeItem('token')
    // remove axios default header
  delete axios.defaults.headers.common['Authorization']
//  })
//  .catch(e => {
//    console.log(e)
//  })
}
