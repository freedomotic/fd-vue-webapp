<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
      <v-ons-list-item v-for="actuator in getThingsList" 
        v-if="searchType(actuator.type)" 
        :key="actuator.uuid"
        modifier="chevron"
        @click="transition('default', actuator, false)"
        tappable
      >
        {{ actuator.name }}
      </v-ons-list-item>
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
      <custom-toolbar backLabel="Actuators">
        {{ actuator.name }}
      </custom-toolbar>
      <mobile-thing :thing="actuator" :addMode="false"></mobile-thing>
    </v-ons-page>
    <v-ons-page v-else>
      <custom-toolbar backLabel="All Things">
        {{$t('add_new_thing')}}
      </custom-toolbar>
      <mobile-thing :thing="actuator" :addMode="true"></mobile-thing>
    </v-ons-page>
    `
}

export default {
  props: ['pageStack', 'setOptions'],

  data () {
    return {}
  },

  computed: {
    getThingsList: function () {
      return this.$store.state.thingsList
    }
  },

  methods: {
    searchType: function (thingType) {
      var match = thingType.match(/ElectricDevice/)
      return match
    },
    transition (name, item, addMode) {
      this.setOptions({
        animation: name,
        actuator: item,
        addMode: addMode,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            actuator: item,
            addMode: addMode
          }
        }
      })
    }
  }
}
</script>
