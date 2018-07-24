<template>
    <div v-if="pluginsOpen" class="current-section">
        <md-toolbar class="md-accent">
          <md-content class="small-icon" @click="openSettings">
            <md-icon>undo</md-icon>
          </md-content>
          <md-content class="small-icon" @click="closeWindow">
            <md-icon>clear</md-icon>
          </md-content> 
          <h3 class="md-title">{{$t('plugins').toUpperCase()}}</h3>
        </md-toolbar>
    <div>
        <md-button class="md-fab md-primary md-fab-bottom-right md-fixed" @click="showDynamicComponentModal">
        <md-icon>add</md-icon>
       </md-button>
    </div>         
    <grid-container>
       <div class="item" v-for="(plugin, index) in getPluginsList" :key="plugin.uuid">
         <plugin :index="index"></plugin>
      </div>
    </grid-container>  
   </div>    
</template>

<script>
import Plugin from './Plugin.vue'
import Marketplace from './Marketplace.vue'
import GridContainer from './common/GridContainer.vue'

export default {
  components: {
    'plugin': Plugin,
    'marketplace': Marketplace,
    GridContainer
  },
  mounted: function () {
    this.$store.dispatch('getPluginsList')
    this.$store.dispatch('getMarketplaceCategoriesList')
  },
  computed: {
    pluginsOpen: function () {
      return this.$store.state.pluginsOpen
    },
    getPluginsList: function () {
      return this.$store.state.pluginsList
    }
  },
  data () {
    return {}
  },
  methods: {
    openSettings: function () {
      this.$store.commit('showSetup')
    },
    closeWindow: function () {
      this.$store.commit('closeSection')
    },
    showDynamicComponentModal () {
      this.$modal.show(Marketplace, {
        text: 'This text is passed as a property'
      },
        {
          name: 'marketplaceModal',
          draggable: true,
          adaptive: true,
          resizable: true,
          scrollable: true,
          clickToClose: false,
          width: '65%',
          height: 'auto',
          minHeight: 300,
          minWidth: 500
        })
    }
  }
}
</script>

<style scoped>
   .current-section {
        position: fixed;
        top: 1%;
        bottom: 1%;
        left: 1%;
        right: 1%;
        background: white;
        border-radius: 4px;
        z-index: 10;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        overflow-y: scroll;
        margin: auto;
      }
 
   #action-container {
       text-align: center;
       cursor: pointer;
       background-color: transparent;
       margin-top: 50%;
   }  

   .small-icon {
      width: 24px;
      margin: 1%;
      cursor: pointer;
      background:transparent;
   }
   
</style>
