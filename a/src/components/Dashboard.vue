<template>
  <div id="background">
    <background></background>
    <div id="environments">
      <environments></environments>
    </div>      
    <div id="corner-top-left" @click="showLogout">
       <corner-button class="top-left" tooltipDirection="right" :tooltip="$t('user_account')" icon="account_box"></corner-button>
     </div>
    <div id="corner-bottom-left" @click="showInfo">
       <corner-button class="bottom-left" tooltipDirection="right" :tooltip="$t('info')" icon="info" ></corner-button>
    </div>
    <div id="corner-top-right">
       <corner-button class="top-right" tooltipDirection="left" :tooltip="$t('alerts')" icon="mic"></corner-button>
    </div> 
    <div id="corner-bottom-right" @click="showSetup">
      <corner-button class="bottom-right" tooltipDirection="left" :tooltip="$t('settings')" icon="settings"></corner-button>
    </div>  
    <div v-if="displayLogout">
       <div class="modalPopup">
          <logout/>
       </div>
    </div>
    <div v-else-if="displaySettings">
       <div class="section">
          <settings/>
       </div>
    </div>
    <div v-else-if="displayInfo">
       <div class="section">
          <app-info/>
       </div>
    </div>
    <div v-else-if="displayThings">
       <div class="section">
          <things-panel/>
       </div>
    </div>
    <system/> 
    <languages/>
    <automations/>
    <plugins/>
    <roles-panel/>
    <users-panel/> 
    <vue-snotify/>
    <modals-container/>
    <v-dialog/>
 </div>
</template>

<script>
import ws from '../utils/websocket'
import CornerButton from './CornerButton.vue'
import Settings from './Settings.vue'
import AppInfo from './AppInfo.vue'
import Background from './Background.vue'
import Logout from './Logout.vue'
import System from './System.vue'
import Plugins from './PluginsPanel.vue'
import Automations from './AutomationsPanel.vue'
import Languages from './LanguagesPanel.vue'
import RolesPanel from './RolesPanel.vue'
import UsersPanel from './UsersPanel.vue'
import ThingsPanel from './ThingsPanel.vue'
import Environments from './EnvironmentsPanel.vue'

export default {
  components: {
    'corner-button': CornerButton,
    'settings': Settings,
    'app-info': AppInfo,
    'background': Background,
    'logout': Logout,
    'system': System,
    'plugins': Plugins,
    'automations': Automations,
    'languages': Languages,
    'roles-panel': RolesPanel,
    'users-panel': UsersPanel,
    'things-panel': ThingsPanel,
    'environments': Environments
  },
  data () {
    return {}
  },
  created () {
    this.$store.commit('hideAll')
    ws.openWebSockets()
  },
  mounted () {
    this.$store.dispatch('getThingsList')
    this.$store.dispatch('getEnvironmentsList')
  },
  computed: {
    displaySettings () {
      return this.$store.state.displaySettings
    },
    displayAlerts () {
      return this.$store.state.displayAlerts
    },
    displayInfo () {
      return this.$store.state.displayInfo
    },
    displayLogout () {
      return this.$store.state.displayLogout
    },
    displayThings () {
      return this.$store.state.displayThings
    },
    blur () {
      return this.$store.state.blur
    }
  },
  methods: {
    hideAll () { this.$store.commit('hideAll') },
    showSetup () { this.$store.commit('showSetup') },
    showLogout () { this.$store.commit('showLogout') },
    showInfo () { this.$store.commit('showInfo') },
    closeSection () { this.$store.commit('closeSection') },
    ready: function () {},
    updateToast: function (e) {
      var msg = e.detail
      this.setToast(msg.message)
    },
    setToast: function (msg) {
      this.$.toast.text = msg
      this.$.toast.opened = true
    },
    showAlerts: function () {
      this.hideAll()
      if (!('webkitSpeechRecognition' in window)) {
        this.setToast("Current browser doesn't support WebSpeech API")
      } else {
        this.$store.commit('showAlerts')
      }
    },
    forceEnvironmentsRerender () {
      this.environmentsKey += 1
    }
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
      #corner-top-right {
        position: fixed;
        top: 0px;
        right: 0px;
      }
      #corner-top-left {
        position: fixed;
        top: 0px;
        left: 0px;
      }
      #corner-bottom-right {
        position: fixed;
        bottom: 0px;
        right: 0px;
      }
      #corner-bottom-left {
        position: fixed;
        bottom: 0px;
        left: 0px;
      }
      #background {
        width: 100%;
        height: 100%;
      }
      #environments {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .dropdown{
        z-index: 120;
        top: 10px;
        left: 10px;
      }

      .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 30px;  /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;

        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;

        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;

        /* Support for IE. */
        font-feature-settings: 'liga';
      }

      .material-icons.white {
        color: #FFFFFF;
      }

      .modalPopup {
        position: absolute; 
        left: 0; 
        right: 0;
        top: 25%; 
        margin-left: auto; 
        margin-right: auto; 
        background: rgba(255, 255, 255, 0.85);
        border-radius: 4px;
        z-index: 130;
        color: black;
        width: 25%;
      }
</style> 
