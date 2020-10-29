import axios from '@/utils/fd-axios'

export const getThingsList = (context) => {
  axios.get('/things').then((response) => {
    console.log('Retrieving Things list')
    // commit setThingsList mutation
    context.commit('setThingsList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}

export const getThingTemplatesList = (context) => {
  axios.get('/things/templates').then((response) => {
    console.log('Retrieving Thing templates list')
    // commit setThingTemplatesList mutation
    context.commit('setThingTemplatesList', { list: response.data })
  }, (err) => {
    console.log(err)
  })
}

export const updateThingFromWS = (context, thing) => {
  // commit updateThingFromWS mutation
  context.commit('updateThingFromWS', thing)
}

export const addNewThing = (context, template) => {
  axios.post('/things/templates/' + template + '/instantiate').then((response) => {
    console.log('Adding new Thing of type ' + template)
  }, (err) => {
    console.log(err)
  })
}

export const cloneThing = (context, thingId) => {
  axios.post('/things/' + thingId + '/copy').then((response) => {
    console.log('Cloning Thing ' + thingId)
  }, (err) => {
    console.log(err)
  })
}

export const deleteThing = (context, thingId) => {
  axios.delete('/things/' + thingId).then((response) => {
    console.log('Deleting Thing ' + thingId)
  }, (err) => {
    console.log(err)
  })
}

export const updateThing = (context, thingId, thing) => {
  // mapped to  API /things/{thingId}/copy - PUT
  console.log('Executing updateThing ' + thingId)
}

export const moveThing = (context, payload) => {
  axios.post('/things/' + payload.thingId + '/move/' + payload.x + '/' + payload.y).then((response) => {
    console.log('Executing moveThing ' + payload.thingId + ' to ' + '(' + payload.x + ', ' + payload.y + ')')
  }, (err) => {
    console.log(err)
  })
}

export const sendObjectClickEvent = (context, thingId) => {
  axios.post('/things/' + thingId + '/click').then((response) => {
    console.log('Sending click event to Thing ' + thingId)
  }, (err) => {
    console.log(err)
  })
}

export const changeBehavior = (context, payload) => {
  axios.post('/things/' + payload.thingId + '/behaviorchange/' + payload.behaviorId + '/' + payload.newBehaviorValue).then((response) => {
    console.log('Updating behavior ' + payload.behaviorId + ' of Thing ' + payload.thingId + ' to value ' + payload.newBehaviorValue)
  }, (err) => {
    console.log(err)
  })
}
