<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
     <ons-list-item v-for="trigger in getTriggersList" :key="trigger.uuid" 
      modifier="chevron" tappable
      @click="transition('default', trigger, false)"
     >
        <label class="center">
          {{ trigger.name }}
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
      <custom-toolbar :backLabel="$t('triggers')">
        {{ trigger.name }}
      </custom-toolbar>
      <mobile-trigger :trigger="trigger" :addMode="addMode"></mobile-trigger>
    </v-ons-page>
    <v-ons-page v-else>
      <custom-toolbar :backLabel="$t('triggers')">
        {{$t('add_new_trigger')}}
      </custom-toolbar>
      <mobile-trigger :trigger="trigger" :addMode="addMode"></mobile-trigger>
    </v-ons-page>
    `
}

export default {
  props: ['pageStack', 'setOptions'],
  data () {
    return {}
  },
  computed: {
    getTriggersList: function () {
      return this.$store.state.triggersList
    }
  },
  mounted () {
    this.$store.dispatch('getTriggersList')
  },
  methods: {
    transition (name, item, addMode) {
      this.setOptions({
        animation: name,
        trigger: item,
        addMode: addMode,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            trigger: item,
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
