<template>
 <v-ons-page> 
  <div v-if="addMode === false">
   <v-ons-card>
    <div>{{automation.shortDescription}}</div>
  </v-ons-card>
  </div> 
  <div v-else>
    <v-ons-list>
      <v-ons-list-header>{{$t('select_trigger')}}</v-ons-list-header>
      <v-ons-list-item>
        <div class="center">
          <select id="trigger" v-model="selectedTrigger">
              <option v-for="trigger in getTriggersList" :value="trigger">
                  {{ trigger.name }}
              </option>
          </select>
        </div>
      </v-ons-list-item>
    </v-ons-list>
    <br><br>
    <v-ons-list>
      <v-ons-list-header>{{$t('select_one_more_commands')}}</v-ons-list-header>
      <v-ons-list-item>
        <div class="center">
          <select v-model="selectedCommands" multiple style="width: 40%">
            <option v-for="command in getCommandsList" :value="command">
              {{ command.name}}
            </option>
          </select>
        </div>
      </v-ons-list-item>
    </v-ons-list>
    <br>
    <div>Selected trigger: {{ selectedTrigger}}</div>
        <div>Selected commands: 
          <li v-for="command in selectedCommands">
             {{ command.name }}
          </li>
        </div>  
    <v-ons-button modifier="large" @click="addAutomation" :disabled="selectedTrigger === '' || selectedCommands.length == 0 ">{{$t('add_new_automation')}}</v-ons-button>
  </div>
 </v-ons-page> 
</template>

<script>
  import utils from '@/utils/utils'

  export default {
    props: {
      automation: {},
      addMode: Boolean
    },
    data () {
      return {
        selectedTrigger: {},
        selectedCommands: []
      }
    },
    computed: {
      getTriggersList: function () {
        return this.$store.state.triggersList
      },
      getCommandsList: function () {
        return this.$store.state.commandsList
      }
    },
    methods: {
      addAutomation: function () {
        var newAutomation = JSON.stringify(utils.generateAutomation(this.selectedTrigger, this.selectedCommands), null, 2)
        console.log(newAutomation)
        // this.$store.dispatch('getMarketplaceCategoryPluginsList', this.selectedCategory)
      }
    }
}
</script>
<style scoped>
  
</style>
