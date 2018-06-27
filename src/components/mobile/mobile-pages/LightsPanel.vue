<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
      <v-ons-list-item v-for="light in getThingsList" 
        v-if="searchType(light.type)" 
        :key="light.uuid"
        modifier="chevron"
        @click="transition('default', light)"
        tappable
      >
        {{ light.name }}
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-fab position="bottom right">
        <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>

<script>
const transitionPage = {
  template: `
    <v-ons-page>
      <custom-toolbar backLabel="Lights">
        {{ light.name }}
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
      var match = thingType.match(/Light/)
      return match
    },
    transition (name, item) {
      this.setOptions({
        animation: name,
        light: item,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            light: item
          }
        }
      })
    }
  }
}
</script>
