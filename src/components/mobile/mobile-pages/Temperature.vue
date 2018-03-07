<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
      <ons-list-item v-for="temperature in getThingsList" v-if="searchType(temperature.type)" :key="temperature.uuid" modifier="chevron" tappable>
        <label class="center">
          {{ temperature.name }}
        </label>
      </ons-list-item>
    
  </v-ons-page>
</template>

<script>
export default {
  computed: {
    getThingsList: function () {
      return this.$store.state.thingsList
    },
    data () {
      return {}
    }
  },
  methods: {
    searchType: function (thingType) {
      var match = thingType.match(/Thermometer|Thermostat/)
      return match
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
