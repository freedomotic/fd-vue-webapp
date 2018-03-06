<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list-header>Automations</v-ons-list-header>
      <ons-list-item v-for="automation in getAutomationsList" :key="automation.uuid">
        <label class="center">
          {{ automation.shortDescription }}
        </label>
      </ons-list-item>
    
  </v-ons-page>
</template>

<script>
export default {
  computed: {
    getAutomationsList: function () {
      return this.$store.state.automationsList
    },
    data () {
      return {}
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
