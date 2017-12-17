<template>
<div data-page="Login">
  <background/>
  <div id="body">
    <div id="login-box">
      <div id="login-header">
        <img alt="freedomotic" v-bind:src="logoImg">
      </div>
      <div id="login-body">
        <p v-if="$route.query.redirect">
          You need to login first.
        </p>
        <form @submit.prevent="login" autocomplete="off">
          <md-field>
            <label>Server Address</label>
            <md-input required v-model="serverAddress"></md-input>
          </md-field>
          <md-field>
            <label>Server Port</label>
            <md-input required v-model="serverPort"></md-input>
          </md-field>
          <md-field>
            <label>Username</label>
            <md-input required v-model="username"></md-input>
          </md-field>
          <md-field>
            <label>Password</label>
            <md-input type="password" required v-model="password"></md-input>
          </md-field>
          <md-switch v-model="remember" class="md-primary">{{$t('remember_me')}}</md-switch>
          <md-switch v-model="ssl" class="md-primary">{{$t('use_ssl')}}</md-switch>
          <md-button type="submit" class="md-raised md-primary">{{$t('submit')}}</md-button>
          <p v-if="error" class="error">{{$t('bad_login_information')}}</p>
        </form>
      </div>
    </div>
  </div>
</div>

</template>

<script>
  import auth from '../auth/auth'
  import logoImg from '../assets/freedomotic-logo-light-transparent.png'
  import Background from './Background.vue'

  export default {
    components: {
      'background': Background
    },
    data () {
      return {
        serverAddress: 'localhost',
        serverPort: '9111',
        username: '',
        password: '',
        ssl: false,
        remember: false,
        logoImg: logoImg,
        error: false
      }
    },
    created () {
      if (window.location.href.includes('localhost')) {
        this.username = 'admin'
        this.password = 'admin'
      }
    },
    methods: {
      login () {
        auth.login(this.username, this.password, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.$router.replace(this.$route.query.redirect || '/')
          }
        })
      }
    }
  }
</script>

<style scoped>
  #body {
    position: relative;
    height: 100%;
  }
  
  #login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 5px 5px 50px 0 rgba(0,0,0,0.6);
  }

  #login-header {
    padding: 10px;
    background-color: #555;
  }

  #login-header img {
    height: 80px;
    display: block;
    margin: 0 auto;
  }

  #login-body {
    padding: 1em 2em;
  }
</style>