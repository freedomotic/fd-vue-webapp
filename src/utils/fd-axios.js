/* global localStorage */

import axios from 'axios'

const FD_API_URL = process.env.FD_API_URL || 'http://localhost:9111/v3'

export default axios.create({
  baseURL: FD_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + localStorage.token
  }
})
