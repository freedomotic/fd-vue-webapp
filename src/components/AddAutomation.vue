<template>
  <div>
    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="first" :md-label="$t('select_trigger')" :md-done.sync="first">
         <div>
           <!-- This should be replaced by md-select components -->
           <select v-model="selectedTrigger" v-on:change="getTextFromSelectTrigger">
              <option v-for="trigger in getTriggersList" v-bind:value="trigger.uuid">
                  {{ trigger.name }}
              </option>
           </select>
           
         </div>
         <md-button class="md-raised md-primary" :disabled="selectedTrigger == ''"  @click="setDone('first', 'second')">{{$t('continue')}}</md-button>
      </md-step>

      <md-step id="second" :md-label="$t('select_one_more_commands')" :md-error="secondStepError" :md-done.sync="second">
        <div>
           <!-- This should be replaced by md-select components -->
           <select v-model="selectedCommands" multiple v-on:change="getTextFromSelectCommands">
              <option v-for="command in getCommandsList" v-bind:value="command.uuid">
                  {{ command.name }}
              </option>
           </select>
           
         </div>
         <md-button class="md-raised md-primary" :disabled="selectedCommands == ''"  @click="setDone('second', 'third')">{{$t('continue')}}</md-button>
       </md-step>

      <md-step id="third" :md-label="$t('review_confirm')" :md-done.sync="third">
        <div>Selected trigger: {{ selectedTrigger }}</div>
        <div>Selected commands: {{ selectedCommands }}</div>
        <md-button class="md-raised md-primary" @click="sendToAPI">{{$t('confirm')}}</md-button>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>

export default {
  name: 'StepperLinear',
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
    selectedTrigger: '',
    selectedTriggerName: '',
    selectedCommandsName: [],
    selectedCommands: []
  }),
  methods: {
    setDone (id, index) {
      this[id] = true
      this.secondStepError = null

      if (index) {
        this.active = index
      }
      if (this.third) {
        this.$modal.hide('add-automation')
      }
    },
    getTextFromSelectTrigger () {
      var values = this.triggersList.map(function (o) { return o.value })
      var index = values.indexOf(this.selected)
      this.selectedTriggerName = this.triggersList[index].name
    },
    getTextFromSelectCommands () {
      var values = this.commandsList.map(function (o) { return o.value })
      var index = values.indexOf(this.selected)
      this.selectedCommandsName = this.commandsList[index].name
    },
    sendToAPI () {
      this.third = true
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .md-steppers {

  }
</style>
