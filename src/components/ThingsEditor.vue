<template>
  <div>
   <md-toolbar class="md-accent">
       <md-content class="small-icon" @click="$emit('close')">
            <md-icon>clear</md-icon>
       </md-content> 
          <h4 class="md-title">{{thing.name}}</h4>
    </md-toolbar>
    <div>
      <vue-tabs active-tab-color="#e74c3c" 
            active-text-color="white"
            type="pills"
            :start-index="1"
            direction="vertical"
      >
       <v-tab title="Properties" icon="ti-user">
        <div>UUID: {{thing.uuid}}</div>
        <div>Name: {{thing.name}}</div>
        <div>Description: {{thing.description}}</div>
        <div>Protocol: {{thing.protocol}}</div>
        <div>Address: {{thing.phisicalAddress}}</div>
        <div>Tags: {{thing.tags}}</div>
       </v-tab>
      <v-tab title="Appearance" icon="ti-settings">
        Second tab content
       </v-tab>
       <v-tab title="Control panel" icon="ti-check">
        Third tab content
       </v-tab>
       <v-tab title="Automations" icon="ti-check">
        Third tab content
       </v-tab>
      </vue-tabs>
     </div>  
  </div>
</template>

<script>
import {VueTabs, VTab} from 'vue-nav-tabs'

export default {
  name: 'ThingsEditor',
  props: [ 'thing' ],
  components: {
    VueTabs,
    VTab
  },
  computed: {},
  data: () => ({}),
  methods: {}
}
</script>

<style scoped>
  
</style>
