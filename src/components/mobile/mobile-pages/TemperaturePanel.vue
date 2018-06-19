<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
      <v-ons-list-item v-for="temperature in getThingsList" 
        v-if="searchType(temperature.type)" 
        :key="temperature.uuid"
        modifier="chevron"
        @click="transition('default', temperature)"
        tappable
      >
        {{ temperature.name }}
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-fab position="bottom right">
        <v-ons-icon  style="color: green;" icon="md-add_circle"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>

<script>
const transitionPage = {
  template: `
    <v-ons-page>
      <custom-toolbar backLabel="Temperature">
        {{ temperature.name }}
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
      var match = thingType.match(/Thermometer|Thermostat/)
      return match
    },
    transition (name, item) {
      this.setOptions({
        animation: name,
        temperature: item,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            temperature: item
          }
        }
      })
    }
  }
}
</script>
