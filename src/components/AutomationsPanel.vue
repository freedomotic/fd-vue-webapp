<template>
    <div v-if="automationsOpen" class="current-section">
        <md-toolbar class="md-accent">
          <md-content class="small-icon" @click="openSettings">
            <md-icon>undo</md-icon>
          </md-content>
          <md-content class="small-icon" @click="closeWindow">
            <md-icon>clear</md-icon>
          </md-content> 
          <h3 class="md-title">{{$t('automations').toUpperCase()}}</h3>
        </md-toolbar>
        <!-- This should be replaced by a AddButton component at the right bottom corner -->
        <button @click="showDynamicComponentModal">
          Add a new automation
       </button>
        
    </div> 
</template>

<script>
import AddAutomation from './AddAutomation.vue'

export default {
  computed: {
    automationsOpen: function () {
      return this.$store.state.automationsOpen
    }
  },
  components: {
    AddAutomation
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
      this.$modal.show(AddAutomation, {
        text: 'This text is passed as a property'
      },
        { draggable: true,
          adaptive: true,
          resizable: true,
          clickToClose: true,
          width: '65%',
          height: '40%'
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
        background:white;
        border-radius: 4px;
        z-index: 130;
        color: black;
        display: flex;
        align-items: center;
        flex-direction: column;
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
   
   .v--modal-overlay {
      background: red;
  }
</style>
