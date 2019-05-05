/* global sessionStorage */

import axios from 'axios'

let FD_API_URL

if (window.location.host === 'fd-vue-webapp.herokuapp.com') {
  FD_API_URL = 'http://51.77.212.115:9111/v3'
} else {
  FD_API_URL = 'http://' + window.location.hostname + ':9111/v3'
}

export default axios.create({
  baseURL: FD_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})
