<template>
  <div>
    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="first" :md-label="$t('select_trigger')" :md-done.sync="first">
         <div>
           <!-- This should be replaced by md-select components -->
           <select v-model="selectedTrigger" v-on:change="getTextFromSelectTrigger">
              <option v-for="trigger in lstTriggers" v-bind:value="trigger.uuid">
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
              <option v-for="command in lstCommands" v-bind:value="command.uuid">
                  {{ command.name }}
              </option>
           </select>
           
         </div>
         <md-button class="md-raised md-primary" :disabled="selectedCommands == ''"  @click="setDone('second', 'third')">{{$t('continue')}}</md-button>
       </md-step>

      <md-step id="third" :md-label="$t('review_confirm')" :md-done.sync="third">
        <div>Selected trigger: {{ selectedTriggerName }}</div>
        <div>Selected commands: {{ selectedCommandsName }}</div>
        <md-button class="md-raised md-primary" @click="sendToAPI">{{$t('confirm')}}</md-button>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  export default {
    name: 'StepperLinear',
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
      selectedTrigger: '',
      selectedTriggerName: '',
      selectedCommandsName: [],
      selectedCommands: [],
      // it'd be replaced by a call to '/triggers' API
      lstTriggers: [
           {name: 'When an electric device is clicked', uuid: '2345-222-222'},
           {name: 'Every five seconds', uuid: '2345-123-456'},
           {name: 'It\'s night', uuid: '4788-333-445'}
      ],
      // it'd be replaced by a call to '/commands/user' API
      lstCommands: [
           {name: 'Turn on kitchen light', uuid: '2345-222-222'},
           {name: 'Save data on InfluxDB', uuid: '2345-123-456'},
           {name: 'Say hello', uuid: '4788-333-445'}
      ]
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
        var values = this.lstTriggers.map(function (o) { return o.value })
        var index = values.indexOf(this.selected)
        this.selectedTriggerName = this.lstTriggers[index].name
      },
      getTextFromSelectCommands () {
        var values = this.lstCommands.map(function (o) { return o.value })
        var index = values.indexOf(this.selected)
        this.selectedCommandsName = this.lstCommands[index].name
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
