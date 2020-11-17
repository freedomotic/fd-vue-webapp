import axios from 'axios'

export default axios.create({
  baseURL: process.env.VUE_APP_FD_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})
