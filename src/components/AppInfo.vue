<template>
    <div id="info-area">
        <md-content class="close-button" @click="closeWindow">
            <md-icon>close</md-icon>
        </md-content>
    <div id="info-flex-container">    
        <md-content class="info-text">
            <div class="bold-title">Freedomotic Vue Dashboard 0.0.1</div>
        </md-content>

        <md-content class="info-text">
            <div class="bold-title">Main contributors</div>
            <div>M. Cicolella</div>
            <div>P3trur0</div>
            <a href="https://github.com/freedomotic/fd-vue-webapp/graphs/contributors" target="_blank">GitHub contributors</a>
        </md-content>

        <md-content class="info-text">
            <div class="bold-title">Connection parameters</div>
        </md-content>

        <md-content class="info-text">
            <div class="bold-title">Freedomotic Information</div>
        </md-content>

        <md-content class="info-text">
            <div class="bold-title">Credits</div>
        </md-content>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  methods: {
    closeWindow: function () {
      this.$emit('close-info')
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

    #info-area {
        width: 100%;
        height: 100%;
        color: white;
    }

    #info-flex-container {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        flex-direction: column;
        margin: auto;
    }

    .info-text {
        justify-content: space-around;
        width: inherit;
        height: inherit;
        display: flex;
        margin: auto;
        flex-direction: column;
        text-align: center;
    }

    .bold-title {
        font-weight: bolder; 
        font-size: larger;
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
