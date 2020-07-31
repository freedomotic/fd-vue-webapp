<template>
  <div v-if="$q.platform.is.desktop">
    <q-card class="logout">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{$t('logout')}}</div>
        <div class="text-subtitle2">{{$t('logout_message')}}</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat class="cancel-button" @click="closeWindow">{{$t('cancel')}}</q-btn>
        <q-btn flat class="logout-button" @click="doLogout">{{$t('logout')}}</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div v-else>
    <q-dialog v-model="confirmLogout" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm">{{$t('logout_message')}}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('cancel')" color="primary" v-close-popup />
          <q-btn flat label="Confirm" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import ws from "../utils/websocket";
export default {
  data() {
    return {
      confirmLogout: true
    };
  },
  methods: {
    closeWindow: function() {
      this.$store.commit("closeSection");
    },
    doLogout: function() {
      ws.closeWebSockets();
      this.$router.push("logout");
    }
  }
};
</script>

<style scoped>
.logout {
  width: 100%;
  margin: auto;
  height: 100%;
  color: white;
  padding: 10px;
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
