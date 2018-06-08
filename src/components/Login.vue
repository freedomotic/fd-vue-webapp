<template>
<div data-page="Login">
  <background/>
  <vue-snotify/>
  <div id="body">
    <div id="login-box">
      <div id="login-header">
        <img alt="freedomotic" v-bind:src="logoImg">
      </div>
      <div id="login-body">
        <p v-if="$route.query.redirect">
          {{$t('login_first_message')}}
        </p>
        <form @submit.prevent="login" autocomplete="off">
          <md-field>
            <label>{{$t('server_address')}}</label>
            <md-input required v-model="serverAddress"></md-input>
          </md-field>
          <md-field>
            <label>{{$t('server_port')}}</label>
            <md-input required v-model="serverPort"></md-input>
          </md-field>
          <md-field>
            <label>{{$t('username')}}</label>
            <md-input required v-model="username"></md-input>
          </md-field>
          <md-field>
            <label>{{$t('password')}}</label>
            <md-input type="password" required v-model="password"></md-input>
          </md-field>
          <md-switch v-model="remember" class="md-primary">{{$t('remember_me')}}</md-switch>
          <md-switch v-model="ssl" class="md-primary">{{$t('use_ssl')}}</md-switch>
          <md-button type="submit" class="md-raised md-primary">{{$t('submit')}}</md-button>
        </form>
      </div>
    </div>
  </div>
</div>

</template>

<script>
  import ws from '../utils/websocket'
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
        logoImg: logoImg
        // error: false
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
        const payload = {'username': this.username, 'password': this.password, 'rememberMe': this.remember}
        this.$store.dispatch('login', payload).then(() => {
          ws.openWebSockets()
          this.$router.replace(this.$route.query.redirect || '/')
        }).catch(() => {
          // this.error = true
          this.$snotify.error(this.$t('bad_login_information'), 'ERROR', {
            timeout: 0,
            showProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          })
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
