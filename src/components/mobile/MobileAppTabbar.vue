<template>
  <v-ons-page>
    <custom-toolbar>
      {{ $t(title) }}
      <v-ons-toolbar-button slot="right" @click="toggleMenu()">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </custom-toolbar>

    <v-ons-tabbar position="auto"
      :tabs="tabs"
      :index.sync="index"
    ></v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Home from '../mobile/mobile-pages/Home.vue'
import PluginsPanel from '../mobile/mobile-pages/PluginsPanel.vue'
import Settings from '../mobile/mobile-pages/Settings.vue'
import Users from '../mobile/mobile-pages/Users.vue'

export default {
  props: ['pageStack', 'setOptions', 'toggleMenu', 'setIndex'],

  data () {
    return {
      tabs: [
        {
          label: 'home',
          icon: this.md() ? null : 'ion-home',
          page: Home,
          props: { pageStack: this.pageStack }
        },
        {
          label: 'settings',
          icon: this.md() ? null : 'ion-gear-b',
          page: Settings,
          props: { pageStack: this.pageStack }
        },
        {
          label: 'plugins',
          icon: this.md() ? null : 'ion-cube',
          page: PluginsPanel,
          props: {
            pageStack: this.pageStack,
            setOptions: this.setOptions
          }
        },
        {
          label: 'users',
          icon: this.md() ? null : 'ion-person-stalker',
          page: Users,
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
