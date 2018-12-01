<template>
  <div>
    <md-toolbar>
       <md-content class="small-icon" @click="$emit('close')">
            <md-icon>clear</md-icon>
       </md-content> 
          <h4 class="md-title">{{thing.name}}</h4>
    </md-toolbar>
    <div>
     <form>    
      <md-tabs> 
       <md-tab :md-label="$t('properties')">
        <md-field>
            <label>{{$t('uuid')}}</label>
            <md-input v-model="uuid" placeholder="thing.uuid" readonly></md-input>
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
          <div>{{$t('protocol')}}</div>
          <div><select v-model="protocol" name="protocol" id="protocol">
            <option v-for="prot in getAvailableProtocols" :value="prot" :key="prot">{{prot}}</option>
          </select></div>
        </md-field>
        <md-field>
            <label>{{$t('address')}}</label>
            <md-input v-model="phisicalAddress"></md-input>
        </md-field>
        <md-field>
            <label>{{$t('tags')}}</label>
            <md-input v-model="tags"></md-input>
        </md-field>
        <div id="properties-tab-buttons">
           <md-button id="create-copy-button" class="md-raised"
           @click="showCloneThingDialog"
           >{{$t('create_copy')}}</md-button>
           <md-button id="delete-thing-button" class="md-raised"
           @click="showDeleteThingDialog"
           >{{$t('delete_thing')}}</md-button>
        </div>
       </md-tab>
       <md-tab :md-label="$t('appearance')">
        <md-field>
         <label>{{$t('position_x')}}</label>
         <md-input v-model="positionX" type="number"></md-input>
        </md-field>
        <md-field>
         <label>{{$t('position_y')}}</label>
         <md-input v-model="positionY" type="number"></md-input>
        </md-field>
        <md-field>
         <label>{{$t('rotation')}}</label>
         <md-input v-model="rotation" type="number"></md-input>
        </md-field>
        <md-field>
         <label>{{$t('width')}}</label>
         <md-input v-model="width" type="number" disabled></md-input>
        </md-field>
        <md-field>
         <label>{{$t('height')}}</label>
         <md-input v-model="height" type="number" disabled></md-input>
        </md-field>
        <md-field>
          <label for="font">{{$t('environment')}}</label>
          <md-select v-model="environment" name="environment" id="environment">
            <md-option v-for="env in getEnvironmentsList" :value="env.uuid" :key="env.uuid">{{env.name}}</md-option>
          </md-select>
        </md-field>
       </md-tab>
       <md-tab :md-label="$t('data_source')">
        <div v-for="trigger in thing.triggers.propertyList" :key="trigger.uuid">
           {{trigger}}
        <span>
         <select>
            <option v-for="trg in getHardwareTriggersList" :key="trg.name">
              {{ trg.name}}
            </option>
         </select> 
        </span>
        </div>
       </md-tab>
       <md-tab :md-label="$t('actions')">
        <div v-for="(value, key) in thing.actions.propertyList" :key="key">
           {{key}}
        </div>
       </md-tab>
       <md-tab :md-label="$t('control_panel')">
          <md-list>
            <md-list-item v-for="behavior in thing.behaviors" v-if="behavior.readOnly == false" :key="behavior.name">
              <span class="md-list-item-text">{{behavior.name}} ({{behavior.value}})</span>
             
              <span class="md-list-item-text" v-if="behavior['@class'] == 'com.freedomotic.model.object.BooleanBehavior'">
                <md-switch v-model="behavior.value" @change="changeBehavior(thing.uuid, behavior.name, !!behavior.value)"></md-switch>
              </span>
            </md-list-item>
          </md-list>
        </md-tab>
       </md-tabs>
     </form> 
    </div>
    <md-toolbar class="md-dense md-toolbar-section-end" md-elevation="1">
       <md-button class="md-primary" @click="updateThing">{{$t('update')}}</md-button>
    </md-toolbar>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component'
import { mapGetters } from 'vuex'

export default {
  name: 'ThingsEditor',
  props: [ 'thing' ],
  components: {
    vueSlider
  },
  computed: {
    ...mapGetters({
      getAvailableProtocols: 'getAvailableProtocols'
    }),
    getEnvironmentsList: function () {
      return this.$store.state.environmentsList
    },
    getHardwareTriggersList: function () {
      return this.$store.state.triggersList.filter(function (item) {
        return item.hardwareLevel === true
      })
    }
  },
  created () {
    this.uuid = this.thing.uuid
    this.name = this.thing.name
    this.description = this.thing.description
    this.protocol = this.thing.protocol
    this.phisicalAddress = this.thing.phisicalAddress
    this.tags = this.thing.tags
    this.positionX = this.thing.representation[this.thing.currentRepresentation].offset.x
    this.positionY = this.thing.representation[this.thing.currentRepresentation].offset.y
    this.rotation = this.thing.representation[this.thing.currentRepresentation].rotation
    this.width = this.thing.representation[this.thing.currentRepresentation].scaleX
    this.height = this.thing.representation[this.thing.currentRepresentation].scaleY
    this.environment = this.thing.envUUID
  },
  data () {
    return {
      uuid: '',
      name: '',
      description: '',
      protocol: '',
      phisicalAddress: '',
      tags: [],
      positionX: '',
      positionY: '',
      rotation: '',
      width: '',
      height: '',
      environment: ''
    }
  },
  methods: {
    updateThing () {
      // retrieve data from Properties tab
      this.thing.name = this.name
      this.thing.description = this.description
      this.thing.protocol = this.protocol
      this.thing.phisicalAddress = this.phisicalAddress
      this.thing.tags = this.tags
      // retrieve data from Appearance tab
      this.thing.envUUID = this.environment
      // call API store action
      this.$store.dispatch('updateThing', this.thing.uuid, this.thing)
      // DEBUG
      alert(JSON.stringify(this.thing, null, 2))
      this.$emit('close')
    },
    cloneThing () {
      this.$store.dispatch('cloneThing', this.thing.uuid)
    },
    changeBehavior: function (thingId, behaviorId, newBehaviorValue) {
      const payload = {'thingId': thingId, 'behaviorId': behaviorId, 'newBehaviorValue': newBehaviorValue}
      this.$store.dispatch('changeBehavior', payload)
    },
    showDeleteThingDialog () {
      this.$modal.show('dialog', {
        title: this.$t('delete_thing'),
        text: this.$t('delete_message') + ' "' + this.thing.name + '"?',
        buttons: [
          {
            title: this.$t('cancel'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: this.$t('delete'),
            default: true,
            handler: () => {
              this.$snotify.success('Thing "' + this.thing.name + '" deleted', 'INFO', {
                timeout: 3000,
                showProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true
              })
              this.$store.dispatch('deleteThing', this.thing.uuid)
              this.$modal.hide('dialog')
              this.$emit('close')
            }
          }
        ]
      })
    },
    showCloneThingDialog () {
      this.$modal.show('dialog', {
        title: this.$t('create_copy'),
        text: this.$t('create_copy_message') + ' "' + this.thing.name + '"?',
        buttons: [
          {
            title: this.$t('cancel'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: this.$t('create_copy'),
            default: true,
            handler: () => {
              this.$snotify.success('Thing "' + this.thing.name + '" duplicated', 'INFO', {
                timeout: 3000,
                showProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true
              })
              this.$store.dispatch('cloneThing', this.thing.uuid)
              this.$modal.hide('dialog')
              this.$emit('close')
            }
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
.md-list {
  width: 450px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, .12);
}

</style>
