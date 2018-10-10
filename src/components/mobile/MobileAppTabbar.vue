<template>
  <v-ons-page>
    <custom-toolbar>
      {{ $t(title) }}
      <v-ons-toolbar-button slot="right" @click="toggleMenu()">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </custom-toolbar>

    <v-ons-tabbar position="auto"
      :index.sync="index">

      <template slot="pages">
        <component v-for="tab in tabs" :key="tab.key"
          :is="tab.page" v-bind="tab.props">
        </component>
      </template>

      <v-ons-tab v-for="tab in tabs" :key="tab.key"
        :icon="tab.icon"
        :label="$t(tab.key)">
      </v-ons-tab>
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Home from '../mobile/mobile-pages/Home.vue'
import PluginsPanel from '../mobile/mobile-pages/PluginsPanel.vue'
import Settings from '../mobile/mobile-pages/Settings.vue'
import Logout from '../mobile/mobile-pages/Logout.vue'

export default {
  props: ['pageStack', 'setOptions', 'toggleMenu', 'setIndex'],

  components: {
    Home,
    PluginsPanel,
    Settings,
    Logout
  },

  data () {
    return {
      tabs: [
        {
          key: 'home',
          icon: this.md() ? null : 'ion-home',
          page: Home,
          props: { pageStack: this.pageStack }
        },
        {
          key: 'settings',
          icon: this.md() ? null : 'ion-gear-b',
          page: Settings,
          props: { pageStack: this.pageStack }
        },
        {
          key: 'plugins',
          icon: this.md() ? null : 'ion-cube',
          page: PluginsPanel,
          props: {
            pageStack: this.pageStack,
            setOptions: this.setOptions
          }
        },
        {
          key: 'logout',
          icon: this.md() ? null : 'ion-information-circled',
          page: Logout,
          props: {
            pageStack: this.pageStack,
            setOptions: this.setOptions
          }
        }
      ]
    }
  },

  methods: {
    md () {
      return this.$ons.platform.isAndroid()
    }
  },

  computed: {
    title () {
      return this.md() ? 'Freedomotic Mobile' : this.tabs[this.index].label
    },
    index: {
      get () {
        return this.setIndex() // Without args returns the current index
      },
      set (index) {
        this.setIndex(index)
      }
    }
  }

}
</script>
