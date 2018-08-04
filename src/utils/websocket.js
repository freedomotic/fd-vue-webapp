/* globals sessionStorage */

import EventBus from '@/utils/event-bus'
import store from '../store'

var eventWS = null
var url = null
var host = window.location.hostname

export default {

  openWebSockets () {
    console.log('Opening websockets ' + host)
    if (window.location.host === 'fd-vue-webapp.herokuapp.com') {
      url = 'ws://174.138.4.3:9111/v3/ws/event/'
    } else {
      url = 'ws://' + host + ':9111/v3/ws/event/'
    }
    eventWS = new WebSocket(url)
    eventWS.addEventListener('open', function (e) {
      console.log('event websocket opened', e)
    })
    eventWS.onmessage = function (event) {
      if (store.isMobile) {
        console.log('mobile')
      } else {
        console.log('desktop')
      }
      // Process incoming messages
      var data = event.data.split('|').pop()
      data = data.split('#')
      var messageType = data[0]
      var payload = data[1]
      console.log(messageType + ' ' + payload)
      switch (messageType) {
        case 'message-callout':
          if (store.isMobile) {
            EventBus.$emit('mobileNotification', JSON.parse(payload).message)
          } else {
            EventBus.$emit('snotifyMessage', JSON.parse(payload).message)
          }
          break
        case 'plugin-started':
          store.dispatch('updatePluginFromWS', JSON.parse(payload))
          // store.dispatch('getPluginsList')
          break
        case 'plugin-stopped':
          store.dispatch('updatePluginFromWS', JSON.parse(payload))
          // store.dispatch('getPluginsList')
          break
        case 'object-changed':
          // store.dispatch('updateThingFromWS', JSON.parse(payload))
          store.dispatch('getThingsList')
          break
      }
    }
    eventWS.onerror = function () {
     // notify user about connection error
      console.log('websocket error')
    }
  },
  closeWebSockets () {
    console.log('Closing messageCalloutWS')
    if (eventWS !== null) {
      eventWS.close()
    }
  }
}
