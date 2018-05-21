<template>
  <div id="app">
    <login v-if="!loggedIn"></login>
    <div v-else-if="this.$ons.platform.isAndroid() || this.$ons.platform.isIOS()">
        <mobile-app-navigator></mobile-app-navigator>
    </div>
    <div v-else>
        <dashboard></dashboard>
    </div>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import MobileAppNavigator from './components/mobile/MobileAppNavigator.vue'

export default {
  name: 'app',
  components: {
    Login,
    Dashboard,
    'mobile-app-navigator': MobileAppNavigator
  },
  data () {
    return {}
  },
  created () {},
  computed: {
    loggedIn () {
      return !!this.$store.state.token
    }
  }
}
</script>

<style>
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #2c3e50;
    margin: 0;
    height: 100%;
  }

  html {
    min-height: 100%;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }

  #app, [data-page] {
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
  }

  ul {
    line-height: 1.5em;
    padding-left: 1.5em;
  }

  a {
    color: #7f8c8d;
    text-decoration: none;
  }

  a:hover {
    color: #4fc08d;
  }

  .md-menu-content {
    z-index: 1000;
  }
</style>
