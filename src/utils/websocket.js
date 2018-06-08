/* globals localStorage */

var ws = null
var url = null

export default {

  openWebSockets () {
    console.log('Opening websockets')
    url = 'ws://174.138.4.3:9111/v3/ws/messagecallout/'
    ws = new WebSocket(url)
    // Show a connected message when the WebSocket is opened.
    ws.addEventListener('open', function (e) {
      console.log('open', e)
    })
    ws.addEventListener('message', function (e) {
      console.log('msg', e)
    })
  },
  closeWebSockets () {
    console.log('close ws')
    ws.close()
  }
}
