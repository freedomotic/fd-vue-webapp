<template>
 <div>    
  <md-card md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{thing.name}}</div>
          <div class="md-subhead">{{thing.type.split(/[. ]+/).pop()}}</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/plugin-running.png" alt="People">
        </md-card-media>
      </md-card-header>
      
      <div v-if="thing.type.includes('ElectricDevice')">
          <img v-if="thing.behaviors[0].value == true" class="center" src="../assets/icons/led-green.png"/>
          <img v-else class="center" src="../assets/icons/led-grey.png"/>
          <div v-if="thing.type.includes('Light')" class="behavior">brightness {{thing.behaviors[1].value}}%</div>
      </div>

      <div class="setpoint" v-if="thing.type =='EnvObject.Thermostat'">
           Set point {{thing.behaviors[1].value}}°
      </div>

      <div class="temperature" v-if="thing.type =='EnvObject.Thermometer' || thing.type =='EnvObject.Thermostat'">
           {{thing.behaviors[0].value/thing.behaviors[0].scale}}°
      </div>
      
      <md-card-expand>
        <md-card-actions md-alignment="space-between">
         <md-button class="md-icon-button" @click="showThingsEditorModal">
            <md-icon>settings</md-icon>
         </md-button>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            <div v-for="behavior in thing.behaviors" v-if="behavior.readOnly == false">
              {{behavior.name}}
            </div> 
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
 </div>
</template>

<script>
import ThingsEditor from './ThingsEditor.vue'

export default {
  props: [ 'thing' ],
  components: {
    ThingsEditor
  },
  methods: {
    showThingsEditorModal () {
      this.$modal.show(ThingsEditor, {
        thing: this.thing
      }, {
        adaptive: true,
        resizable: true,
        clickToClose: false,
        scrollable: true,
        width: '50%',
        height: 'auto'
      })
    }
  }
}
</script>
<style scoped>
  .md-card {
    width: 350px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    background-color: #ededed
  }
  
  .md-card-media {
      width: 64px;
      height: 64px;
  }

  .setpoint {
      text-align: center;
      font-size: 12px;
  }

  .temperature {
      position: relative;
      width: 90px;
      height: 50px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      font-size: 18px;
      padding: 15px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      background: rgba(148,237,31,0.6);
      -webkit-box-shadow: #B3B3B3 12px 12px 12px;
      -moz-box-shadow: #B3B3B3 12px 12px 12px;
      box-shadow: #B3B3B3 12px 12px 12px;
  }

  img.center {
    display: block;
    margin: 0 auto;
    padding: 5px;
  }

  .behavior {
    display: block;
    margin: 0 auto;
    text-align: center
  }
</style>
