<template>
  <div id="app">
    <div v-if="!loggedIn">
        <login></login> 
    </div>
    <div v-else>
        <dashboard></dashboard>
    </div>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
      <router-link v-if="loggedIn" to="/logout">Log out</router-link>
    </template>
  </div>
</template>

<script>
import auth from './auth'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Login, Dashboard
  },
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>

<style>
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #2c3e50;
  }

  #app {
    padding: 0 20px;
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
</style>