<template>
  <div class="q-pa-md row items-start q-gutter-md" v-if="$q.platform.is.desktop">
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section>
          <img :src="image" style="height: 64px; max-width: 64px; position: absolute; top: 5px; left: 5px;" :placeholder="getPluginIcon(plugin.uuid + '-' + plugin.currentPluginStatus.toLowerCase() + '.png')" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="title">{{ plugin.pluginName }}</q-item-label>
          <q-item-label caption class="caption">{{ plugin.description }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-actions>
        <q-btn flat round color="white" icon="settings" @click="pluginsEditor=true" />
        <q-btn
          v-if="isPluginRunning(plugin.currentPluginStatus)"
          flat
          round
          color="white"
          icon="pause"
          @click="stopPlugin(plugin.uuid)"
        />
        <q-btn
          v-else
          flat
          round
          color="white"
          icon="play_arrow"
          @click="startPlugin(plugin.uuid)"
        />
      </q-card-actions>
    </q-card>
    <q-dialog v-model="pluginsEditor">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>{{$t('plugins_editor').toUpperCase()}}</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-page-container>
          <q-page padding></q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
  <div v-else>
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section>
          <img
            :src="getPluginIcon(plugin.uuid + '-' + plugin.currentPluginStatus.toLowerCase() + '.png')"
            style="height: 64px; max-width: 64px"
          />
          <img :src="image" style="height: 64px; max-width: 64px" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="title">{{ plugin.pluginName }}</q-item-label>
          <q-item-label caption class="caption">{{ plugin.description }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-actions>
        <q-btn flat round color="white" icon="settings" @click="pluginsEditor=true" />
        <q-btn
          v-if="isPluginRunning(plugin.currentPluginStatus)"
          flat
          round
          color="white"
          icon="pause"
          @click="stopPlugin(plugin.uuid)"
        />
        <q-btn
          v-else
          flat
          round
          color="white"
          icon="play_arrow"
          @click="startPlugin(plugin.uuid)"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    plugin: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      image: "",
      pluginsEditor: false
    };
  },
  computed: {
  },
  methods: {
    isPluginRunning: function(currentStatus) {
      return currentStatus === "RUNNING";
    },
    startPlugin: function(pluginId) {
      this.$store.dispatch("startPlugin", pluginId);
      this.$q.notify("Message");
    },
    stopPlugin: function(pluginId) {
      this.$store.dispatch("stopPlugin", pluginId);
    },
    getPluginIcon: function(pluginIcon) {
      this.$store
        .dispatch("getResource", pluginIcon)
        .then(data => {
          this.image = data;
          return data;
        })
        .catch(() => {});
    }
  }
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
  height: 300px;
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
