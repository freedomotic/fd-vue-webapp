<template>
  <div id="settings-area" v-if="$q.platform.is.desktop">
    <div id="flex-container">
      <div class="settings-boxes">
        <info-box
          class="settings-box"
          color="ff6666"
          icon="dashboard"
          action="Plugins"
          :title="$t('plugins')"
        />
        <info-box
          class="settings-box"
          color="eeee77"
          icon="extension"
          action="Automations"
          :title="$t('automations')"
        />
      </div>
      <div class="settings-boxes">
        <info-box
          class="settings-box"
          color="77dd77"
          icon="perm_identity"
          action="Users"
          :title="$t('users')"
        />
        <info-box
          class="settings-box"
          color="ffffff"
          icon="settings_applications"
          action="System"
          :title="$t('system')"
        />
      </div>
      <div class="settings-boxes">
        <info-box
          class="settings-box"
          color="ffbbff"
          icon="supervisor_account"
          action="Roles"
          :title="$t('roles')"
        />
        <info-box
          class="settings-box"
          color="5291ef"
          icon="language"
          action="Languages"
          :title="$t('languages')"
        />
      </div>
    </div>
    <close-button class="color-red" />
  </div>
  <div v-else-if="$q.platform.is.mobile">
    <q-list bordered>
      <q-item class="q-my-sm" clickable v-ripple @click="setMobileSection('languages')">
        <q-item-section>
          <q-item-label>{{$t('languages')}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="green" />
        </q-item-section>
      </q-item>

      <q-item class="q-my-sm" clickable v-ripple @click="setMobileSection('plugins')">
        <q-item-section>
          <q-item-label>{{$t('plugins')}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="green" />
        </q-item-section>
      </q-item>

      <q-item class="q-my-sm" clickable v-ripple @click="setMobileSection('automations')">
        <q-item-section>
          <q-item-label>{{$t('automations')}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="green" />
        </q-item-section>
      </q-item>

      <q-item class="q-my-sm" clickable v-ripple @click="setMobileSection('users')">
        <q-item-section>
          <q-item-label>{{$t('users')}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="green" />
        </q-item-section>
      </q-item>

      <q-item class="q-my-sm" clickable v-ripple @click="setMobileSection('roles')">
        <q-item-section>
          <q-item-label>{{$t('roles')}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="green" />
        </q-item-section>
      </q-item>

      <q-item class="q-my-sm" clickable v-ripple @click="setMobileSection('system')">
        <q-item-section>
          <q-item-label>{{$t('system')}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="green" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import InfoBox from "./InfoBox.vue";
import CloseButton from "./CloseButton.vue";

export default {
  components: {
    "info-box": InfoBox,
    "close-button": CloseButton
  },
  data() {
    return {};
  },
  methods: {
    setMobileSection: function(section) {
      this.$store.commit("setMobileSection", section);
    }
  }
};
</script>

<style scoped>
.color-red {
  background-color: red;
}

#settings-area {
  height: 100%;
  overflow-y: scroll;
}

#flex-container {
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  align-content: space-around;
}

.settings-boxes {
  flex-direction: row;
  justify-content: space-evenly;
  display: flex;
  width: 100%;
  height: 50%;
}

.settings-box {
  flex-grow: 1;
  margin: 0.5em;
  width: 40%;
  height: 30%;
}
</style>

