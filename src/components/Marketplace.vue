<template>
  <div>
    <md-toolbar class="md-accent">
       <md-content class="small-icon" @click="$emit('close')">
            <md-icon>clear</md-icon>
       </md-content> 
          <h4 class="md-title">Freedomotic Official Marketplace</h4>
    </md-toolbar>
     <!-- This should be replaced by md-select components -->
     <select v-model="selectedCategory">
        <option v-for="category in getMarketplaceCategories" v-bind:value="category.name" 
        v-on:change="getMarketplaceCategoryPlugins(category.name)" 
        >
           {{ category.name }}
        </option>
     </select>
     <div>
       <md-list class="md-triple-line">
         <md-list-item v-for="plugin in getMarketplaceCategoryPlugins" :key="plugin.uuid">
            <md-avatar>
              <img :src="plugin.field_icon[0].filepath" :alt="plugin.title">
            </md-avatar>
            <div class="md-list-item-text">
            <span>{{plugin.title}}</span>
            <span>{{plugin.field_description[0].value}}</span
            <span>{{plugin.field_category[0].value}}</span>
            </div>
            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">add</md-icon>
            </md-button>
         </md-list-item>
       </md-list>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Marketplace',
  computed: {
    getMarketplaceCategories: function () {
      return this.$store.state.marketplaceCategories
    },
    getMarketplaceCategoryPlugins: function (category) {
      return this.$store.state.marketplaceCategoriesPlugins
    }
  },
  data () {
    return {
      selectedCategory: null
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  
</style>


