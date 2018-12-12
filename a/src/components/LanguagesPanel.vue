<template>
    <div v-if="languagesOpen" class="current-section">
        <md-toolbar class="md-accent">
          <md-content class="small-icon" @click="openSettings">
            <md-icon>undo</md-icon>
          </md-content>
          <md-content class="small-icon" @click="closeWindow">
            <md-icon>clear</md-icon>
          </md-content> 
          <h3 class="md-title">{{$t('languages').toUpperCase()}}</h3>
        </md-toolbar>
          <div class='button-flags-set'>
            <country-flag country='gb' @click.native="changeLanguage('en')"/>
            <country-flag v-for="(value, key) in availableLanguages" :key="key" :country="value" @click.native="changeLanguage(value)"/>
          </div>
	  <p>{{$t('current_language')}}: {{ $i18n.locale() }}</p>
    </div>    
</template>

<script>
import CountryFlag from 'vue-country-flag'
export default {
  components: {
    CountryFlag
  },
  computed: {
    languagesOpen: function () {
      return this.$store.state.languagesOpen
    },
    availableLanguages () {
      return this.$i18n.locales()
    }
  },
  data () {
    return {
      language: 'en'
    }
  },
  methods: {
    openSettings: function () {
      this.$store.commit('showSetup')
    },
    closeWindow: function () {
      this.$store.commit('closeSection')
    },
    changeLanguage (language) { this.$i18n.set(language) }
  }
}
</script>

<style scoped>
   .current-section {
        position: fixed;
        top: 1%;
        bottom: 1%;
        left: 1%;
        right: 1%;
        background:white;
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

   .small-icon {
      width: 24px;
      margin: 1%;
      cursor: pointer;
      background:transparent;
   } 

   #button-flags-set {
     margin: auto;
     width: 100%;
   }
</style>
