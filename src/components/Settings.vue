<template>
    <div id="settings-area">
    <close-button class="color-red"/>
    <div id="flex-container">    
        <div class="settings-boxes">
         <info-box color="ff6666" icon="dashboard" action="Plugins" :title="$t('plugins')"/>
         <info-box color="eeee77" icon="extension" action="Automations" :title="$t('automations')"/>   
         <info-box color="ffffff" icon="settings_applications" action="System" :title="$t('system')"/>
        </div>
        <div class="settings-boxes">
         <info-box color="77dd77" icon="perm_identity" action="Users" :title="$t('users')"/>
         <info-box color="ffbbff" icon="supervisor_account" action="Roles" :title="$t('roles')"/>
         <info-box color="5291ef" icon="language" action="Languages" :title="$t('languages')"/>
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
        width: 100%;
        height: 100%;
    }

    #flex-container {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: flex-start;
    }

    .settings-boxes {
        flex-direction: column;
        justify-content: space-around;
        width: inherit;
        height: inherit;
        display: flex;
    } 
</style>

