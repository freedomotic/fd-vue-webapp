import axios from '@/utils/fd-axios'

export const getRolesList = (context) => {
  axios.get('/system/roles').then((response) => {
    console.log('Retrieving Roles list')
    // commit setRolesList mutation
    context.commit('setRolesList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}
