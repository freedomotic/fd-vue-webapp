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
         <v-ons-input input-id="UUID" v-model="UUID" placeholder="UUID" float>
         </v-ons-input>
     </div> 
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="Name">Name</label>
         <v-ons-input input-id="Name" v-model="name" placeholder="Name" float>
         </v-ons-input>
       </div> 
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="Description">Description</label> 
         <v-ons-input input-id="Description" v-model="description" placeholder="Description" float>
         </v-ons-input>
       </div>
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="Protocol">Protocol</label> 
         <v-ons-input input-id="Protocol" v-model="protocol" placeholder="Protocol" float>
         </v-ons-input>
       </div>
     </v-ons-list-item>
     <v-ons-list-item>
       <div class="center">
         <label v-if="this.$ons.platform.isIOS()" for="Address">Address</label> 
         <v-ons-input input-id="Address" v-model="address" placeholder="Address" float>
         </v-ons-input>
       </div>
     </v-ons-list-item>
     <v-ons-list-item>
      <v-ons-button modifier="large">{{$t('create_copy')}}</v-ons-button>
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
  </div> 
  <div v-else>
   <v-ons-list>
      <v-ons-list-item v-for="templateThing in getThingTemplatesList" :key="templateThing.name"
        modifier="chevron"
        tappable
        @click="addNewThing(templateThing.name)"
      >
       <div class="left">
         <img src="../../../assets/plugin-running.png" class="template-icon" alt="templateThing.name">
       </div>
        <div class="center">{{templateThing.name}}</div>
      </v-ons-list-item>
    </v-ons-list>
  </div>
  <v-ons-fab position="bottom right">
        <v-ons-icon icon="md-check"></v-ons-icon>
  </v-ons-fab>
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
        UUID: '',
        name: '',
        description: '',
        protocol: '',
        address: ''
      }
    },
    mounted () {
      this.$store.dispatch('getThingTemplatesList')
      this.UUID = this.getThingFromStore.uuid
      this.name = this.getThingFromStore.name
      this.description = this.getThingFromStore.description
      this.protocol = this.getThingFromStore.protocol
      this.address = this.getThingFromStore.address
    },
    computed: {
      getThingTemplatesList: function () {
        return this.$store.state.thingTemplatesList
      },
      getThingFromStore: function () {
        return this.$store.state.thingsList[this.index]
      }
    },
    methods: {
      deleteThing: function (thingName, thingId) {
        const self = this
        this.$ons.notification.confirm({
          title: 'Delete thing',
          message: 'Do you want to delete "' + thingName + "'?",
          buttonLabels: ['Cancel', 'Delete'],
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
      addNewThing: function (template) {
        return this.$store.dispatch('addNewThing', template)
      },
      changeBehavior: function (thingId, behaviorId, newBehaviorValue) {
        const payload = {'thingId': thingId, 'behaviorId': behaviorId, 'newBehaviorValue': newBehaviorValue}
        this.$store.dispatch('changeBehavior', payload)
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
