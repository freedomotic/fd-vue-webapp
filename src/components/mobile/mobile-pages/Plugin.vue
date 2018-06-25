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
      <v-ons-list-item>
        <div class="center">
          <v-ons-select v-model="selectedCategory" v-on:change="getMarketplaceCategoryPluginsList()" style="width: 40%">
            <option v-for="category in getMarketplaceCategoriesList" :key="category.id">
              {{ category.name}}
            </option>
          </v-ons-select>

        </div>
      </v-ons-list-item>
    </v-ons-list>
  <br><br>
  <v-ons-list>
      <v-ons-list-header>Click on a plugin to download and install</v-ons-list-header>
      <v-ons-list-item v-for="plugin in getMarketplaceCategoryPlugins" :key="plugin.nid"
        modifier="chevron"
        tappable
        @click="installPlugin(plugin.title, plugin.nid)"
      >
        <div class="left">
         <v-ons-icon icon="md-stop" class="list-item__icon"></v-ons-icon>
        </div>
        <div class="center">{{plugin.title}}</div>
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
    data () {
      return {
        selectedCategory: ''
      }
    },
    computed: {
      getMarketplaceCategoriesList: function () {
        return this.$store.state.marketplaceCategoriesList
      },
      getMarketplaceCategoryPlugins: function () {
        return this.$store.state.marketplaceCategoryPluginsList
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
      installPlugin: function (pluginName, pluginId) {
        const self = this
        this.$ons.notification.confirm({
          title: 'Install new plugin',
          message: 'Do you want to download and install "' + pluginName + "'?",
          buttonLabels: ['Cancel', 'Install'],
          callback: function (idx) {
            switch (idx) {
              case 0:
                break
              case 1:
                self.$store.dispatch('installPlugin', pluginId)
                break
            }
          }
        })
      },
      uninstallPlugin: function (pluginId) {
        this.$store.dispatch('uninstallPlugin', pluginId)
      },
      getMarketplaceCategoryPluginsList: function () {
        this.$store.dispatch('getMarketplaceCategoryPluginsList', this.selectedCategory)
      }
    }
}
</script>
<style scoped>
  
</style>
