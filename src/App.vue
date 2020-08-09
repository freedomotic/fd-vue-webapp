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
    console.log('Created ' + this.$store.isMobile)
  },
  computed: {
    loggedIn () {
      return !!this.$store.state.token
    }
  },
  updated () {
    EventBus.$on('notifyMessage', function (type, message) {
      switch (type) {
        case 'info':
            this.$q.notify(message)
          break
      }
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
