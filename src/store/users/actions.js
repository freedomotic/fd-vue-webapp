import axios from '@/utils/fd-axios'

export const getUsersList = (context) => {
  axios.get('/users').then((response) => {
    console.log('Retrieving Users list')
    // commit setUsersList mutation
    context.commit('setUsersList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}
