import axios from '@/utils/fd-axios'

export const getSystemInfo = (context) => {
  axios.get('/system/info/framework').then((response) => {
    console.log('Retrieving System info')
    // commit setSystemInfo mutation
    context.commit('setSystemInfo', { data: response.data })
  }, (err) => {
    console.log(err)
  })
}

export const systemShutdown = (context) => {
  axios.post('/system/exit').then((response) => {
    console.log('System shutdown')
  }, (err) => {
    console.log(err)
  })
}
