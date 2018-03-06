<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list-header>Users</v-ons-list-header>
      <ons-list-item v-for="user in getUsersList" :key="user.name">
        <label class="center">
          {{ user.name }}
        </label>
      </ons-list-item>
    
  </v-ons-page>
</template>

<script>
export default {
  computed: {
    getUsersList: function () {
      return this.$store.state.usersList
    },
    data () {
      return {}
    }
  }
}
</script>

<style scoped>
.right-icon {
  margin-left: 10px;
}
.right-label {
  color: #666;
}
</style>
