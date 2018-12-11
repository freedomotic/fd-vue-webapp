<template>
    <div id="info-area">
     <close-button class="color-red"/>
     <div id="info-flex-container">    
        <md-content class="info-text">
            <div class="bold-title">Freedomotic Vue Dashboard 0.0.1 (Beta)</div>
        </md-content>

        <md-content class="info-text">
            <div class="bold-title">Main contributors</div>
            <div>Mauro Cicolella &lt;mcicolella@libero.it&gt;</div>
            <div>P3trur0</div>
            <a href="https://github.com/freedomotic/fd-vue-webapp/graphs/contributors" target="_blank">GitHub contributors</a>
        </md-content>

        <md-content class="info-text">
            <div class="bold-title">{{$t('freedomotic_information')}}</div>
            <div><b>Release:</b> v5.6 Commander</div>
            <div><b>Author:</b> Freedomotic Team</div>
            <div><b>License:</b> GNU GPLv2</div>
        </md-content>

        <md-content class="info-text">
            <div class="bold-title">{{$t('credits')}}</div>
            <div>Published under the the AGPL-3.0 license</div>
            <div><a href="https://github.com/freedomotic/fd-vue-webapp" target="_blank">Source code</a></div> 
            <div>Built using <a href="https://vuejs.org/" target="_blank">Vue.js</a>, <a href="https://vuematerial.io/" target="_blank">Vue Material</a></div>
            <div>Icons by <a href="https://material.io/tools/icons/?style=baseline" target="_blank">Material Design</a></div>
        </md-content>
     </div>
    </div>
</template>

<script>
import CloseButton from './CloseButton.vue'

export default {
  components: {
    'close-button': CloseButton
  },
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('getSystemInfo')
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
</style>
