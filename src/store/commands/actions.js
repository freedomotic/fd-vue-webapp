import axios from '@/utils/fd-axios'

export const getCommandsList = (context) => {
  axios.get('/commands/user').then((response) => {
    console.log('Retrieving Commands list')
    // commit setCommandsList mutation
    context.commit('setCommandsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}
