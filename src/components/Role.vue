<template>
  <div class="q-pa-md row items-start q-gutter-md" v-if="$q.platform.is.desktop">
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section>
          <q-item-label class="title">{{ getRoleFromStore.name }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-actions>
        <q-btn flat round color="white" icon="settings" />
      </q-card-actions>
    </q-card>
  </div>
  <div v-else>MOBILE</div>
</template>
</template>

<script>
export default {
  props: {
    index: ""
  },
  data() {
    return {
      image: ""
    };
  },
  computed: {
    getRoleFromStore: function() {
      return this.$store.state.rolesList[this.index];
    }
  },
  methods: {}
};
</script>
<style scoped>
.title {
  font-size: 26px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 28px;
  text-align: left;
}

.caption {
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 20px;
  text-align: left;
}

.q-card {
  width: 350px;
  height: 350px;
  background-color: #8bae2d;
}

.md-card-actions {
  position: absolute;
  height: 50px;
  width: 100%;
  bottom: 0;
}

.p-img {
  width: 64px;
  -ms-flex: 0 0 64px;
  flex: 0 0 64px;
  height: 64px;
  margin: auto;
}

.md-card .md-card-actions {
  background-color: #ffffff;
}
</style>
