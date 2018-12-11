<template>
  <q-scroll-area class="fit">
    <!-- <q-toolbar>
      hellow
    </q-toolbar> -->
    <q-list link no-border separator>
      <q-item :to="{name: 'settings'}">
        <q-item-side icon="settings" />
        <q-item-main label="Settings" />
      </q-item>
      <q-item>
        <q-item-side icon="info" />
        <q-item-main label="About" />
      </q-item>
      <q-item>
        <q-item-side icon="settings_power" />
        <q-item-main label="Sign out" />
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
