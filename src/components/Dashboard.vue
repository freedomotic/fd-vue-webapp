<template>
  <div>
     <corner-button class="top-left" orientation="top-left"></corner-button>
     <corner-button class="bottom-left" orientation="bottom-left"></corner-button>
     <plugin title="Plugin Title" description="plugin description" icon="../assets/varioussensors-running.png"></plugin>
     <corner-button class="top-right" orientation="top-right"></corner-button>
     <corner-button class="bottom-right" orientation="bottom-right"></corner-button>
  </div>
  
</template>

<script>
import CornerButton from './CornerButton.vue'
import Plugin from './Plugin.vue'

export default {
  components: {
    'corner-button': CornerButton, Plugin
  },
  displaySettings: false,
  displayInfo: false,
  displayAlerts: false,
  blur: false,
  hideBottomSection: function () {
    if (this.expanded) {
      this.expanded = false
    }
  },
  hideAll: function () {
    this.hideBottomSection()
    this.displaySettings = false
    this.displayAlerts = false
    this.displayInfo = false
  },
  showSetup: function () {
    this.hideAll()
    this.displaySettings = true
    this.blur = !this.blur
  },
  showAlerts: function () {
    this.hideAll()
    if (!('webkitSpeechRecognition' in window)) {
      this.setToast("Current browser doesn't support WebSpeeck API")
    } else {
      this.displayAlerts = true
      this.blur = !this.blur
    }
  },
  showInfo: function () {
    this.hideAll()
    this.displayInfo = true
    this.blur = !this.blur
  },
  closeSection: function () {
    this.hideAll()
    this.blur = false
  },
  ready: function () {},
  doLogout: function () {
    this.$.logoutService.go()
    this.fire('logout', null)
  },
  updateToast: function (e) {
    var msg = e.detail
    this.setToast(msg.message)
  },
  setToast: function (msg) {
    // console.log("CALLOUT",msg);
    this.$.toast.text = msg
    this.$.toast.opened = true
  }
}
</script>

<style>
      :host {
        display: block;
        height: 100%;
        width: 100%;
        font-family: Open Sans;
        background-color: #dfd;
        overflow: hidden;
      }
      .bottom-section {
        position: fixed;
        bottom: 0px;
      }
      paper-toast {
        bottom: 10px;
        left: 10px;
        font-family: Open Sans;
        padding-left: 20px;
        padding-bottom: 18px;
        z-index: 900;
      }
      paper-toast a {
        color: #fff;
        text-decoration: none;
      }
      .blur {
        -webkit-filter: blur(2px);
        -moz-filter: blur(2px);
        -o-filter: blur(2px);
        -ms-filter: blur(2px);
        filter: blur(2px);
      }
      .section {
        position: fixed;
        top: 1%;
        bottom: 1%;
        left: 1%;
        right: 1%;
        background: rgba(50, 50, 50, 0.95);
        border-radius: 4px;
        z-index: 130;
        color: black;
      }
      .close {
        position: absolute;
        top: 5px;
        right: 30px;
        color: #fff;
        z-index: 140;
      }
      .top-right {
        position: fixed;
        top: 0px;
        right: 0px;
      }
      .top-left {
        position: fixed;
        top: 0px;
        left: 0px;
      }
      .bottom-right {
        position: fixed;
        bottom: 0px;
        right: 0px;
      }
      .bottom-left {
        position: fixed;
        bottom: 0px;
        left: 0px;
      }
      .background {
        width: 100%;
        height: 100%;
        background-color: lightgray;
      }
      .dropdown{
        z-index: 120;
        top: 10px;
        left: 10px;
      }
</style> 