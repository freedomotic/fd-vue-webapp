<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
      <v-ons-list-item v-for="(sensor, index) in getThingsList" 
        v-if="searchType(sensor.type)" 
        :key="sensor.uuid"
        modifier="chevron"
        @click="transition('default', sensor, false, index)"
        tappable
      >
        {{ sensor.name }}
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-fab position="bottom right" @click="transition('default', null, true, 0)">
        <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>

<script>
const transitionPage = {
  template: `
    <v-ons-page v-if="addMode === false">
      <custom-toolbar :backLabel="$t('sensors')">
        {{ sensor.name }}
      </custom-toolbar>
      <mobile-thing :thing="sensor" :addMode="false" :index="index"></mobile-thing>
    </v-ons-page>
    <v-ons-page v-else>
      <custom-toolbar :backLabel="$t('all_things')">
        {{$t('add_new_thing')}}
      </custom-toolbar>
      <mobile-thing :thing="sensor" :addMode="true" :index="index"></mobile-thing>
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
    transition (name, item, addMode, index) {
      this.setOptions({
        animation: name,
        sensor: item,
        addMode: addMode,
        index: index,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            sensor: item,
            addMode: addMode,
            index: index
          }
        }
      })
    }
  }
}
</script>
