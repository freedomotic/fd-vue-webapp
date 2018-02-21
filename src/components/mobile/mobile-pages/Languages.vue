<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>

    <v-ons-list>
     
      <v-ons-list-header>Select a language</v-ons-list-header>
      <v-ons-list-item v-for="(language, $index) in languages" :key="language"
        tappable
        :modifier="($index === languages.length - 1) ? 'longdivider' : ''"
      >
        <label class="left">
          <v-ons-radio
            :input-id="'radio-' + $index"
            :value="language"
            v-model=" selectedLanguage"
          >
          </v-ons-radio>
        </label>
        <label :for="'radio-' + $index" class="center">
          {{ language }}
        </label>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          Current language {{ selectedLanguage }}
        </div>
      </v-ons-list-item>

         </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  data () {
    return {
      languages: ['EN', 'IT'],
      selectedLanguage: 'EN'
    }
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
