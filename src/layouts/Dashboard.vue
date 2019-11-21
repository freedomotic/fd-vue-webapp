<template>
  <q-layout view="hhr lpr lfr">
    <!-- Be sure to play with the Layout demo on docs -->
    <q-header reveal>
      <app-bar />
    </q-header>

    <q-drawer
      side="left"
      v-model="showSideNav"
    >
      <!-- <left-side-nav /> -->
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import AppBar from 'components/navigations/AppBar.vue'
// import LeftSideNav from '../components/navigation/LeftSide'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    AppBar
    // LeftSideNav
  }
})
export default class Dashboard extends Vue {
  showSideNav = false
}
</script>
