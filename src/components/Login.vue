<template>
<div data-page="Login">
  
  <div id="background" v-bind:style="backgroundStyle" v-bind:class="{active: !!backgroundStyle.backgroundImage}"></div>
  
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

          <md-input-container>
            <label>Server Address</label>
            <md-input required="true" v-model="serverAddress"></md-input>
          </md-input-container>
          
          <md-input-container>
            <label>Server Port</label>
            <md-input required="true" v-model="serverPort"></md-input>
          </md-input-container>

          <md-input-container>
            <label>Username</label>
            <md-input required="true" v-model="username"></md-input>
          </md-input-container>

          <md-input-container>
            <label>Password</label>
            <md-input type="password" required="true" v-model="password"></md-input>
          </md-input-container>

          <md-checkbox v-model="remember">Remember me</md-checkbox>

          <md-checkbox v-model="ssl">Use SSL</md-checkbox>

          <md-button type="submit" class="md-raised md-primary">Submit</md-button>
          
          <p v-if="error" class="error">Bad login information</p>
        </form>

      </div>

    </div>

  </div>

</div>

</template>

<script>
  import auth from '../auth/auth'
  import logoImg from '../assets/freedomotic-logo-light-transparent.png'
  export default {
    data () {
      return {
        serverAddress: '',
        serverPort: '',
        username: '',
        password: '',
        logoImg: logoImg,
        error: false,
        backgroundStyle: {
          backgroundColor: '#ddd',
          backgroundImage: ''
        },
        backgrounds: [
          'https://c1.staticflickr.com/1/38/104792456_71001aaea2_b_d.jpg',
          'https://c2.staticflickr.com/6/5552/15171955576_612f79e75d_h_d.jpg',
          'https://c1.staticflickr.com/1/178/472387994_8bee2dfbee_b_d.jpg',
          'https://c1.staticflickr.com/9/8389/8505463101_fac8481473_h_d.jpg',
          'https://c2.staticflickr.com/6/5159/13983804179_a5b92250d3_o_d.jpg',
          'https://c1.staticflickr.com/3/2788/4517193518_c8cebf5f2e_o_d.jpg',
          'https://c1.staticflickr.com/5/4099/4911433144_e6b761b3f9_b_d.jpg',
          'https://c2.staticflickr.com/6/5065/5577311905_eb2940ac89_b_d.jpg'
        ]
      }
    },
    created () {
      const img = document.createElement('img')
      const imgSrc = this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)]
      img.onload = () => {
        this.backgroundStyle.backgroundImage = 'url(' + imgSrc + ')'
      }
      img.src = imgSrc
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

<style>
  #body {
    position: relative;
    height: 100%;
  }
  #background {
    position: fixed;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }
  #background:after {
    position: absolute;
    top: 0;
    left: 0;
    background: #ddd;
    transition: opacity 0.5s linear;
    width: 100%;
    height: 100%;
    display: block;
    content: "";
  }

  #background.active:after {
    opacity: 0;
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