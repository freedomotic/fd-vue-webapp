<template>
  <div>
    <md-toolbar class="md-accent">
       <md-content class="small-icon" @click="$emit('close')">
            <md-icon>clear</md-icon>
       </md-content> 
          <h4 class="md-title">Add a new automation</h4>
    </md-toolbar>
    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="first" :md-label="$t('select_trigger')" :md-done.sync="first">
        <div>
           <!-- This should be replaced by md-select component -->
           <select id="trigger" v-model="selectedTrigger">
              <option v-for="trigger in getTriggersList" v-bind:value="trigger" :key='trigger.uuid'>
                  {{ trigger.name }}
              </option>
           </select>
        </div>
         <md-button class="md-raised md-primary" :disabled="selectedTrigger == ''"  @click="setDone('first', 'second')">{{$t('continue')}}</md-button>
      </md-step>

      <md-step id="second" :md-label="$t('select_one_more_commands')" :md-done.sync="second">
        <div>
           <!-- This should be replaced by md-select component -->
           <select id="commands" v-model="selectedCommands" size="7" multiple>
              <option v-for="command in getCommandsList" v-bind:value="command" :key="command.uuid">
                  {{ command.name }}
              </option>
           </select>
        </div>
         <md-button class="md-raised md-primary" :disabled="selectedCommands == ''"  @click="setDone('second', 'third')">{{$t('continue')}}</md-button>
       </md-step>

      <md-step id="third" :md-label="$t('review_confirm')" :md-done.sync="third">
        <div>Selected trigger: {{ selectedTrigger['name'] }}</div>
        <div>Selected commands: 
          <li v-for="command in selectedCommands" :key='command.uuid'>
             {{ command['name'] }}
          </li>
        </div>  
        <md-button class="md-raised md-primary" @click="addNewAutomation">{{$t('confirm')}}</md-button>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>

export default {
  name: 'AddAutomation',
  computed: {
    getCommandsList: function () {
      return this.$store.state.commandsList
    },
    getTriggersList: function () {
      return this.$store.state.triggersList
    }
  },
  data: () => ({
    active: 'first',
    first: false,
    second: false,
    third: false,
    selectedTrigger: [],
    selectedCommands: [],
    newAutomation: {
      conditions: [],
      shortDescription: '',
      uuid: '',
      description: '',
      triggerURI: '',
      triggerUuid: '',
      commands: []
    }
  }),
  methods: {
    setDone (id, index) {
      this[id] = true
      if (index) {
        this.active = index
      }
      if (this.third) {
        this.$modal.hide('add-automation')
      }
    },
    addNewAutomation () {
      this.third = true
      this.newAutomation.shortDescription = 'WHEN  ' + '[' + this.selectedTrigger.name + ']  THEN (' + this.selectedCommands[0].name + ')'
      if (this.selectedCommands.length > 1) {
        for (var i = 1; i < this.selectedCommands.length; i++) {
          this.addNewAutomation.shortDescription = this.newAutomation.shortDescription + ' AFTER THAT (' + this.selectedCommands[i].name + ')'
        }
      }
      this.newAutomation.triggerURI = 'triggers/' + this.selectedTrigger.uuid
      this.newAutomation.triggerUuid = this.selectedTrigger.uuid
      for (i = 0; i < this.selectedCommands.length; i++) {
        this.newAutomation.commands.push({'uuid': this.selectedCommands[i].uuid, 'uri': 'commands/user/' + this.selectedCommands[i].uuid})
      }
      alert(JSON.stringify(this.newAutomation, null, 2))
      this.$store.dispatch('addAutomation', this.newAutomation)
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  
</style>
