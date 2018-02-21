<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
     <v-ons-list-header>Plugins</v-ons-list-header>
      <ons-list-item>
        <label class="center" for="switch1">
          LogViewer ({{ LogViewerSwitchOn ? 'on' : 'off' }})
        </label>
        <div class="right">
          <v-ons-switch input-id="switch1" v-model="LogViewerSwitchOn">
          </v-ons-switch>
        </div>
      </ons-list-item>
      <ons-list-item>
        <label class="center" for="switch2">
          Mailer ({{ MailerSwitchOn ? 'on' : 'off' }})
        </label>
        <div class="right">
          <v-ons-switch input-id="switch2" v-model="MailerSwitchOnswitchOn">
          </v-ons-switch>
        </div>
      </ons-list-item>
      <v-ons-fab position="bottom right" :style="spdStyle">
      <v-ons-icon icon="md-add_circle"></v-ons-icon>
    </v-ons-fab>
    
  </v-ons-page>
</template>

<script>
export default {
  data () {
    return {
      MailerSwitchOn: true,
      LogViewerSwitchOn: true
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
