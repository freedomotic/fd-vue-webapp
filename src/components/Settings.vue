<template>
    
       
    <div id="settings-area">
     <close-button class="color-red"/>
    
    <div id="flex-container">    
        <div class="settings-boxes">
         <info-box class='settings-box' color="ff6666" icon="dashboard" action="Plugins" :title="$t('plugins')"/>
         <info-box class='settings-box' color="eeee77" icon="extension" action="Automations" :title="$t('automations')"/>   
        </div>
        <div class="settings-boxes">
         <info-box class='settings-box' color="77dd77" icon="perm_identity" action="Users" :title="$t('users')"/>
         <info-box class='settings-box' color="ffffff" icon="settings_applications" action="System" :title="$t('system')"/>
        </div>
        <div class="settings-boxes">
         <info-box class='settings-box' color="ffbbff" icon="supervisor_account" action="Roles" :title="$t('roles')"/>
         <info-box class='settings-box' color="5291ef" icon="language" action="Languages" :title="$t('languages')"/>
        </div>
    </div>
    </div>
</template>

<script>
import InfoBox from './InfoBox.vue'
import CloseButton from './CloseButton.vue'

export default {
  components: {
    'info-box': InfoBox,
    'close-button': CloseButton
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
    .md-content,
    .md-icon.md-theme-default {
        background-color: transparent;
        color: white;
    }

    .color-red {
        background-color: red;
    }

    .md-icon.md-theme-default.md-icon-font {
        color: white;
    }

    #settings-area {
        height: 100%;
    }

    #flex-container {
        display: flex;
        align-items: center;
        flex-flow: column wrap;
        align-content: space-around;
    }

    .settings-boxes {
        flex-direction: row;
        justify-content: space-evenly;
        display: flex;
        width: 100%;
        height: 50%;
    } 

    .settings-box {
        flex-grow: 1;
        margin: 0.5em;
        width: 40%;
        height: 30%;
    }
</style>

