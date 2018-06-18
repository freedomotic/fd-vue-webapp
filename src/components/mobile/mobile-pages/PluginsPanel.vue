<template>
  <v-ons-page>
    <v-ons-list>
      <v-ons-list-item v-for="plugin in getPluginsList" :key="plugin.uuid"
        modifier="chevron"
        @click="transition('default', plugin)"
        tappable
      >
        <div class="left">
          <v-ons-icon v-if="plugin.currentPluginStatus == 'RUNNING'" style="color: green;" icon="md-check" class="list-item__icon"></v-ons-icon>
          <v-ons-icon v-else icon="md-stop" class="list-item__icon"></v-ons-icon>
        </div>
        <div class="center">
         {{ plugin.pluginName}}
        </div>
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-fab position="bottom right" class>
        <v-ons-icon  style="color: green;" icon="md-add_circle"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>

<script>
import Plugin from './Plugin.vue'

const transitionPage = {
  template: `
    <v-ons-page>
      <custom-toolbar backLabel="Plugins">
        {{ plugin.pluginName }}
      </custom-toolbar>
      <plugin-component
         :name="plugin.pluginName" 
         :description="plugin.description"
         :uuid="plugin.uuid"
         :currentStatus="plugin.currentPluginStatus"
         :category="plugin.category"
       >
       </plugin-component>
     </v-ons-page>
    `
}

export default {
  props: ['pageStack', 'setOptions'],
  components: {
    'plugin-component': Plugin
  },
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('getPluginsList')
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
<style scoped>
.button-margin {
  margin: 6px 0;
}
</style>
