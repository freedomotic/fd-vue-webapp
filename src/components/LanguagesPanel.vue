<template>
  <div v-if="languagesOpen && $q.platform.is.desktop" class="current-section">
    <q-layout>
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="undo" class="q-mr-sm" @click="openSettings" />
          <q-toolbar-title>{{$t('languages').toUpperCase()}}</q-toolbar-title>
          <q-btn flat round dense icon="close" @click="closeWindow" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-card class="button-flags-set">
          <q-card-section>
            <div>
              <country-flag country="gb" size="big" @click.native="changeLanguage('en')" />
            </div>
          </q-card-section>
          <q-card-section>
            <div>
              <country-flag
                v-for="(value, key) in availableLanguages"
                :key="key"
                :country="value"
                size="big"
                @click.native="changeLanguage(value)"
              />
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <div>{{$t('current_language')}}: {{ $i18n.locale().toUpperCase() }}</div>
          </q-card-section>
        </q-card>
      </q-page-container>
    </q-layout>
  </div>
  <div v-else-if="$q.platform.is.mobile">
    <q-list bordered>
      <q-item
        v-for="(value, key) in availableLanguages"
        :key="key"
        class="q-my-sm"
        clickable
        v-ripple
        @click.native="changeLanguage(value)"
      >
        <q-item-section>
          <q-item-label>
            <country-flag :country="value" />
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="green" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";

export default {
  components: {
    CountryFlag
  },
  computed: {
    languagesOpen: function() {
      return this.$store.state.languagesOpen;
    },
    availableLanguages() {
      return this.$i18n.locales();
    }
  },
  data() {
    return {
      language: "en"
    };
  },
  methods: {
    openSettings: function() {
      this.$store.commit("showSetup");
    },
    closeWindow: function() {
      this.$store.commit("closeSection");
    },
    changeLanguage(language) {
      this.$i18n.set(language);
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

#button-flags-set {
  margin: auto;
  width: 100%;
}
</style>
