<template>
  <div>
   <md-toolbar class="md-accent">
       <md-content class="small-icon" @click="$emit('close')">
            <md-icon>clear</md-icon>
       </md-content> 
          <h4 class="md-title">{{thing.name}}</h4>
    </md-toolbar>
    <div>
     <form>    
      <vue-tabs active-tab-color="#8bae2d" 
            active-text-color="#ededed"
            type="pills"
            :start-index="1"
            direction="vertical"
      >
       <v-tab :title="$t('properties')">
        <md-field>
            <label>{{$t('uuid')}}</label>
            <md-input v-model="uuid" readonly></md-input>
        </md-field>
        <md-field>
            <label>{{$t('name')}}</label>
            <md-input required v-model="name"></md-input>
        </md-field>
        <md-field>
            <label>{{$t('description')}}</label>
            <md-input v-model="description"></md-input>
        </md-field>
        <md-field>
            <label>{{$t('protocol')}}</label>
            <md-input v-model="protocol"></md-input>
        </md-field>
        <md-field>
            <label>{{$t('address')}}</label>
            <md-input v-model="address"></md-input>
        </md-field>
        <md-field>
            <label>{{$t('tags')}}</label>
            <md-input v-model="tags"></md-input>
        </md-field>
        <div id="properties-tab-buttons">
           <md-button id="create-copy-button" class="md-raised">{{$t('create_copy')}}</md-button>
           <md-button id="delete-thing-button" class="md-raised">{{$t('delete_thing')}}</md-button>
        </div>
       </v-tab>
      <v-tab :title="$t('appearance')">
        Second tab content
       </v-tab>
       <v-tab :title="$t('control_panel')">
          <div v-for="behavior in thing.behaviors">
            <span>{{behavior.name}}</span>
            <span v-if="behavior['@class'] == 'com.freedomotic.model.object.RangedIntBehavior'">add slider</span>
            <span v-if="behavior['@class'] == 'com.freedomotic.model.object.BooleanBehavior'">add switch</span>
          </div> 
       </v-tab>
       <v-tab :title="$t('automations')">
        Third tab content
       </v-tab>
      </vue-tabs>
     </form> 
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
  created () {
    this.uuid = this.thing.uuid
    this.name = this.thing.name
    this.description = this.thing.description
    this.protocol = this.thing.protocol
    this.address = this.thing.physicalAddress
    this.tags = this.thing.tags
  },
  data () {
    return {
      uuid: '',
      name: '',
      description: '',
      protocol: '',
      address: '',
      tags: []
    }
  },
  methods: {}
}
</script>

<style scoped>
  
</style>
