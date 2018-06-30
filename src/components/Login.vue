<template>
<div v-if="!(this.$ons.platform.isAndroid() || this.$ons.platform.isIOS())" data-page="Login">
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
          <md-button type="submit" class="md-raised md-primary">{{$t('login')}}</md-button>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- Mobile Login -->
<div v-else>
  <v-ons-page>
    <div class="login-form">
      <label>{{$t('server_address')}}</label>
      <br>
      <v-ons-input v-model="serverAddress"></v-ons-input>
      <br><br>
      <label>{{$t('server_port')}}</label>
      <br>
      <v-ons-input v-model="serverPort"></v-ons-input>
      <br><br>
      <label>{{$t('username')}}</label>
      <br>
      <v-ons-input v-model="username"></v-ons-input>
      <br><br>
      <label>{{$t('password')}}</label>
      <br>
      <v-ons-input type="password" v-model="password"></v-ons-input>
      <br><br>
      <v-ons-button modifier="large" @click="login" class="login-button">{{$t('login')}}</v-ons-button>
      <br>
      <v-ons-button modifier="quiet" class="forgot-password">Forgot password?</v-ons-button>
     </div>
  </v-ons-page>
</div>
</template>

<script>
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
          this.$router.replace(this.$route.query.redirect || '/')
        }).catch(() => {
          if (!(this.$ons.platform.isAndroid() || this.$ons.platform.isIOS())) {
            this.$snotify.error(this.$t('bad_login_information'), 'ERROR', {
              timeout: 0,
              showProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true
            })
          } else {
            this.$ons.notification.alert(this.$t('bad_login_information'))
            // this.$ons.notification.toast(this.$t('bad_login_information'), {timeout: 5000})
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

  .login-form {
    text-align: left;
    width: 80%;
    margin: 60px auto 0;
   }

   input[type=email], input[type=password] {
    display: block;
    width: 100%;
    margin: 0 auto;
    outline: none;
    padding-top: 24px;
    padding-bottom: 24px;
   }

  .login-button {
    width: 100%;
    margin: 0 auto;
  }

  .forgot-password {
    display: block;
    margin: 8px auto 0 auto;
    font-size: 14px;
  }
</style>
