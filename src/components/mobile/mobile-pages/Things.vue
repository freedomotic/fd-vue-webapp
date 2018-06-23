<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
      <v-ons-list-item v-for="thing in getThingsList" 
        :key="thing.uuid"
        modifier="chevron"
        @click="transition('default', thing, false)"
        tappable
      >
        {{ thing.name }}
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
    <v-ons-page v-if="addThingMode === false">
      <custom-toolbar backLabel="All Things">
        {{ thing.name }}
      <mobile-thing :thing="thing" :addMode="false"></mobile-thing>
      </custom-toolbar>
    </v-ons-page>
    <v-ons-page v-else>
      <custom-toolbar backLabel="All Things">
        Add new thing
      </custom-toolbar>
      <mobile-thing :thing="thing" :addMode="true"></mobile-thing>
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
    transition (name, item, addThingMode) {
      this.setOptions({
        animation: name,
        thing: item,
        addThingMode: addThingMode,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            thing: item,
            addThingMode: addThingMode
          }
        }
      })
      console.log(this.name)
    }
  }
}
</script>
