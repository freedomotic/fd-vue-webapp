export const getHardwareTriggers = state => {
  return state.triggersList.filter(trigger => {
    if (trigger.hardwareLevel === true) {
      return trigger
    }
  })
}
