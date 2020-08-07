<template>
  <div id="app">
    <login v-if="!loggedIn"></login>
    <div v-else>
        <dashboard></dashboard>
    </div>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import EventBus from '@/utils/event-bus'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
export default {
  name: 'app',
  components: {
    Login,
    Dashboard
  },
  data () {
    return {}
  },
  created () {
    //this.$store.isMobile = this.$ons.platform.isAndroid() || this.$ons.platform.isIOS()
    console.log('Created ' + this.$store.isMobile)
  },
  computed: {
    loggedIn () {
      return !!this.$store.state.token
    }
  },
  updated () {
    EventBus.$on('snotifyMessage', function (message) {
      this.$q.notify(message)
      //this.$snotify.success(message, {
      //  timeout: 5000,
      //  showProgressBar: false,
      //  closeOnClick: false,
      //  pauseOnHover: true
      //})
    //})
    //EventBus.$on('mobileNotification', function (message) {
      //this.$ons.notification.toast(message, {timeout: 2000})
    })
  }
}
</script>

<style>
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #8BAE2D;
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
</style>
