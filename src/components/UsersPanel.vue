<template>
  <div v-if="usersOpen && $q.platform.is.desktop" class="current-section">
    <q-layout>
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="undo" class="q-mr-sm" @click="openSettings" />
          <q-toolbar-title>{{$t('users').toUpperCase()}}</q-toolbar-title>
          <q-btn color="secondary" label="Add new user" @click='addNewUser = true' />
          <q-btn flat round dense icon="close" @click="closeWindow" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <grid-container>
          <div class="item" v-for="(user, index) in getUsersList" :key="user.uuid">
            <user :index="index"></user>
          </div>
        </grid-container>
       </q-page-container>
    </q-layout>
    <add-new-user v-model='addNewUser' />
  </div>
  <div v-else-if="$q.platform.is.mobile">
    <q-layout>
      <q-page-container>
        <q-list bordered>
          <q-item v-for="user in getUsersList" :key="user.uuid" class="q-my-sm" clickable v-ripple>
            <q-item-section>
              <q-item-label>{{ user.name}}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon name="keyboard_arrow_right" color="green" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-page-container>
    </q-layout>
    <add-new-user v-model='addNewUser' />
  </div>
</template>

<script>
import GridContainer from "./common/GridContainer.vue";
import User from "./User.vue";
import AddNewUser from "./dialog/AddUserDialog.vue";

export default {
  components: {
    User,
    GridContainer,
    AddNewUser
  },
  computed: {
    usersOpen: function() {
      return this.$store.state.usersOpen;
    },
    getUsersList: function() {
      return this.$store.state.usersList;
    }
  },
  mounted() {
    this.$store.dispatch("getUsersList");
  },
  data() {
    return {
      addNewUser: false
    };
  },
  methods: {
    openSettings: function() {
      this.$store.commit("showSetup");
    },
    closeWindow: function() {
      this.$store.commit("closeSection");
    }
  }
};
</script>

<style scoped>
.current-section {
  position: fixed;
  top: 1%;
  bottom: 1%;
  left: 1%;
  right: 1%;
  background: white;
  border-radius: 4px;
  z-index: 10;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  margin: auto;
}

#action-container {
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  margin-top: 50%;
}
.small-icon {
  width: 24px;
  margin: 1%;
  cursor: pointer;
  background: transparent;
}
</style>
