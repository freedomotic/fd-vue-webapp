<template>
  <div>
    <md-toolbar class="md-accent">
       <md-content class="small-icon" @click="$emit('close')">
            <md-icon>clear</md-icon>
       </md-content> 
          <h4 class="md-title">Freedomotic Official Marketplace</h4>
    </md-toolbar>
    <br>
     <!-- This should be replaced by md-select components -->
     <div>{{$t('select_category')}}</div>
     <select v-model="selectedCategory" @change="getMarketplaceCategoryPluginsList()">
        <option v-for="category in getMarketplaceCategoriesList" :key="category.id">
              {{ category.name}}
        </option>
     </select>
     <br><br>
     <div>
       <md-list class="md-triple-line">
         <md-list-item v-for="plugin in getMarketplaceCategoryPlugins" :key="plugin.uuid">
            <md-avatar>
              <img :src="plugin.field_icon[0].filepath" :alt="plugin.title">
            </md-avatar>
            <div class="md-list-item-text">
            <span>{{plugin.title}}</span>
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
    getMarketplaceCategoriesList: function () {
      return this.$store.state.marketplaceCategoriesList
    },
    getMarketplaceCategoryPlugins: function () {
      return this.$store.state.marketplaceCategoryPluginsList
    }
  },
  data () {
    return {
      selectedCategory: ''
    }
  },
  methods: {
    getMarketplaceCategoryPluginsList: function () {
      console.log('Request for ' + this.selectedCategory)
      this.$store.dispatch('getMarketplaceCategoryPluginsList', this.selectedCategory)
    }
  }
}
</script>

<style scoped>
  .md-menu-content {
     z-index: 150;
  }
</style>


