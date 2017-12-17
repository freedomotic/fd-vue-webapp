<template>
    <div id="settings-area">
        <md-content class="close-button" @click="closeWindow">
            <md-icon>close</md-icon>
        </md-content>
    <div id="flex-container">    
        <div class="settings-boxes">
         <info-box color="ff6666" icon="dashboard" action="Plugins"/>
         <info-box color="eeee77" icon="settings" action="Settings"/>
        </div>
        <div class="settings-boxes">
         <info-box color="ffbbff" icon="perm_identity" action="Users"/>
         <info-box color="ffbbff" icon="supervisor_account" action="Roles"/>
        </div>
    </div>
    </div>
</template>

<script>
import InfoBox from './InfoBox.vue'

export default {
  components: {
    'info-box': InfoBox
  },
  data () {
    return {}
  },

  methods: {
    closeWindow: function () {
      this.$emit('close-settings')
    }
  }
}
</script>

<style scoped>

    .md-content {
        background-color: transparent;
        color: white;
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

    .close-button {
        background-color: red;
        border-radius: 50%;
	    width: 50px;
	    height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        color:white;
        text-align: center;
        padding: 12px 3px 0 3px;
        font-size: small;
        font-weight: bolder;
        box-shadow: 1px 1px 1px #444;
        border: 2px solid white;
    }

   
</style>
