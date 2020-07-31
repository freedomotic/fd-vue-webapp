<template>
  <div v-if="rolesOpen && $q.platform.is.desktop" class="current-section">
    <q-layout>
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="undo" class="q-mr-sm" @click="openSettings" />
          <q-toolbar-title>{{$t('roles').toUpperCase()}}</q-toolbar-title>
          <q-btn flat round dense icon="close" @click="closeWindow" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <grid-container>
          <div class="item" v-for="(role, index) in getRolesList" :key="role.uuid">
            <role :index="index"></role>
          </div>
        </grid-container>
      </q-page-container>
    </q-layout>
  </div>
  <div v-else-if="$q.platform.is.mobile">
    <q-layout>
      <q-page-container>
        <q-list bordered>
          <q-item v-for="role in getRolesList" :key="role.uuid" class="q-my-sm" clickable v-ripple>
            <q-item-section>
              <q-item-label>{{ role.name}}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon name="keyboard_arrow_right" color="green" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import GridContainer from "./common/GridContainer.vue";
import Role from "./Role.vue";

export default {
  components: {
    Role,
    GridContainer
  },
  computed: {
    rolesOpen: function() {
      return this.$store.state.rolesOpen;
    },
    getRolesList: function() {
      return this.$store.state.rolesList;
    }
  },
  mounted() {
    this.$store.dispatch("getRolesList");
  },
  data() {
    return {};
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
