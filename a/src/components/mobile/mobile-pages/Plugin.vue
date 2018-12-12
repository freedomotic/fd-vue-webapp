<template>
 <v-ons-page> 
  <div v-if="addMode === false">
   <v-ons-card>
     <img :src="getPluginIcon(getPluginFromStore.uuid + '-' + getPluginFromStore.currentPluginStatus.toLowerCase() + '.png')">
    <img :src="image">
    <div>{{getPluginFromStore.description}}</div>
    <br><br>
    <v-ons-button v-if="!isPluginRunning(getPluginFromStore.currentPluginStatus)" @click="startPlugin(getPluginFromStore.uuid)" modifier="large">{{$t('start')}}</v-ons-button>
    <v-ons-button v-else @click="stopPlugin(getPluginFromStore.uuid)" modifier="large">{{$t('stop')}}</v-ons-button>
    <br><br>
    <v-ons-button @click="uninstallPlugin(getPluginFromStore.uuid)" modifier="large">{{$t('uninstall')}}</v-ons-button>
  </v-ons-card>
  </div> 
  <div v-else>
    <v-ons-list>
      <v-ons-list-header>{{$t('select_category')}}</v-ons-list-header>
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
      <v-ons-list-header>{{$t('click_plugin_download_install')}}</v-ons-list-header>
      <v-ons-list-item v-for="plugin in getMarketplaceCategoryPlugins" :key="plugin.nid"
        modifier="chevron"
        tappable
        @click="installPlugin(plugin.title, plugin.nid)"
      >
        <div class="left">
         <img class="marketplace-icon" :src="plugin.field_icon[0].filepath" :alt="plugin.title">
        </div>
        <div class="right">{{plugin.title}}</div>
      </v-ons-list-item>
    </v-ons-list>
  </div>
 </v-ons-page> 
</template>

<script>
  export default {
    props: {
      addMode: Boolean,
      index: ''
    },
    data () {
      return {
        selectedCategory: '',
        image: ''
      }
    },
    computed: {
      getMarketplaceCategoriesList: function () {
        return this.$store.state.marketplaceCategoriesList
      },
      getMarketplaceCategoryPlugins: function () {
        return this.$store.state.marketplaceCategoryPluginsList
      },
      getPluginFromStore: function () {
        return this.$store.state.pluginsList[this.index]
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
      },
      getPluginIcon: function (pluginIcon) {
        this.$store.dispatch('getResource', pluginIcon).then((data) => {
          this.image = data
          return (data)
        }).catch(() => {
        })
      }
    }
}
</script>
<style scoped>
   .marketplace-icon {
      width: 30px;
      margin: 1%;
   }   
</style>
