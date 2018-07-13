<template>
  <v-ons-page>
    <v-ons-list>
      <v-ons-list-item v-for="(plugin, index) in getPluginsList" :key="plugin.uuid"
        modifier="chevron"
        @click="transition('default', plugin, false, index)"
        tappable
      >
        <div class="left">
          <v-ons-icon v-if="plugin.currentPluginStatus == 'RUNNING'" style="color: green;" icon="md-check" class="list-item__icon"></v-ons-icon>
          <v-ons-icon v-else icon="md-stop" class="list-item__icon"></v-ons-icon>
        </div>
        <div class="center">
         {{ plugin.pluginName}}
        </div>
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-fab position="bottom right" @click="transition('default', null, true)">
        <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>

<script>

const transitionPage = {
  template: `
    <v-ons-page v-if="addMode === false">
      <custom-toolbar backLabel="Plugins">
        {{ plugin.pluginName }}
      </custom-toolbar>
      <mobile-plugin :addMode="addMode" :index="index"></mobile-plugin>
    </v-ons-page>
    <v-ons-page v-else>
      <custom-toolbar backLabel="Plugins">
        {{$t('install_plugin_from_marketplace')}}
      </custom-toolbar>
      <mobile-plugin :addMode="addMode" :index="index"></mobile-plugin>
    </v-ons-page>
    `
}

export default {
  props: ['pageStack', 'setOptions'],
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('getPluginsList')
    this.$store.dispatch('getMarketplaceCategoriesList')
  },
  computed: {
    getPluginsList: function () {
      return this.$store.state.pluginsList
    }
  },
  methods: {
    transition (name, item, addMode, index) {
      this.setOptions({
        animation: name,
        plugin: item,
        addMode: addMode,
        index: index,
        callback: () => this.setOptions({})
      })

      this.pageStack.push({
        extends: transitionPage,
        data () {
          return {
            animation: name,
            plugin: item,
            addMode: addMode,
            index: index
          }
        }
      })
    }
  }
}
</script>
<style scoped>
.button-margin {
  margin: 6px 0;
}
</style>
