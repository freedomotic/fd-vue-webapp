import axios from '@/utils/fd-axios'

export const getEnvironmentsList = (context) => {
  axios.get('/environments').then((response) => {
    console.log('Retrieving Environments list')
    // commit setEnvironments mutation
    context.commit('setEnvironmentsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
  console.log('Executing getEnvironmentsList')
}

export const duplicateEnvironment = (context, envId) => {
  axios.post('/environments/' + envId + '/copy').then((response) => {
    console.log('Duplicating Environment ' + envId)
  }, (err) => {
    console.log(err)
  })
}

export const deleteEnvironment = (context, envId) => {
  axios.delete('/environments/' + envId).then((response) => {
    console.log('Deleting Environment ' + envId)
  }, (err) => {
    console.log(err)
  })
}

export const getEnvironmentThingsList = (context, envId) => {
  axios.get('/environments/' + envId + '/things').then((response) => {
    console.log('Retrieving Things list of current environment')
    // commit setEnvironmentThingsList mutation
    context.commit('setEnvironmentThingsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
  console.log('Executing getEnvironmentThingsList')
}

export const getEnvironmentRoomsList = (context, envId) => {
  axios.get('/environments/' + envId + '/rooms').then((response) => {
    console.log('Retrieving Rooms list of current environment')
    // commit setEnvironmentRoomsList mutation
    context.commit('setEnvironmentRoomsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
  console.log('Executing getEnvironmentThingsList')
}
