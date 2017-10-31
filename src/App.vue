<template>
  <div id="app">
    <login v-if="!loggedIn"></login> 
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
import Vue from 'vue'
import auth from './auth/auth'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'

Vue.use(VueMaterial)

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