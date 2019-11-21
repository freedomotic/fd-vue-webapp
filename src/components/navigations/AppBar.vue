<template>
  <q-toolbar class="bg-blue text-white">
    <!-- <q-btn
      flat
      round
      icon="menu"
      @click="$emit('toggle:side')"
    /> -->
    <q-toolbar-title>Dashboard</q-toolbar-title>

    <q-btn
      icon="account_box"
      color="white"
      flat
    />

    <q-btn
      icon="settings"
      color="white"
      flat
    />

    <q-btn
      icon="info"
      color="white"
      flat
    />

    <q-btn
      icon="mic"
      color="white"
      flat
    />
  </q-toolbar>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class AppBar extends Vue { }
</script>
