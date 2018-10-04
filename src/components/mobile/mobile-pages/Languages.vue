<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>

    <v-ons-list>
     
      <v-ons-list-header>{{$t('select_language')}}</v-ons-list-header>
      <v-ons-list-item v-for="(language, $index) in availableLanguages" :key="language"
        tappable
        :modifier="($index === languages.length - 1) ? 'longdivider' : ''"
      >
        <label class="left">
          <v-ons-radio
            :input-id="'radio-' + $index"
            :value="language"
            v-model="selectedLanguage"
            @change="changeLanguage(language)"
          >
          </v-ons-radio>
        </label>
        <label :for="'radio-' + $index" class="center">
          {{ language }}
        </label>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          {{$t('current_language')}}: {{ $i18n.locale() }}
        </div>
      </v-ons-list-item>

         </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  data () {
    return {
      languages: ['en', 'it'],
      selectedLanguage: this.$i18n.locale()
    }
  },
  computed: {
    availableLanguages () {
      return this.$i18n.locales()
    }
  },
  methods: {
    changeLanguage (language) { this.$i18n.set(language) }
  }
}
</script>

<style scoped>
.right-icon {
  margin-left: 10px;
}
.right-label {
  color: #666;
}
</style>
