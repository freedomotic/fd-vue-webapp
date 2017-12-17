/* globals localStorage */

export default {
  login (username, password, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(username, password, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        localStorage.username = username
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken () {
    return localStorage.token
  },

  logout (cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn () {
    return !!localStorage.token
  },

  onChange () {}
}

function pretendRequest (username, password, cb) {
  setTimeout(() => {
    if (username === 'admin' && password === 'admin') {
      cb({
        authenticated: true,
        token: btoa(username + ':' + password)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}
