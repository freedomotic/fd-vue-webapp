<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
     <v-ons-list-header>Plugins</v-ons-list-header>
      <ons-list-item v-for="plugin in getPluginsList" :key="plugin.uuid">
        <label class="center">
          {{ plugin.pluginName }}
        </label>
        
      </ons-list-item>
     
     
      <v-ons-fab position="bottom right" :style="spdStyle">
      <v-ons-icon  style="color: green;" icon="md-add_circle"></v-ons-icon>
    </v-ons-fab>
    
  </v-ons-page>
</template>

<script>
export default {
  computed: {
    getPluginsList: function () {
      return this.$store.state.pluginsList
    },
    data () {
      return {
        MailerSwitchOn: true,
        LogViewerSwitchOn: true
      }
    }
  }
}
</script>

<style scoped>
  .right-icon {
    margin-left: 10px;
  }

  .right-label {
    color: #666;
  }
</style>
