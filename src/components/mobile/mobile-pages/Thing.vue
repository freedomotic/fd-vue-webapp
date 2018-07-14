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
  </div> 
  <div v-else>
   <v-ons-list>
      <v-ons-list-item v-for="thing in getThingTemplatesList" :key="thing.name"
        modifier="chevron"
        tappable
        @click="addNewThing(thing.name)"
      >
       <div class="left">
         <img src="../../../assets/plugin-running.png" class="template-icon" alt="thing.name">
       </div>
        <div class="center">{{thing.name}}</div>
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
      thing: {},
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
        selectedSection: 'properties',
        UUID: this.getThingFromStore.uuid,
        name: this.getThingFromStore.name,
        description: this.getThingFromStore.description,
        protocol: this.getThingFromStore.protocol,
        address: this.getThingFromStore.address
      }
    },
    mounted () {
      this.$store.dispatch('getThingTemplatesList')
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
