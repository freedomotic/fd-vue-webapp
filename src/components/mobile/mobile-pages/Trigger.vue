<template>
 <v-ons-page> 
  <div v-if="addMode === false">
   <v-ons-card>
    <div>{{trigger.name}}</div>
  </v-ons-card>
  </div> 
  <div v-else></div>
    
 </v-ons-page> 
</template>

<script>
  export default {
    props: {
      trigger: {},
      addMode: Boolean
    },
    data () {
      return {}
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style scoped>
  
</style>
