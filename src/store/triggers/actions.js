import axios from '@/utils/fd-axios'

export const getTriggersList = (context) => {
  axios.get('/triggers').then((response) => {
    console.log('Retrieving Triggers list')
    // commit setTriggersList mutation
    context.commit('setTriggersList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}
