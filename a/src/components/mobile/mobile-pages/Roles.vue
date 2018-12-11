<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list-header>Roles</v-ons-list-header>
      <ons-list-item v-for="role in getRolesList" :key="role.name">
        <label class="center">
          {{ role.name }}
        </label>
      </ons-list-item>
    
  </v-ons-page>
</template>

<script>
export default {
  computed: {
    getRolesList: function () {
      return this.$store.state.rolesList
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
