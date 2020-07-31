<template>
  <div v-if="systemOpen && $q.platform.is.desktop" class="current-section">
    <q-layout>
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="undo" class="q-mr-sm" @click="openSettings" />
          <q-toolbar-title>{{$t('system').toUpperCase()}}</q-toolbar-title>
          <q-btn flat round dense icon="close" @click="closeWindow" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <div class="row">
          <div class="col">
            <q-btn round icon="developer_board" @click="setAdvancedMode" />
            <div v-if="advancedMode">{{$t('enable')}} {{$t('advanced_mode')}}</div>
            <div v-else>{{$t('disable')}} {{$t('advanced_mode')}}</div>
          </div>
          <div class="col">
            <a href="https://goo.gl/forms/CqZZfBCHNx" target="_blank">
              <q-btn round icon="report_bug" />
            </a>
            <div>{{$t('report_bug')}}</div>
          </div>
          <div class="col">
            <q-btn round icon="exit_to_app" @click="shutdownFD" />
            <div>{{$t('shutdown')}}</div>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </div>
  <div v-else-if="$q.platform.is.mobile">
    <q-list bordered>
      <q-item class="q-my-sm" clickable v-ripple @click="setAdvancedMode">
        <q-item-section>
          <q-item-label v-if="advancedMode">{{$t('enable')}} {{$t('advanced_mode')}}</q-item-label>
          <q-item-label v-else>{{$t('disable')}} {{$t('advanced_mode')}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="green" />
        </q-item-section>
      </q-item>

      <q-item class="q-my-sm" clickable v-ripple>
        <q-item-section>
          <q-item-label>{{$t('report_bug')}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="green" />
        </q-item-section>
      </q-item>

      <q-item class="q-my-sm" clickable v-ripple>
        <q-item-section>
          <q-item-label>{{$t('shutdown')}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="green" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  computed: {
    systemOpen: function() {
      return this.$store.state.systemOpen;
    },
    advancedMode: function() {
      return this.$store.state.advancedMode;
    }
  },
  data() {
    return {};
  },
  methods: {
    openSettings: function() {
      this.$store.commit("showSetup");
    },
    closeWindow: function() {
      this.$store.commit("closeSection");
    },
    shutdownFD: function() {
      this.$store.dispatch("shutdownFD");
    },
    setAdvancedMode: function() {
      this.$store.dispatch("setAdvancedMode");
    }
  }
};
</script>

<style scoped>
.current-section {
  position: fixed;
  top: 1%;
  bottom: 1%;
  left: 1%;
  right: 1%;
  background: white;
  border-radius: 4px;
  z-index: 130;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
}

#action-container {
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  margin-top: 50%;
}
</style>
