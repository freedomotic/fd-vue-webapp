<template>
  <q-dialog :value='value' @input='value => $emit("input", value)' persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm text-h6">Add new user</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Confirm" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'AddUserDialog',
  components: {
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style scoped>
</style>
