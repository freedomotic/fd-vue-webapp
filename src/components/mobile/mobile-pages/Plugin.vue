<template>
  <div>
    PROVA TESTO
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      description: String,
      icon: String,
      category: String,
      uuid: String,
      currentStatus: String
    },
    methods: {
      isPluginRunning: function (currentStatus) {
        return currentStatus === 'RUNNING'
      },
      startPlugin: function (pluginId) {
        this.$store.dispatch('startPlugin', pluginId)
      },
      stopPlugin: function (pluginId) {
        this.$store.dispatch('stopPlugin', pluginId)
      }
    }
}
</script>
<style scoped>
  
</style>