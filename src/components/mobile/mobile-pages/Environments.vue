<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <v-ons-list>
      <v-ons-list-header>{{$t('select_environment')}}</v-ons-list-header>
      <v-ons-list-item v-for="(environment, $index) in environments" :key="environment"
        tappable
        :modifier="($index === environments.length - 1) ? 'longdivider' : ''"
      >
        <label class="left">
          <v-ons-radio
            :input-id="'radio-' + $index"
            :value="environment"
            v-model=" selectedEnvironment"
          >
          </v-ons-radio>
        </label>
        <label :for="'radio-' + $index" class="center">
          {{ environment }}
        </label>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          {{$t('current_environment')}} {{ selectedEnvironment }}
        </div>
      </v-ons-list-item>

         </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  data () {
    return {
      environments: ['Ground Floor', 'Second Floor'],
      selectedEnvironment: 'Ground Floor'
    }
  }
}
</script>