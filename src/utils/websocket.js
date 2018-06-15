/* globals localStorage */

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
    messageCalloutWS.addEventListener('message', function (e) {
      console.log('msg', e)
    })
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
