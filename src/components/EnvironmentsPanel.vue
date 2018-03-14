<template>
  <div>
    <div v-for="environment in getEnvironmentsList">
         <environment :environment="environment"></environment>
    </div>
  </div>  
</template>

<script>
import Environment from './Environment.vue'

export default {
  name: 'EnvironmentPanel',
  data () {
    return {}
  },
  components: {
    Environment
  },
  computed: {
    getEnvironmentsList: function () {
      return this.$store.state.environmentsList
    }
  }
}
</script>

<style scoped>

</style>


