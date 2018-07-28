<template>
    <div v-if="rolesOpen" class="current-section">
        <md-toolbar class="md-accent">
          <md-content class="small-icon" @click="openSettings">
            <md-icon>undo</md-icon>
          </md-content>
          <md-content class="small-icon" @click="closeWindow">
            <md-icon>clear</md-icon>
          </md-content> 
          <h3 class="md-title">{{$t('roles').toUpperCase()}}</h3>
        </md-toolbar>
        <grid-container>
           <div class="item" v-for="(role, index) in getRolesList" :key="role.uuid">
             <role :index="index"></role>
           </div>
        </grid-container>  
        <md-button class="md-fab md-primary md-fab-bottom-right md-fixed" >
        <md-icon>add</md-icon>
       </md-button>
    </div>          
</template>

<script>
import GridContainer from './common/GridContainer.vue'
import Role from './Role.vue'

export default {
  components: {
    Role,
    GridContainer
  },
  computed: {
    rolesOpen: function () {
      return this.$store.state.rolesOpen
    },
    getRolesList: function () {
      return this.$store.state.rolesList
    }
  },
  mounted () {
    this.$store.dispatch('getRolesList')
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
