<template>
    <div class="current-section">
        <md-toolbar class="md-accent">
          <md-content class="small-icon" @click="closeWindow">
            <md-icon>clear</md-icon>
          </md-content> 
          <h3 class="md-title">{{$t('things').toUpperCase()}}</h3>
        </md-toolbar>
     <div class="parent-box">
       <div class="item" v-for="(thing, index) in getThingsList" :key="thing.uuid">
         <thing :thing="thing" :index="index"></thing>
       </div>
    </div>     
    </div>    
</template>

<script>
import Thing from './Thing.vue'

export default {
  components: {
    'thing': Thing
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
      
    .item {
        padding: 0.5em;
        width: 25%;
      }

    .parent-box {
       display: flex;
       flex-flow: row wrap;
       justify-content: space-evenly;
       padding: 1em;
       margin: 1em auto;
    }
     /*this helps in having the last line of the flex grid properly aligned*/
    .parent-box:after {
      content: "";
      flex: auto;
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
