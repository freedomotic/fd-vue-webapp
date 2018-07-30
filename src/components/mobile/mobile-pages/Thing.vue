<template>
 <v-ons-page> 
  <div v-if="addMode === false">
   <v-ons-card>
    <v-ons-list>
      <v-ons-list-item>
        <div class="center">
          <v-ons-select style="width: 40%"
            v-model="selectedSection"
          >
            <option v-for="section in sections" :value="section.value">
              {{ $t(section.text) }}
            </option>
          </v-ons-select>
        </div>
      </v-ons-list-item>
     </v-ons-list>
    </v-ons-card>
   <v-ons-card v-if="selectedSection ==='properties'">
    <v-ons-list>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="UUID">UUID</label>
         <v-ons-input input-id="UUID" v-model="UUID" size="50" placeholder="UUID" disabled float>
         </v-ons-input>
     </div> 
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="Name">{{$t('name')}}</label>
         <v-ons-input input-id="Name" v-model="name" size="50" :placeholder="$t('name')" float>
         </v-ons-input>
       </div> 
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="Description">{{$t('description')}}</label> 
         <v-ons-input input-id="Description" v-model="description" size="50" :placeholder="$t('description')" float>
         </v-ons-input>
       </div>
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="Protocol">{{$t('protocol')}}</label> 
         <v-ons-input input-id="Protocol" v-model="protocol" :placeholder="$t('protocol')" float>
         </v-ons-input>
       </div>
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="Address">{{$t('address')}}</label> 
         <v-ons-input input-id="Address" v-model="address" size="25" :placeholder="$t('address')" float>
         </v-ons-input>
       </div>
     </v-ons-list-item>
     <v-ons-list-item>
      <v-ons-button @click="cloneThing(getThingFromStore.name, getThingFromStore.uuid)" modifier="large">{{$t('create_copy')}}</v-ons-button>
     </v-ons-list-item>
     <v-ons-list-item>
      <v-ons-button @click="deleteThing(getThingFromStore.name, getThingFromStore.uuid)" modifier="large">{{$t('delete_thing')}}</v-ons-button>   
     </v-ons-list-item>
    </v-ons-list>
   </v-ons-card>
   <v-ons-card v-if="selectedSection ==='control_panel'">
     <v-ons-list>
      <v-ons-list-item v-for="behavior in getThingFromStore.behaviors" v-if="behavior.readOnly == false" :key="behavior.name">
        <div class="left">{{behavior.name}} ({{behavior.value}})</div>
        <div class="right" v-if="behavior['@class'] == 'com.freedomotic.model.object.RangedIntBehavior'">
           <v-ons-range v-model="behavior.value"></v-ons-range>
        </div>
        <div class="right" v-if="behavior['@class'] == 'com.freedomotic.model.object.BooleanBehavior'">
          <v-ons-switch v-model="behavior.value" @change="changeBehavior(getThingFromStore.uuid, behavior.name, !behavior.value)"></v-ons-switch>
        </div>

      </v-ons-list-item>
    </v-ons-list>
   </v-ons-card>
   <v-ons-card v-if="selectedSection ==='appearance'">
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="positionX">{{$t('position_x')}}</label>
         <v-ons-input input-id="PositionX" v-model="positionX" :placeholder="$t('position_x')" float>
         </v-ons-input>
       </div> 
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="positionY">{{$t('position_y')}}</label>
         <v-ons-input input-id="PositionY" v-model="positionY" :placeholder="$t('position_y')" float>
         </v-ons-input>
       </div> 
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="rotation">{{$t('rotation')}}</label>
         <v-ons-input input-id="rotation" v-model="rotation" :placeholder="$t('rotation')" float>
         </v-ons-input>
       </div> 
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="width">{{$t('width')}}</label>
         <v-ons-input input-id="width" v-model="width" :placeholder="$t('width')" float>
         </v-ons-input>
       </div> 
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="height">{{$t('height')}}</label>
         <v-ons-input input-id="height" v-model="height" :placeholder="$t('height')" float>
         </v-ons-input>
       </div> 
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="environment">{{$t('environment')}}</label>
         <v-ons-select v-model="environment" name="environment">
            <option v-for="env in getEnvironmentsList" :value="env.uuid">
              {{ env.name }}
            </option>
          </v-ons-select>
       </div> 
     </v-ons-list-item>
   </v-ons-card>
   <v-ons-card v-if="selectedSection ==='data_source'">
     <v-ons-list>
      <v-ons-list-item v-for="(value, key) in getThingFromStore.triggers.propertyList" :key="key">
        <div class="left">{{value}}</div>
      </v-ons-list-item>
    </v-ons-list>
   </v-ons-card>
   <v-ons-card v-if="selectedSection ==='actions'">
     <v-ons-list>
      <v-ons-list-item v-for="(value, key) in getThingFromStore.actions.propertyList" :key="key">
        <div class="left">{{key}}</div>
      </v-ons-list-item>
    </v-ons-list>
   </v-ons-card>
   <v-ons-fab position="bottom right">
        <v-ons-icon icon="md-check"></v-ons-icon>
   </v-ons-fab>
  </div> 
  <div v-else>
   <v-ons-list>
      <v-ons-list-header>{{$t('click_thing_template')}}</v-ons-list-header>
      <v-ons-list-item v-for="(templateThing, index) in getThingTemplatesList" :key="templateThing.name"
        modifier="chevron"
        tappable
        @click="addNewThing(templateThing.name)"
      >
       <div class="left">
         {{getThingIcon(templateThing.representation[0].icon, index)}}
         <img class="template-icon" :src="images[index]">  
       </div>
        <div class="center">{{templateThing.name}}</div>
      </v-ons-list-item>
    </v-ons-list>
  </div>
 </v-ons-page> 
</template>

<script>
  export default {
    props: {
      addMode: Boolean,
      index: ''
    },
    data () {
      return {
        sections: [
          { text: 'properties', value: 'properties' },
          { text: 'appearance', value: 'appearance' },
          { text: 'data_source', value: 'data_source' },
          { text: 'actions', value: 'actions' },
          { text: 'control_panel', value: 'control_panel' },
          { text: 'automations', value: 'automations' }
        ],
        selectedSection: 'control_panel',
        images: [],
        UUID: '',
        name: '',
        description: '',
        protocol: '',
        address: ''
      }
    },
    mounted () {
      this.$store.dispatch('getThingTemplatesList')
      // Properties section
      this.UUID = this.getThingFromStore.uuid
      this.name = this.getThingFromStore.name
      this.description = this.getThingFromStore.description
      this.protocol = this.getThingFromStore.protocol
      this.address = this.getThingFromStore.address
      // Appearance section
      this.positionX = this.getThingFromStore.representation[this.getThingFromStore.currentRepresentation].offset.x
      this.positionY = this.getThingFromStore.representation[this.getThingFromStore.currentRepresentation].offset.y
      this.rotation = this.getThingFromStore.representation[this.getThingFromStore.currentRepresentation].rotation
      this.width = this.getThingFromStore.representation[this.getThingFromStore.currentRepresentation].scaleX
      this.height = this.getThingFromStore.representation[this.getThingFromStore.currentRepresentation].scaleY
      this.environment = this.getThingFromStore.envUUID
    },
    computed: {
      getThingTemplatesList: function () {
        return this.$store.state.thingTemplatesList
      },
      getThingFromStore: function () {
        return this.$store.state.thingsList[this.index]
      },
      getEnvironmentsList: function () {
        return this.$store.state.environmentsList
      },
      getHardwareTriggersList: function () {
        return this.$store.state.triggersList.filter(function (item) {
          return item.hardwareLevel === true
        })
      }
    },
    methods: {
      deleteThing: function (thingName, thingId) {
        const self = this
        this.$ons.notification.confirm({
          title: this.$t('delete_thing'),
          message: 'Do you want to delete "' + thingName + '"?',
          buttonLabels: [this.$t('cancel'), this.$t('delete')],
          callback: function (idx) {
            switch (idx) {
              case 0:
                break
              case 1:
                self.$store.dispatch('deleteThing', thingId)
                break
            }
          }
        })
      },
      cloneThing: function (thingName, thingId) {
        const self = this
        this.$ons.notification.confirm({
          title: this.$t('create_copy'),
          message: this.$t('create_copy_message') + ' "' + thingName + '"?',
          buttonLabels: [this.$t('cancel'), this.$t('create_copy')],
          callback: function (idx) {
            switch (idx) {
              case 0:
                break
              case 1:
                self.$store.dispatch('cloneThing', thingId)
                break
            }
          }
        })
      },
      addNewThing: function (template) {
        const self = this
        this.$ons.notification.confirm({
          title: this.$t('add_new_thing'),
          message: this.$t('add_new_thing_message') + ' "' + template + '"?',
          buttonLabels: [this.$t('cancel'), this.$t('add')],
          callback: function (idx) {
            switch (idx) {
              case 0:
                break
              case 1:
                self.$store.dispatch('addNewThing', template)
                break
            }
          }
        })
      },
      changeBehavior: function (thingId, behaviorId, newBehaviorValue) {
        const payload = {'thingId': thingId, 'behaviorId': behaviorId, 'newBehaviorValue': newBehaviorValue}
        this.$store.dispatch('changeBehavior', payload)
      },
      getThingIcon: function (thingIcon, index) {
        this.$store.dispatch('getResource', thingIcon).then((data) => {
          this.images[index] = data
        }).catch(() => {
        })
      }
    }
}
</script>
<style scoped>
  .template-icon {
      width: 30px;
      margin: 1%;
   } 
</style>
