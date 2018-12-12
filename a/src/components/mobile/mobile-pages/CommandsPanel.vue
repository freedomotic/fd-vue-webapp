<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
     <ons-list-item v-for="command in getCommandsList" :key="command.uuid" 
      modifier="chevron" tappable
      @click="transition('default', command, false)"
     >
        <label class="center">
          {{ command.name }}
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
      <custom-toolbar :backLabel="$t('commands')">
        {{ command.name }}
      </custom-toolbar>
      <mobile-command :command="command" :addMode="addMode"></mobile-command>
    </v-ons-page>
    <v-ons-page v-else>
      <custom-toolbar :backLabel="$t('commands')">
        {{$t('add_new_command')}}
      </custom-toolbar>
      <mobile-command :command="command" :addMode="addMode"></mobile-command>
    </v-ons-page>
    `
}

export default {
  props: ['pageStack', 'setOptions'],
  data () {
    return {}
  },
  computed: {
    getCommandsList: function () {
      return this.$store.state.commandsList
    }
  },
  mounted () {
    this.$store.dispatch('getCommandsList')
  },
  methods: {
    transition (name, item, addMode) {
      this.setOptions({
        animation: name,
        command: item,
        addMode: addMode,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            command: item,
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
