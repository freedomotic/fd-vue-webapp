<template>
 <v-ons-page> 
  <div v-if="addMode === false">
    <div>{{plugin.description}}</div>
    <v-ons-button v-if="!isPluginRunning(plugin.currentPluginStatus)" @click="startPlugin(plugin.uuid)" modifier="large">Start</v-ons-button>
    <v-ons-button v-else @click="stopPlugin(plugin.uuid)" modifier="large">Stop</v-ons-button>
    <br><br>
    <v-ons-button @click="uninstallPlugin(plugin.uuid)" modifier="large">Uninstall</v-ons-button>
  </div> 
  <div v-else>
    <v-ons-list>
      <v-ons-list-header>Select a category</v-ons-list-header> 
      <v-ons-list-item v-for="category in getMarketplaceCategoriesList" :key="category.id"
        modifier="chevron"
        tappable
       >
        <div class="left">
          {{ category.name}}
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </div>
 </v-ons-page> 
</template>

<script>
  export default {
    props: {
      plugin: {},
      addMode: Boolean
    },
    computed: {
      getMarketplaceCategoriesList: function () {
        return this.$store.state.marketplaceCategoriesList
      }
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
      },
      uninstallPlugin: function (pluginId) {
        this.$store.dispatch('uninstallPlugin', pluginId)
      }
    }
}
</script>
<style scoped>
  
</style>
