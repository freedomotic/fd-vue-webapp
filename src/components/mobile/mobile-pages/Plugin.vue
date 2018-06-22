<template>
  <div>
    <div>{{plugin.description}}</div>
    <v-ons-button v-if="!isPluginRunning(plugin.currentPluginStatus)" @click="startPlugin(plugin.uuid)" modifier="large">Start</v-ons-button>
    <v-ons-button v-else @click="stopPlugin(plugin.uuid)" modifier="large">Stop</v-ons-button>
    <div>{{plugin}}</div>
  </div>
  
</template>

<script>
  export default {
    props: {
      plugin: {}
    },
    methods: {
      isPluginRunning: function (currentStatus) {
        return currentStatus === 'RUNNING'
      },
      startPlugin: function (pluginId) {
        this.$store.dispatch('startPlugin', pluginId)
      },
      stopPlugin: function (pluginId) {
        this.$store.dispatch('stopPlugin', pluginId)
      }
    }
}
</script>
<style scoped>
  
</style>
