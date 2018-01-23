<template>
  <div class="logout">
    <md-content class="md-title">{{$t('logout')}}</md-content>
    <md-content class="content">
        {{$t('logout_message')}}
    </md-content>
    <md-button class="md-raised md-accent cancel-button" @click="closeWindow">{{$t('cancel')}}</md-button>
    <md-button class="md-raised md-accent logout-button" @click="doLogout">{{$t('logout')}}</md-button>
  </div> 
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    closeWindow: function () {
      this.$store.commit('closeSection')
    },
    doLogout: function () {
      this.$router.push('logout')
    }
  }
}
</script>

<style scoped>
  .logout {
    width: 100%;
    margin: auto;
    height: 100%;
    color: white;
    padding: 10px;
  }

  .md-content {
    background-color: transparent;
  }

  .content {
      margin-top: 5%;
      margin-left: 2%;
  }

  #buttons {
    margin-top: 10%;
    margin-bottom: 5%;
  }

  .logout-button {
    color: white;
    background-color: #448aff;
    float: right;
  }

  .cancel-button {
    color: white;
    background-color: red;
    float: right;
  }

</style>