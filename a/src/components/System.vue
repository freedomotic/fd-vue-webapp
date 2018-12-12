<template>
    <div v-if="systemOpen" class="current-section">
        <md-toolbar class="md-accent">
          <md-content class="small-icon" @click="openSettings">
            <md-icon>undo</md-icon>
          </md-content>
          <md-content class="small-icon" @click="closeWindow">
            <md-icon>clear</md-icon>
          </md-content> 
          <h3 class="md-title">{{$t('system').toUpperCase()}}</h3>
        </md-toolbar>
        <md-content class="big-container">
            <div id="action-container" @click="setAdvancedMode">
                <md-icon class="md-size-5x">developer_board</md-icon>
                <md-content v-if="advancedMode">{{$t('enable')}} {{$t('advanced_mode')}}</md-content>
                <md-content v-else>{{$t('disable')}} {{$t('advanced_mode')}}</md-content>
            </div>
        </md-content>
        <md-content class="big-container">
            <div id="action-container">
                <a href="https://goo.gl/forms/CqZZfBCHNx" target="_blank"><md-icon class="md-size-5x">bug_report</md-icon></a>
                <md-content>{{$t('report_bug')}}</md-content>
            </div>
        </md-content>
        <md-content class="big-container">
            <div id="action-container" @click="shutdownFD">
                <md-icon class="md-size-5x">exit_to_app</md-icon>
                <md-content>{{$t('shutdown')}}</md-content>
            </div>
        </md-content>
       </div>    
</template>

<script>
export default {
  computed: {
    systemOpen: function () {
      return this.$store.state.systemOpen
    },
    advancedMode: function () {
      return this.$store.state.advancedMode
    }
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
    shutdownFD: function () {
      this.$store.dispatch('shutdownFD')
    },
    setAdvancedMode: function () {
      this.$store.dispatch('setAdvancedMode')
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
</style>
