<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
     <ons-list-item v-for="automation in getAutomationsList" :key="automation.uuid" 
      modifier="chevron" tappable
      @click="transition('default', automation, false)"
     >
        <label class="center">
          {{ automation.shortDescription }}
        </label>
      </ons-list-item>
    </v-ons-list>
    <v-ons-fab position="bottom right" @click="transition('default', null, true)">
        <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab>    
  </v-ons-page>
</template>

<script>
const transitionPage = {
  template: `
    <v-ons-page v-if="addMode === false">
      <custom-toolbar :backLabel="$t('automations')">
        {{ automation.shortDescription }}
      </custom-toolbar>
      <mobile-automation :automation="automation" :addMode="addMode"></mobile-automation>
    </v-ons-page>
    <v-ons-page v-else>
      <custom-toolbar :backLabel="$t('automations')">
        {{$t('add_new_automation')}}
      </custom-toolbar>
      <mobile-automation :automation="automation" :addMode="addMode"></mobile-automation>
    </v-ons-page>
    `
}

export default {
  props: ['pageStack', 'setOptions'],
  data () {
    return {}
  },
  computed: {
    getAutomationsList: function () {
      return this.$store.state.automationsList
    }
  },
  mounted () {
    this.$store.dispatch('getAutomationsList')
    this.$store.dispatch('getTriggersList')
    this.$store.dispatch('getCommandsList')
  },
  methods: {
    transition (name, item, addMode) {
      this.setOptions({
        animation: name,
        automation: item,
        addMode: addMode,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            automation: item,
            addMode: addMode
          }
        }
      })
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
