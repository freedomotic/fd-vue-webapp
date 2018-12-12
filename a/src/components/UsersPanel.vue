<template>
    <div v-if="usersOpen" class="current-section">
        <md-toolbar class="md-accent">
          <md-content class="small-icon" @click="openSettings">
            <md-icon>undo</md-icon>
          </md-content>
          <md-content class="small-icon" @click="closeWindow">
            <md-icon>clear</md-icon>
          </md-content> 
          <h3 class="md-title">{{$t('users').toUpperCase()}}</h3>
        </md-toolbar>
        <grid-container>
           <div class="item" v-for="(user, index) in getUsersList" :key="user.uuid">
             <user :index="index"></user>
           </div>
        </grid-container>  
        <md-button class="md-fab md-primary md-fab-bottom-right md-fixed" >
        <md-icon>add</md-icon>
       </md-button>
    </div>    
</template>

<script>
import GridContainer from './common/GridContainer.vue'
import User from './User.vue'

export default {
  components: {
    User,
    GridContainer
  },
  computed: {
    usersOpen: function () {
      return this.$store.state.usersOpen
    },
    getUsersList: function () {
      return this.$store.state.usersList
    }
  },
  mounted () {
    this.$store.dispatch('getUsersList')
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
