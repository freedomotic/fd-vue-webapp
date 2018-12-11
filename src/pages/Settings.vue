<template>
  <q-page padding>
    <div class="row gutter-md">
      <div class="col-4">
        <q-list link no-border separator>
          <q-item>
            <q-item-side icon="widgets" />
            <q-item-main label="Plugins" />
          </q-item>
          <q-item>
            <q-item-side icon="extension" />
            <q-item-main label="Automations" />
          </q-item>
          <q-item>
            <q-item-side icon="perm_identity" />
            <q-item-main label="Users" />
          </q-item>
          <q-item>
            <q-item-side icon="supervisor_account" />
            <q-item-main label="Roles" />
          </q-item>
          <q-item>
            <q-item-side icon="settings_applications" />
            <q-item-main label="System" />
          </q-item>
          <q-item :to="{name: 'setting:language'}">
            <q-item-side icon="language" />
            <q-item-main label="Language" />
          </q-item>
        </q-list>
      </div>
      <div class="col-8">
        <router-view />
      </div>
    </div>
  </q-page>
</template>
