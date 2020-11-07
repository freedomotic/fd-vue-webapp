/* eslint-disable */
<template>
  <div id="background" v-if="$q.platform.is.desktop">
    <background />
    <div id="environments">
      <environments></environments>
    </div>
    <div id="corner-top-left" @click="showLogout">
      <corner-button class="top-left" :tooltip="$t('user_account')" icon="account_box"></corner-button>
    </div>
    <div id="corner-bottom-left" @click="showInfo">
      <corner-button class="bottom-left" :tooltip="$t('info')" icon="info"></corner-button>
    </div>
    <div id="corner-top-right">
      <corner-button class="top-right" :tooltip="$t('alerts')" icon="mic"></corner-button>
    </div>
    <div id="corner-bottom-right" @click="showSetup">
      <corner-button class="bottom-right" :tooltip="$t('settings')" icon="settings"></corner-button>
    </div>
    <div v-if="displayLogout">
      <div class="modalPopup">
        <logout />
      </div>
    </div>
    <div v-else-if="displaySettings">
      <div class="section">
        <settings />
      </div>
    </div>
    <div v-else-if="displayInfo">
      <div class="section">
        <app-info />
      </div>
    </div>
    <div v-else-if="displayThings">
      <div class="section">
        <things-panel />
      </div>
    </div>
    <system />
    <languages />
    <automations />
    <plugins />
    <roles-panel />
    <users-panel />
  </div>
  <div v-else>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title v-if="currentMobileSection == 'home'">
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
            </q-avatar>Freedomotic
          </q-toolbar-title>

          <q-toolbar-title v-else-if="currentMobileSection == 'things'">
            <q-avatar>
              <q-icon
                size="32px"
                name="keyboard_backspace"
                color="white"
                @click="setMobileSection('home')"
              />
            </q-avatar>
            {{$t('things').charAt(0).toUpperCase() + $t('things').slice(1)}}
          </q-toolbar-title>

          <q-toolbar-title v-else-if="currentMobileSection == 'settings'">
            <q-avatar>
              <q-icon
                size="32px"
                name="keyboard_backspace"
                color="white"
                @click="setMobileSection('home')"
              />
            </q-avatar>
            {{$t('settings')}}
          </q-toolbar-title>

          <q-toolbar-title v-else-if="currentMobileSection == 'plugins'">
            <q-avatar>
              <q-icon
                size="32px"
                name="keyboard_backspace"
                color="white"
                @click="setMobileSection('settings')"
              />
            </q-avatar>
            {{$t('plugins')}}
          </q-toolbar-title>

          <q-toolbar-title v-else-if="currentMobileSection == 'info'">
            <q-avatar>
              <q-icon
                size="32px"
                name="keyboard_backspace"
                color="white"
                @click="setMobileSection('home')"
              />
            </q-avatar>
            {{$t('info')}}
          </q-toolbar-title>

          <q-toolbar-title v-else-if="currentMobileSection == 'languages'">
            <q-avatar>
              <q-icon
                size="32px"
                name="keyboard_backspace"
                color="white"
                @click="setMobileSection('settings')"
              />
            </q-avatar>
            {{$t('languages')}}
          </q-toolbar-title>

          <q-toolbar-title v-else-if="currentMobileSection == 'automations'">
            <q-avatar>
              <q-icon
                size="32px"
                name="keyboard_backspace"
                color="white"
                @click="setMobileSection('settings')"
              />
            </q-avatar>
            {{$t('automations')}}
          </q-toolbar-title>

          <q-toolbar-title v-else-if="currentMobileSection == 'users'">
            <q-avatar>
              <q-icon
                size="32px"
                name="keyboard_backspace"
                color="white"
                @click="setMobileSection('settings')"
              />
            </q-avatar>
            {{$t('users')}}
          </q-toolbar-title>

          <q-toolbar-title v-else-if="currentMobileSection == 'roles'">
            <q-avatar>
              <q-icon
                size="32px"
                name="keyboard_backspace"
                color="white"
                @click="setMobileSection('settings')"
              />
            </q-avatar>
            {{$t('roles')}}
          </q-toolbar-title>

          <q-toolbar-title v-else-if="currentMobileSection == 'system'">
            <q-avatar>
              <q-icon
                size="32px"
                name="keyboard_backspace"
                color="white"
                @click="setMobileSection('settings')"
              />
            </q-avatar>
            {{$t('system')}}
          </q-toolbar-title>

          <q-toolbar-title v-else-if="currentMobileSection == 'logout'">
            <q-avatar>
              <q-icon
                size="32px"
                name="keyboard_backspace"
                color="white"
                @click="setMobileSection('home')"
              />
            </q-avatar>
            {{$t('logout')}}
          </q-toolbar-title>

          <q-btn dense flat round icon="menu" @click="right = !right" />
        </q-toolbar>
      </q-header>

      <q-drawer show-if-above v-model="right" side="right" bordered>
        <q-img v-bind:src="logoImg" width="90%" />
        <q-list dense padding class="rounded-borders">
          <q-item clickable v-ripple @click="setMobileSection('home')">
            <q-item-section>{{$t('home')}}</q-item-section>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" icon="home" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="setMobileSection('settings')">
            <q-item-section>{{$t('settings')}}</q-item-section>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" icon="settings" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="setMobileSection('logout')">
            <q-item-section>{{$t('logout')}}</q-item-section>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" icon="logout" @click="showLogout" />
            </q-item-section>
          </q-item>
          <q-item-label header>Online Resources</q-item-label>
          <q-item clickable v-ripple @click.native="goToURL('https://www.freedomotic-iot.com')">
            <q-item-section>{{$t('official_site')}}</q-item-section>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" icon="link" />
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            @click.native="goToURL('https://freedomotic-user-manual.readthedocs.io/en/latest/')"
          >
            <q-item-section>{{$t('docs')}}</q-item-section>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" icon="link" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click.native="goToURL('https://github.com/freedomotic')">
            <q-item-section>{{$t('source_code')}}</q-item-section>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" icon="link" />
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            @click.native="goToURL('https://groups.google.com/forum/#!forum/freedom-domotics')"
          >
            <q-item-section>International {{$t('community')}}</q-item-section>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" icon="link" />
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            @click.native="goToURL('https://groups.google.com/forum/#!forum/freedomotic-it')"
          >
            <q-item-section>Italian {{$t('community')}}</q-item-section>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" icon="link" />
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            @click.native="goToURL('https://docs.google.com/forms/d/e/1FAIpQLSeLJnqctxF7nwerTI5U2LfhdjksALKxgje5tStzqQTxmAmAzw/viewform?c=0&w=1')"
          >
            <q-item-section>{{$t('report_bug')}}</q-item-section>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" icon="link" />
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-ripple @click="setMobileSection('info')">
            <q-item-section>{{$t('info')}}</q-item-section>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" icon="info" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
      <q-page-container>
        <router-view />
        <div v-if="currentMobileSection == 'home'">
          <q-list bordered>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section>
                <q-item-label>{{$t('environments')}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="keyboard_arrow_right" color="green" />
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section>
                <q-item-label>{{$t('lights')}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="keyboard_arrow_right" color="green" />
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section>
                <q-item-label>{{$t('temperature')}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="keyboard_arrow_right" color="green" />
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section>
                <q-item-label>{{$t('sensors')}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="keyboard_arrow_right" color="green" />
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section>
                <q-item-label>{{$t('actuators')}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="keyboard_arrow_right" color="green" />
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm" clickable v-ripple @click="setMobileSection('things')">
              <q-item-section>
                <q-item-label>{{$t('all_things')}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="keyboard_arrow_right" color="green" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div v-else-if="currentMobileSection == 'info'">
          <app-info />
        </div>
        <div v-else-if="currentMobileSection == 'settings'">
          <settings />
        </div>
        <div v-else-if="currentMobileSection == 'plugins'">
          <plugins />
        </div>
        <div v-else-if="currentMobileSection == 'things'">
          <things-panel />
        </div>
        <div v-else-if="currentMobileSection == 'languages'">
          <languages />
        </div>
        <div v-else-if="currentMobileSection == 'automations'">
          <automations />
        </div>
        <div v-else-if="currentMobileSection == 'users'">
          <users-panel />
        </div>
        <div v-else-if="currentMobileSection == 'roles'">
          <roles-panel />
        </div>
        <div v-else-if="currentMobileSection == 'system'">
          <system />
        </div>
        <div v-else-if="currentMobileSection == 'logout'">
          <logout />
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import ws from "../utils/websocket";
import CornerButton from "./CornerButton.vue";
import Settings from "./Settings.vue";
import AppInfo from "./AppInfo.vue";
import Background from "./Background.vue";
import Logout from "./Logout.vue";
import System from "./System.vue";
import Plugins from "./PluginsPanel.vue";
import Automations from "./AutomationsPanel.vue";
import Languages from "./LanguagesPanel.vue";
import RolesPanel from "./RolesPanel.vue";
import UsersPanel from "./UsersPanel.vue";
import ThingsPanel from "./ThingsPanel.vue";
import Environments from "./EnvironmentsPanel.vue";
import logoImg from "../assets/freedomotic-logo.png";
import { openURL } from "quasar";

export default {
  components: {
    "corner-button": CornerButton,
    settings: Settings,
    "app-info": AppInfo,
    background: Background,
    logout: Logout,
    system: System,
    plugins: Plugins,
    automations: Automations,
    languages: Languages,
    "roles-panel": RolesPanel,
    "users-panel": UsersPanel,
    "things-panel": ThingsPanel,
    environments: Environments
  },
  data() {
    return {
      logoImg: logoImg,
      right: false // show or not mobile right menu
    };
  },
  created() {
    this.$store.commit("hideAll");
    ws.openWebSockets();
  },
  mounted() {
    this.$store.dispatch("getThingsList");
    this.$store.dispatch("getEnvironmentsList");
    this.$store.dispatch("getThingTemplatesList");
  },
  computed: {
    displaySettings() {
      return this.$store.state.displaySettings;
    },
    displayAlerts() {
      return this.$store.state.displayAlerts;
    },
    displayInfo() {
      return this.$store.state.displayInfo;
    },
    displayLogout() {
      return this.$store.state.displayLogout;
    },
    displayThings() {
      return this.$store.state.displayThings;
    },
    blur() {
      return this.$store.state.blur;
    },
    currentMobileSection() {
      return this.$store.state.mobileSection;
    }
  },
  methods: {
    hideAll() {
      this.$store.commit("hideAll");
    },
    showSetup() {
      this.$store.commit("showSetup");
    },
    showLogout() {
      this.$store.commit("showLogout");
    },
    showInfo() {
      this.$store.commit("showInfo");
    },
    closeSection() {
      this.$store.commit("closeSection");
    },
    ready: function() {},
    setMobileSection: function(section) {
      this.$store.commit("setMobileSection", section);
    },
    forceEnvironmentsRerender() {
      this.environmentsKey += 1;
    },
    goToURL: function(link) {
      openURL(link);
    }
  }
};
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
.dropdown {
  z-index: 120;
  top: 10px;
  left: 10px;
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 30px; /* Preferred icon size */
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
  font-feature-settings: "liga";
}

.material-icons.white {
  color: #ffffff;
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
