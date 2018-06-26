/* global localStorage */

import axios from 'axios'

var FD_API_URL = process.env.FD_API_URL || 'http://localhost:9111/v3'

// used for online demo
if (window.location.href.includes('fd-vue-webapp.herokuapp.com')) {
  FD_API_URL = process.env.FD_API_URL
}

export default axios.create({
  baseURL: FD_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

