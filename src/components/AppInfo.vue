<template>
    <div id="info-area" v-if="$q.platform.is.desktop">
     <close-button class="color-red"/>
     <div id="info-flex-container">    
        <q-card class="info-text">
            <div class="bold-title">Freedomotic Vue Dashboard 0.0.1 (Beta)</div>
        </q-card>

        <q-card class="info-text">
            <div class="bold-title">Main contributors</div>
            <div>Mauro Cicolella &lt;mcicolella@libero.it&gt;</div>
            <div>P3trur0</div>
            <a href="https://github.com/freedomotic/fd-vue-webapp/graphs/contributors" target="_blank">GitHub contributors</a>
        </q-card>

        <q-card class="info-text">
            <div class="bold-title">{{$t('freedomotic_information')}}</div>
            <div><b>Release:</b> v5.6 Commander</div>
            <div><b>License:</b> GNU GPLv2</div>
        </q-card>

        <q-card class="info-text">
            <div class="bold-title">{{$t('credits')}}</div>
            <div>Published under the the AGPL-3.0 license</div>
            <div><a href="https://github.com/freedomotic/fd-vue-webapp" target="_blank">Source code</a></div> 
            <div>Built using <a href="https://vuejs.org/" target="_blank">Vue.js</a>, <a href="https://quasar.dev/" target="_blank">Quasar Framework</a></div>
            <div>Icons by <a href="https://material.io/tools/icons/?style=baseline" target="_blank">Material Design</a></div>
        </q-card>
     </div>
    </div>
    <div v-else>
       INFO
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
    .q-card {
        background-color: transparent;
        color: white;
    }
    .color-red {
        background-color: red;
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
