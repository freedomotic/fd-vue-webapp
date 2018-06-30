/* globals localStorage */

// import store from '../store'

export default {

  generateAutomation (selectedTrigger, selectedCommands) {
    var newAutomation = {
      conditions: [],
      shortDescription: '',
      uuid: '',
      description: '',
      triggerURI: '',
      triggerUuid: '',
      commands: []
    }

    newAutomation.shortDescription = 'WHEN  ' + '[' + selectedTrigger.name + ']  THEN (' + selectedCommands[0].name + ')'
    if (selectedCommands.length > 1) {
      for (var i = 1; i < selectedCommands.length; i++) {
        newAutomation.shortDescription = newAutomation.shortDescription + ' AFTER THAT (' + selectedCommands[i].name + ')'
      }
    }
    newAutomation.triggerURI = 'triggers/' + selectedTrigger.uuid
    newAutomation.triggerUuid = selectedTrigger.uuid
    for (i = 0; i < selectedCommands.length; i++) {
      newAutomation.commands.push({'uuid': selectedCommands[i].uuid, 'uri': 'commands/user/' + selectedCommands[i].uuid})
    }
    return newAutomation
  }
}
