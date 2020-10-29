import axios from '@/utils/fd-axios'

export const getAutomationsList = (context) => {
  axios.get('/reactions').then((response) => {
    console.log('Retrieving Automations list')
    // commit setAutomationsList mutation
    context.commit('setAutomationsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}

export const addAutomation = (context, automation) => {
  // mapped to  API /reactions - POST
  console.log('Executing addAutomation ' + JSON.stringify(automation))
}

export const deleteAutomation = (context, automationId) => {
  // mapped to  API /reactions/automationId - DELETE
  console.log('Executing deleteAutomation ' + automationId)
}
