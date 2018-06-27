<template>
  <div>
    <div v-if="addMode">
     <v-ons-list>
       <v-ons-list-item v-for="thing in getThingTemplatesList" :key="thing.name"
        modifier="chevron"
        tappable
        
      >
        <div class="left">
         <img src="../../../assets/plugin-running.png" alt="People">
        </div>
        <div class="center">{{thing.name}}</div>
      </v-ons-list-item>
    </v-ons-list>
    </div>
    <div v-else>{{thing}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      thing: {},
      addMode: Boolean
    },
    mounted () {
      this.$store.dispatch('getThingTemplatesList')
    },
    computed: {
      getThingTemplatesList: function () {
        return this.$store.state.thingTemplatesList
      }
    },
    methods: {
    }
}
</script>
<style scoped>
  
</style>
