<template>
 <div>    
  <md-card md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{getThingFromStore.name}}</div>
          <div class="md-subhead">{{getThingFromStore.type.split(/[. ]+/).pop()}}</div>
        </md-card-header-text>

        <md-card-media>
          <img v-if="!getThingFromStore.type.includes('Gate')" :src="image">
          <img v-if="getThingFromStore.type.includes('Gate')" src="../assets/icons/door.png">
          <img v-else :src="getThingIcon(getThingFromStore.representation[0].icon)">
        </md-card-media>
      </md-card-header>
      
      <div v-if="getThingFromStore.type.includes('ElectricDevice')">
          <img v-if="getThingFromStore.behaviors[0].value == true" class="center" src="../assets/icons/led-green.png"/>
          <img v-else class="center" src="../assets/icons/led-grey.png"/>
          <div v-if="getThingFromStore.type.includes('Light')" class="behavior">brightness {{getThingFromStore.behaviors[1].value}}%</div>
      </div>

      <div class="setpoint" v-if="getThingFromStore.type =='EnvObject.Thermostat'">
           Set point {{getThingFromStore.behaviors[1].value}}°
      </div>

      <div class="temperature" v-if="getThingFromStore.type =='EnvObject.Thermometer' || getThingFromStore.type =='EnvObject.Thermostat'">
           {{getThingFromStore.behaviors[0].value/getThingFromStore.behaviors[0].scale}}°
      </div>

      <div class="sensor" v-if="getThingFromStore.type.includes('GenericSensor')">
           {{getThingFromStore.behaviors[0].value/getThingFromStore.behaviors[0].scale}}
      </div>

      <div class="sensor" v-if="getThingFromStore.type.includes('Gate')">
           <span v-if="getThingFromStore.behaviors[0].value == false">closed</span>
           <span v-else>open</span>
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
            <div v-for="behavior in getThingFromStore.behaviors" v-if="behavior.readOnly == false" :key="behavior.name">
              {{behavior.name}} 
              <md-switch v-if="behavior['@class'] == 'com.freedomotic.model.object.BooleanBehavior'" v-model="behavior.value" @change="changeBehavior(getThingFromStore.uuid, behavior.name, !!behavior.value)"></md-switch>
              <vue-slider v-if="behavior['@class'] == 'com.freedomotic.model.object.RangedIntBehavior'" ref="getThingFromStore.name + '-' + behavior.name" v-model="behavior.value" :min="Number(behavior.min/behavior.scale)" :max="Number(behavior.max/behavior.scale)" @click.native="changeBehavior(getThingFromStore.uuid, behavior.name, behavior.value)" tooltip="false"></vue-slider>
            </div> 
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
 </div>
</template>

<script>
import ThingsEditor from './ThingsEditor.vue'
import vueSlider from 'vue-slider-component'

export default {
  props: [ 'thing', 'index' ],
  components: {
    ThingsEditor,
    vueSlider
  },
  data () {
    return {
      image: ''
    }
  },
  computed: {
    getThingFromStore: function () {
      return this.$store.state.thingsList[this.index]
    }
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
    },
    changeBehavior: function (thingId, behaviorId, newBehaviorValue) {
      const payload = {'thingId': thingId, 'behaviorId': behaviorId, 'newBehaviorValue': newBehaviorValue}
      this.$store.dispatch('changeBehavior', payload)
    },
    getThingIcon: function (pluginIcon) {
      this.$store.dispatch('getResource', pluginIcon).then((data) => {
        this.image = data
        return (data)
      }).catch(() => {
      })
    }
  }
}
</script>
<style scoped>
  .md-card {
    width: 350px;
    height: 230px;
    margin-bottom: 2%;
    display: inline-block;
    vertical-align: top;
    background-color: #ededed
  }

  .md-card-content {
    background-color: #B3B3B3;
    margin-top: 24%;
  }
  
  .md-card-media {
      width: 64px;
      height: 64px;
  }

  .md-card-actions {
    position: absolute;
    height: 50px;
    width: 100%;
    bottom: 0;
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

  .sensor {
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
