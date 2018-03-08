<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
      <v-ons-list-item v-for="actuator in getThingsList" 
        v-if="searchType(actuator.type)" 
        :key="actuator.uuid"
        modifier="chevron"
        @click="transition('default', actuator)"
        tappable
      >
        {{ actuator.name }}
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
      <custom-toolbar backLabel="Actuator">
        {{ actuator.name }}
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
      var match = thingType.match(/ElectricDevice/)
      return match
    },
    transition (name, item) {
      this.setOptions({
        animation: name,
        actuator: item,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            actuator: item
          }
        }
      })
    }
  }
}
</script>
