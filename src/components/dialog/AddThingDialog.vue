<template>
  <q-dialog :value='value' @input='value => $emit("input", value)' persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm text-h6">Add new thing</span>
      </q-card-section>

      <q-list bordered>
      <q-item clickable v-ripple v-for="template in getThingTemplatesList" :key="template.name">
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>

        <q-item-section>{{template.name}}</q-item-section>
      </q-item>

      </q-list>
      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup />
        <q-btn flat label="Confirm" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'AddThingDialog',
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
    getThingTemplatesList: function() {
      return this.$store.state.thingTemplatesList;
    }
  },
  methods: {
  }
};
</script>

<style scoped>
</style>
