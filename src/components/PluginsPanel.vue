<template>
  <div v-if="pluginsOpen && $q.platform.is.desktop" class="current-section">
    <q-layout>
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="undo" class="q-mr-sm" @click="openSettings"/>
          <q-toolbar-title>{{$t('plugins').toUpperCase()}}</q-toolbar-title>
          <q-btn flat round dense icon="close" @click="closeWindow"/>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <grid-container>
          <div class="item" v-for="plugin in getPluginsList" :key="plugin.uuid">
            <plugin :plugin="plugin"></plugin>
          </div>
        </grid-container>
      </q-page-container>
    </q-layout>
  </div>
  <div v-else-if="$q.platform.is.mobile">
    <q-list bordered>
      <q-item v-for="plugin in getPluginsList" :key="plugin.uuid" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary">
            <q-icon v-if="plugin.currentPluginStatus == 'RUNNING'" name="check" color="white" />
            <q-icon v-else name="stop" color="white" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ plugin.pluginName}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="green" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import Plugin from './Plugin.vue'
//import Marketplace from './Marketplace.vue'
import GridContainer from './common/GridContainer.vue'

export default {
  components: {
    'plugin': Plugin,
    //'marketplace': Marketplace,
    GridContainer
  },
  mounted: function () {
    this.$store.dispatch('getPluginsList')
    //this.$store.dispatch('getMarketplaceCategoriesList')
  },
  computed: {
    pluginsOpen: function () {
      return this.$store.state.pluginsOpen
    },
    getPluginsList: function () {
      return this.$store.state.pluginsList.filter((plugin) => {
        return this.hiddenPlugins.indexOf(plugin.pluginName) === -1
      })
    }
  },
  data () {
    return {
      hiddenPlugins: [
        'Application Server',
        'Delayer', 
        'Plugins Remote Controller',
        'RestAPI v3',
        'Scheduler',
        'Successful Test' 
      ]
    }
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
        text: ''
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
