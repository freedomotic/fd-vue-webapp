/* global sessionStorage */

import axios from 'axios'

let FD_API_URL

if (window.location.host === 'fd-vue-webapp.herokuapp.com') {
  FD_API_URL = 'http://174.138.4.3:9111/v3'
} else {
  FD_API_URL = 'http://174.138.4.3:9111/v3'
}

export default axios.create({
  baseURL: FD_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})
