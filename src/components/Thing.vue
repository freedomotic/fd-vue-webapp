<template>
  <div v-if="$q.platform.is.desktop">
    <q-card class="my-card" flat bordered>
      <q-img v-if="!getThingFromStore.type.includes('Gate')" :src="image" />
      <q-img v-if="getThingFromStore.type.includes('Gate')" src="../assets/icons/door.png" />
      <q-img v-else :src="getThingIcon(getThingFromStore.representation[0].icon)" />
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">{{getThingFromStore.name}}</div>
        <div class="text-caption text-grey">{{getThingFromStore.type.split(/[. ]+/).pop()}}</div>
        <div v-if="getThingFromStore.type.includes('ElectricDevice')">
          <img
            v-if="getThingFromStore.behaviors[0].value == true"
            class="center"
            src="../assets/icons/led-green.png"
          />
          <img v-else class="center" src="../assets/icons/led-grey.png" />
          <div
            v-if="getThingFromStore.type.includes('Light')"
            class="behavior"
          >brightness {{getThingFromStore.behaviors[1].value}}%</div>
        </div>

        <div
          class="setpoint"
          v-if="getThingFromStore.type =='EnvObject.Thermostat'"
        >Set point {{getThingFromStore.behaviors[1].value}}°</div>

        <div
          class="temperature"
          v-if="getThingFromStore.type =='EnvObject.Thermometer' || getThingFromStore.type =='EnvObject.Thermostat'"
        >{{getThingFromStore.behaviors[0].value/getThingFromStore.behaviors[0].scale}}°</div>

        <div
          class="sensor"
          v-if="getThingFromStore.type.includes('GenericSensor')"
        >{{getThingFromStore.behaviors[0].value/getThingFromStore.behaviors[0].scale}}</div>

        <div class="sensor" v-if="getThingFromStore.type.includes('Gate')">
          <span v-if="getThingFromStore.behaviors[0].value == false">closed</span>
          <span v-else>open</span>
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat icon="settings" @click="thingsEditor = true" />
        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :disable="expandBehaviorsDisabled"
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            <div
              v-for="behavior in editableBehaviors"
              :key="behavior.name"
            >
              {{behavior.name}}
              <span
                v-if="behavior['@class'] == 'com.freedomotic.model.object.RangedIntBehavior'"
              >({{behavior.value}})</span>
              <q-toggle
                v-if="behavior['@class'] == 'com.freedomotic.model.object.BooleanBehavior'"
                v-model="behavior.value"
                @input="changeBehavior(getThingFromStore.uuid, behavior.name, !!behavior.value)"
              ></q-toggle>
              <q-slider
                v-if="behavior['@class'] == 'com.freedomotic.model.object.RangedIntBehavior'"
                v-model="behavior.value"
                :min="Number(behavior.min/behavior.scale)"
                :max="Number(behavior.max/behavior.scale)"
              />
              <q-select
                v-if="behavior['@class'] == 'com.freedomotic.model.object.ListBehavior'"
                v-model="behavior.selected"
              >
                <option
                  v-for="(item, index) in behavior.list"
                  :key="index"
                  v-bind:value="index"
                  @change="changeBehavior(getThingFromStore.uuid, behavior.name, item)"
                >{{item}}</option>
              </q-select>
            </div>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>

    <q-dialog v-model="thingsEditor" full-width>
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>{{$t('things_editor').toUpperCase()}}</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <things-editor :thing="thing" />

        <q-page-container>
          <q-page padding></q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
  <div v-else-if="$q.platform.is.mobile">
    <q-card class="mobile-card" flat bordered>
      <q-card-section>
        <div class="text-overline text-orange-9">{{getThingFromStore.type.split(/[. ]+/).pop()}}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{getThingFromStore.name}}</div>

        <div class="text-caption text-grey">
          <div v-if="getThingFromStore.type.includes('ElectricDevice')">
            <img
              v-if="getThingFromStore.behaviors[0].value == true"
              class="center"
              src="../assets/icons/led-green.png"
            />
            <img v-else class="center" src="../assets/icons/led-grey.png" />
          </div>

          <div
            class="setpoint"
            v-if="getThingFromStore.type =='EnvObject.Thermostat'"
          >Set point {{getThingFromStore.behaviors[1].value}}°</div>

          <div
            class="temperature"
            v-if="getThingFromStore.type =='EnvObject.Thermometer' || getThingFromStore.type =='EnvObject.Thermostat'"
          >{{getThingFromStore.behaviors[0].value/getThingFromStore.behaviors[0].scale}}°</div>

          <div
            class="sensor"
            v-if="getThingFromStore.type.includes('GenericSensor')"
          >{{getThingFromStore.behaviors[0].value/getThingFromStore.behaviors[0].scale}}</div>

          <div class="sensor" v-if="getThingFromStore.type.includes('Gate')">
            <span v-if="getThingFromStore.behaviors[0].value == false">closed</span>
            <span v-else>open</span>
          </div>
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat icon="settings" @click="thingsEditor = true" />
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            <div
              v-for="behavior in editableBehaviors"
              :key="behavior.name"
            >
              {{behavior.name}}
              <span
                v-if="behavior['@class'] == 'com.freedomotic.model.object.RangedIntBehavior'"
              >({{behavior.value}})</span>
              <q-toggle
                v-if="behavior['@class'] == 'com.freedomotic.model.object.BooleanBehavior'"
                v-model="behavior.value"
                @input="changeBehavior(getThingFromStore.uuid, behavior.name, !!behavior.value)"
              ></q-toggle>
              <q-slider
                v-if="behavior['@class'] == 'com.freedomotic.model.object.RangedIntBehavior'"
                v-model="behavior.value"
                :min="Number(behavior.min/behavior.scale)"
                :max="Number(behavior.max/behavior.scale)"
              />
              <q-select
                v-if="behavior['@class'] == 'com.freedomotic.model.object.ListBehavior'"
                v-model="behavior.selected"
              >
                <option
                  v-for="(item, index) in behavior.list"
                  :key="index"
                  v-bind:value="index"
                  @change="changeBehavior(getThingFromStore.uuid, behavior.name, item)"
                >{{item}}</option>
              </q-select>
            </div>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    <q-dialog maximized v-model="thingsEditor">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-btn flat v-close-popup round dense icon="keyboard_backspace" />
            <q-toolbar-title>{{getThingFromStore.name}}</q-toolbar-title>
          </q-toolbar>
        </q-header>
        <things-editor :thing="thing" />
      </q-layout>
    </q-dialog>
  </div>
</template>

<script>
import ThingsEditor from "./ThingsEditor.vue";

export default {
  props: ["thing", "index"],
  components: {
    ThingsEditor
  },
  data() {
    return {
      image: "",
      expanded: false,
      thingsEditor: false
    };
  },
  computed: {
    getThingFromStore: function() {
      return this.$store.state.thingsList[this.index];
    },

    expandBehaviorsDisabled: function() {
      let isDisabled = false;

      if (!this.getThingFromStore.behaviors || !this.getThingFromStore.behaviors.length) {
        isDisabled = true;
      } else {
        isDisabled = this.editableBehaviors.length <= 0;
      }

      return isDisabled;
    },

    editableBehaviors: function() {
      let editableBehaviors = this.getThingFromStore.behaviors;
      editableBehaviors = editableBehaviors.filter(b => !b.readOnly);
      return editableBehaviors;
    }
  },
  methods: {
    changeBehavior: function(thingId, behaviorId, newBehaviorValue) {
      const payload = {
        thingId: thingId,
        behaviorId: behaviorId,
        newBehaviorValue: newBehaviorValue
      };
      this.$store.dispatch("changeBehavior", payload);
    },
    getThingIcon: function(pluginIcon) {
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
.my-card {
  width: 100%;
  max-width: 350px;
  margin-bottom: 2%;
  display: inline-block;
  vertical-align: top;
  background-color: #ededed;
}

.q-img {
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
  background: rgba(148, 237, 31, 0.6);
  -webkit-box-shadow: #b3b3b3 12px 12px 12px;
  -moz-box-shadow: #b3b3b3 12px 12px 12px;
  box-shadow: #b3b3b3 12px 12px 12px;
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
  background: rgba(148, 237, 31, 0.6);
  -webkit-box-shadow: #b3b3b3 12px 12px 12px;
  -moz-box-shadow: #b3b3b3 12px 12px 12px;
  box-shadow: #b3b3b3 12px 12px 12px;
}

img.center {
  display: block;
  margin: 0 auto;
  padding: 5px;
}

.behavior {
  display: block;
  margin: 0 auto;
  text-align: center;
}

.mobile-card {
  width: 100%;
}
</style>
