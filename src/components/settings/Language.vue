<template>
<div class="row">
  <div class="col-6">
    <q-list link no-border>
      <q-item v-for="({code, label}, i) in langs.slice(0, 6)" :key="i">
        <q-item-side :class="`flag-icon flag-icon-${code}`" />
        <q-item-main :label="label" />
      </q-item>
    </q-list>
  </div>
  <div class="col-6">
    <q-list link no-border>
      <q-item v-for="({code, label}, i) in langs.slice(6, 12)" :key="i">
        <q-item-side :class="`flag-icon flag-icon-${code}`" />
        <q-item-main :label="label" />
      </q-item>
    </q-list>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    langs: [
      {code: 'gb', label: 'English'},
      {code: 'de', label: 'German'},
      {code: 'es', label: 'Spanish'},
      {code: 'fr', label: 'France'},
      {code: 'it', label: 'Italy'},
      {code: 'no', label: ''},
      {code: 'nl', label: 'Netherland'},
      {code: 'ro', label: ''},
      {code: 'ru', label: 'Russia'},
      {code: 'sk', label: ''},
      {code: 'tr', label: ''}
    ]
  })
}
</script>
