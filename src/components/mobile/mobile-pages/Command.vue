<template>
 <v-ons-page> 
  <div v-if="addMode === false">
   <v-ons-card>
    <div>{{command.name}}</div>
  </v-ons-card>
  </div> 
  <div v-else></div>
    
 </v-ons-page> 
</template>

<script>
  export default {
    props: {
      command: {},
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
