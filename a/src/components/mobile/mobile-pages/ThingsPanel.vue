<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
      <v-ons-list-item v-for="(thing, index) in getThingsList" 
        :key="thing.uuid"
        modifier="chevron"
        @click="transition('default', thing, false, index)"
        tappable
      >
        <div class="left">{{ thing.name }}</div>
        <div class="right" v-if="thing.type.includes('ElectricDevice')">
          <img v-if="thing.behaviors[0].value == true" class="center" src="../../../assets/icons/led-green.png"/>
          <img v-else class="center" src="../../../assets/icons/led-grey.png"/>
        </div>
        <div class="right" v-if="thing.type =='EnvObject.Thermometer' || thing.type =='EnvObject.Thermostat'">
           {{thing.behaviors[0].value/thing.behaviors[0].scale}}°
</div>  
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
      <custom-toolbar :backLabel="$t('all_things')">
        {{ thing.name }}
      </custom-toolbar>
      <mobile-thing :addMode="false" :index="index"></mobile-thing>
    </v-ons-page>
    <v-ons-page v-else>
      <custom-toolbar :backLabel="$t('all_things')">
        {{$t('add_new_thing')}}
      </custom-toolbar>
      <mobile-thing :addMode="true" :index="index"></mobile-thing>
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
    transition (name, item, addMode, index) {
      this.setOptions({
        animation: name,
        thing: item,
        addMode: addMode,
        index: index,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            thing: item,
            addMode: addMode,
            index: index
          }
        }
      })
    }
  }
}
</script>
