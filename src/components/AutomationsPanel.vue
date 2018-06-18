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
        
    <div>   
    <md-list class="md-double-line">
      
      <md-list-item v-for="automation in getAutomationsList" :key="automation.uuid">
        
        <span class="md-list-item-text">{{ automation.shortDescription }}</span>
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">edit</md-icon>
        </md-button>
        <md-button class="md-icon-button md-list-action" 
        @click="showDeleteAutomationDialog($event)"
        v-bind:uuid="automation.uuid"
        v-bind:name="automation.shortDescription"
        >
          <md-icon class="md-primary">delete</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
  </div>  
  <div>
        <!-- This should be replaced by an AddButton component at the right bottom corner -->
        <button @click="showDynamicComponentModal">
          Add a new automation
       </button>
  </div> 
  
  
 </div> 
</template>

<script>
import AddAutomation from './AddAutomation.vue'

export default {
  computed: {
    automationsOpen: function () {
      return this.$store.state.automationsOpen
    },
    getAutomationsList: function () {
      return this.$store.state.automationsList
    }
  },
  mounted () {
    this.$store.dispatch('getAutomationsList')
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
    showDeleteAutomationDialog (event) {
      var automationUuid = event.target.getAttribute('uuid')
      var automationName = event.target.getAttribute('name')
      this.$modal.show('dialog', {
        title: 'Delete automation',
        text: 'Do you want to delete "' + automationName + '" automation?',
        buttons: [
          {
            title: 'CANCEL',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'CONFIRM',
            default: true,
            handler: () => {
              this.$snotify.success('Automation "' + automationName + '" deleted', 'INFO', {
                timeout: 3000,
                showProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true
              })
              this.$store.dispatch('deleteAutomation', automationUuid)
              this.$modal.hide('dialog')
            }
          }
        ]
      })
    },
    showDynamicComponentModal () {
      this.$modal.show(AddAutomation, {
        text: ''
      },
        {
          name: 'addAutomationModal',
          draggable: true,
          adaptive: true,
          resizable: true,
          scrollable: true,
          clickToClose: false,
          width: '65%',
          height: 'auto'
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
        overflow-y: scroll; 
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
   
   .md-list {
    width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>
