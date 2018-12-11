<template>
  <q-layout view="Lhr lpr lfr"> <!-- Be sure to play with the Layout demo on docs -->
    <q-layout-header>
      <app-bar @toggle:side="showSideNav = !showSideNav" />
    </q-layout-header>

    <q-layout-drawer
      side="left"
      v-model="showSideNav"
    ><left-side-nav /></q-layout-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import AppBar from '../components/navigation/AppBar'
import LeftSideNav from '../components/navigation/LeftSide'

export default {
  components: {
    AppBar,
    LeftSideNav
  },
  data: () => ({
    showSideNav: false
  })
}
</script>
