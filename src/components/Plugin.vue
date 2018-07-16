<template>
 <md-card>
  <md-card-header>
    <md-card-media>
     <img :src="getPluginIcon(getPluginFromStore.uuid + '-' + getPluginFromStore.currentPluginStatus.toLowerCase() + '.png')">
     <img :src="image">
    </md-card-media>  
  </md-card-header>
      
  <md-card-header>    
    <md-card-header-text>
      <div class="md-title">{{ getPluginFromStore.pluginName }}</div>
      <div class="md-subhead">{{ getPluginFromStore.description }}</div>
    </md-card-header-text>
  </md-card-header>
  <md-card-actions>
     <md-button class="md-icon-button" v-if="isPluginRunning(getPluginFromStore.currentPluginStatus)" @click="stopPlugin(getPluginFromStore.uuid)">
       <md-icon>pause</md-icon>
     </md-button>
     <md-button class="md-icon-button" v-else @click="startPlugin(getPluginFromStore.uuid)">
       <md-icon>play_arrow</md-icon>
     </md-button>
     <md-button class="md-icon-button" >
       <md-icon>settings</md-icon>
     </md-button>
     <md-button class="md-icon-button">
       <md-icon>delete</md-icon>
     </md-button>
  </md-card-actions> 
 </md-card>
</template>

<script>
  export default {
    props: {
      index: ''
    },
    data () {
      return {
        image: ''
      }
    },
    computed: {
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
  .md-card .md-title {
    font-size: 32px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 28px;
    text-align: center;
   }

   .md-card .md-subhead {
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 20px;
    text-align: center;
   }
   
   .md-theme-default.md-card {
    width: 300px;
    min-height: 250px;
    background-color: #8bae2d;
   }

   .md-card .md-card-header .md-card-media {
      width: 64px;
      -ms-flex: 0 0 64px;
          flex: 0 0 64px;
      height: 64px;
      margin: auto;
    }
    
    .md-card .md-card-actions {
      background-color: #ffffff;
    }
</style>
