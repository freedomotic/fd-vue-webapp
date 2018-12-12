<template>
  <q-toolbar>
    <q-btn
      flat
      round
      icon="menu"
      @click="$emit('toggle:side')"
    />
    <q-toolbar-title>Dashboard</q-toolbar-title>
  </q-toolbar>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
