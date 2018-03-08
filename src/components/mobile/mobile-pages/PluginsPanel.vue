<template>
  <v-ons-page>
    <v-ons-list>
      <v-ons-list-item v-for="plugin in getPluginsList" :key="plugin.uuid"
        modifier="chevron"
        @click="transition('default', plugin)"
        tappable
      >
        {{ plugin.pluginName }}
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-fab position="bottom right" :style="spdStyle">
        <v-ons-icon  style="color: green;" icon="md-add_circle"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>

<script>
const transitionPage = {
  template: `
    <v-ons-page>
      <custom-toolbar backLabel="Plugins">
        {{ plugin.pluginName }}
      </custom-toolbar>
     
    </v-ons-page>
    `
}

export default {
  props: ['pageStack', 'setOptions'],

  data () {
    return {}
  },

  computed: {
    getPluginsList: function () {
      return this.$store.state.pluginsList
    }
  },

  methods: {
    transition (name, item) {
      this.setOptions({
        animation: name,
        plugin: item,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            plugin: item
          }
        }
      })
    }
  }
}
</script>
