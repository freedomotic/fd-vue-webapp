/* globals localStorage */

import store from '../store'

var messageCalloutWS = null
var url = null

export default {

  openWebSockets () {
    console.log('Opening websockets')
    url = 'ws://174.138.4.3:9111/v3/ws/messagecallout/'
    messageCalloutWS = new WebSocket(url)
    // Show a connected message when the WebSocket is opened.
    messageCalloutWS.addEventListener('open', function (e) {
      console.log('open', e)
    })
    messageCalloutWS.onmessage = function (event) {
      if (store.isMobile) {
        console.log('mobile')
      } else {
        console.log('desktop')
      }
      console.log(event.data)
    }
    messageCalloutWS.onerror = function () {
     // notify user about connection error
      console.log('websocket error')
    }
  },
  closeWebSockets () {
    console.log('Closing messageCalloutWS')
    if (messageCalloutWS !== null) {
      messageCalloutWS.close()
    }
  }
}
