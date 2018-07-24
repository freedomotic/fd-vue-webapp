<template>
    <div class="current-section">
        <md-toolbar class="md-accent">
          <md-content class="small-icon" @click="closeWindow">
            <md-icon>clear</md-icon>
          </md-content> 
          <h3 class="md-title">{{$t('things').toUpperCase()}}</h3>
        </md-toolbar>
     <grid-container>
       <div class="item" v-for="(thing, index) in getThingsList" :key="thing.uuid">
         <thing :thing="thing" :index="index"></thing>
       </div>
     </grid-container>     
    </div>    
</template>

<script>
import Thing from './Thing.vue'
import GridContainer from './common/GridContainer.vue'

export default {
  components: {
    Thing,
    GridContainer
  },
  computed: {
    getThingsList: function () {
      return this.$store.state.thingsList
    }
  },
  data () {
    return {}
  },
  methods: {
    closeWindow: function () {
      this.$store.commit('closeSection')
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
        background: transparent;
        border-radius: 4px;
        z-index: 130;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        overflow-y: auto;
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
