<template>
  <v-ons-page>
     <div>
      <md-content class="content">
        {{$t('logout_message')}}
     </md-content>
     <v-ons-button modifier="large" style="margin: 6px 0" @click="doLogout">{{$t('logout')}}</v-ons-button>
     </div> 
  </v-ons-page>
</template>

<script>
import ws from '@/utils/websocket'
export default {
  data () {
    return {}
  },
  methods: {
    doLogout: function () {
      ws.closeWebSockets()
      this.$router.push('logout')
    }
  }
}
</script>

<style scoped>
  .md-content,
  .md-icon.md-theme-default {
    background-color: transparent;
  }

  .content {
      margin-top: 5%;
      margin-left: 2%;
      text-align: center;
  }
</style>
