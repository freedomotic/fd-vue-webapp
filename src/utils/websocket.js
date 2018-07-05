/* globals localStorage */

import store from '../store'

var eventWS = null
var url = null
var host = window.location.hostname

export default {

  openWebSockets () {
    console.log('Opening websockets ' + host)
    if (process.env.NODE_ENV === 'development' || window.location.host === 'fd-vue-webapp.herokuapp.com') {
      url = 'ws://174.138.4.3:9111/v3/ws/event/'
    } else {
      url = 'ws://localhost:9111/v3/ws/event/'
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
      console.log(event.data)
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
