<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
      <v-ons-list-item v-for="sensor in getThingsList" 
        v-if="searchType(sensor.type)" 
        :key="sensor.uuid"
        modifier="chevron"
        @click="transition('default', sensor)"
        tappable
      >
        {{ sensor.name }}
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-fab position="bottom right" :style="spdStyle">
        <v-ons-icon  style="color: green;" icon="md-add_circle"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>

<script>
const transitionPage = {
  template: `
    <v-ons-page>
      <custom-toolbar backLabel="Sensors">
        {{ sensor.name }}
      </custom-toolbar>
     
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
    transition (name, item) {
      this.setOptions({
        animation: name,
        sensor: item,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            sensor: item
          }
        }
      })
    }
  }
}
</script>
