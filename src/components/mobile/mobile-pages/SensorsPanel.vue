<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
      <v-ons-list-item v-for="sensor in getThingsList" 
        v-if="searchType(sensor.type)" 
        :key="sensor.uuid"
        modifier="chevron"
        @click="transition('default', sensor, false)"
        tappable
      >
        {{ sensor.name }}
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
      <custom-toolbar backLabel="Sensors">
        {{ sensor.name }}
      </custom-toolbar>
      <mobile-thing :thing="sensor" :addMode="false"></mobile-thing>
    </v-ons-page>
    <v-ons-page v-else>
      <custom-toolbar backLabel="All Things">
        {{$t('add_new_thing')}}
      </custom-toolbar>
      <mobile-thing :thing="sensor" :addMode="true"></mobile-thing>
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
      var match = thingType.match(/GenericSensor/)
      return match
    },
    transition (name, item, addMode) {
      this.setOptions({
        animation: name,
        sensor: item,
        addMode: addMode,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            sensor: item,
            addMode: addMode
          }
        }
      })
    }
  }
}
</script>
