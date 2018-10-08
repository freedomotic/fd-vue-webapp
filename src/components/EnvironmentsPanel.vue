<template>
  <div>
   <md-content v-if="prevExists === true" @click="prevEnvironment"> 
     <div class="slide-left">
      <md-icon id="left-btn-icon" class="md-size-2x">keyboard_arrow_left</md-icon>
     </div>
   </md-content>
   <md-content v-if="nextExists === true" @click="nextEnvironment">
     <div class="slide-right">
      <md-icon id="right-btn-icon" class="md-size-2x">keyboard_arrow_right</md-icon>
     </div>
   </md-content>
    <div v-for="(environment, index) in getEnvironmentsList" :key="environment.uuid">
         <environment :environment="environment" v-show="showEnvironment(index, currShowing)"></environment>
    </div>
  </div>  
</template>

<script>
import Environment from './Environment.vue'

export default {
  name: 'EnvironmentPanel',
  data () {
    return {
      nextExists: false,
      prevExists: false,
      currShowing: 0
    }
  },
  components: {
    Environment
  },
  created () {
    if (this.currShowing > 0) {
      this.prevExists = true
    }
    if (this.currShowing < this.getEnvironmentsList.length - 1) {
      this.nextExists = true
    }
    console.log('Created ' + this.prevExists + ' ' + this.nextExists + ' current ' + this.currShowing)
  },
  computed: {
    getEnvironmentsList: function () {
      return this.$store.state.environmentsList
    }
  },
  watch: {
    currShowing () {
      this.prevExists = (this.currShowing > 0)
      this.nextExists = (this.currShowing < this.getEnvironmentsList.length - 1)
      console.log('Current floor ' + this.getEnvironmentsList[this.currShowing].name)
    }
  },
  methods: {
    nextEnvironment: function () {
      console.log('Call nextEnvironment')
      if (this.nextExists) {
        this.currShowing++
        console.log('currShowing increment')
      }
    },
    prevEnvironment: function () {
      console.log('Call prevEnvironment')
      if (this.prevExists) {
        this.currShowing--
        console.log('currShowing decrement')
      }
    },
    showEnvironment: function (idx, curr) {
      return (idx === curr)
    }
  }
}
</script>

<style scoped>
    .md-icon.md-theme-default.md-icon-font {
        color: #fafafa;
        font-weight: normal;
    }   

    .slide-left, .slide-right{
        position: fixed;
        top: 50%;
        margin-top: -40px;
        margin-left: auto; 
        margin-right: auto; 
        background-color: rgba(80,80,80,0.7); 
        cursor: pointer;
        color: #fafafa;
        border-radius: 50%;
        z-index: 7;
     }

      .slide-left{
        left: 0px;
     }
    
     .slide-right{
       right: 0px;
     }
</style>


