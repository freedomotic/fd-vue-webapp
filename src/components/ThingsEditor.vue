<template>
  <div v-if="$q.platform.is.desktop">
    <br />
    <br />
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab name="properties" icon="mail" label="Properties" />
          <q-tab name="appearance" icon="alarm" label="Appearance" />
          <q-tab name="dataSource" icon="movie" label="Data Source" />
          <q-tab name="actions" icon="movie" label="Actions" />
          <q-tab name="controlPanel" icon="movie" label="Control Panel" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="properties">
            <div class="text-h4 q-mb-md">{{$t('properties').toUpperCase()}}</div>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input filled v-model="uuid" :label="$t('uuid')" />
              <q-input filled v-model="name" :label="$t('name')" />
              <q-input filled v-model="description" :label="$t('description')" />
              <q-select
                v-model="protocol"
                :options="getAvailableProtocols"
                :label="$t('protocol')"
              />
              <q-input filled v-model="phisicalAddress" :label="$t('address')" />
              <q-input filled v-model="tags" :label="$t('tags')" />

              <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </q-form>
          </q-tab-panel>

          <q-tab-panel name="appearance">
            <div class="text-h4 q-mb-md">{{$t('appearance').toUpperCase()}}</div>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input filled v-model="positionX" :label="$t('position_X')" />
              <q-input filled v-model="positionY" :label="$t('position_Y')" />
              <q-input filled v-model="rotation" :label="$t('rotation')" />
              <q-input filled v-model="width" :label="$t('width')" />
              <q-input filled v-model="height" :label="$t('height')" />
              <q-select
                v-model="environment"
                :options="getEnvironmentsList"
                :label="$t('environment')"
              />
            </q-form>
          </q-tab-panel>

          <q-tab-panel name="dataSource">
            <div class="text-h4 q-mb-md">{{$t('data_source').toUpperCase()}}</div>TO BE DEFINED
          </q-tab-panel>

          <q-tab-panel name="actions">
            <div class="text-h4 q-mb-md">{{$t('actions').toUpperCase()}}</div>
          </q-tab-panel>

          <q-tab-panel name="control_panel">
            <div class="text-h4 q-mb-md">{{$t('control_panel').toUpperCase()}}</div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
  <div v-else>
    <q-page-container>
      <q-page padding>
        <div class="q-gutter-y-md">
          <q-option-group
            v-model="panel"
            inline
            :options="[
          { label: $t('properties'), value: 'properties' },
          { label: $t('appearance'), value: 'appearance' },
          { label: $t('data_source'), value: 'dataSource' }
        ]"
          />

          <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
            <q-tab-panel name="properties">
              <div class="text-h6">{{$t('properties')}}</div>
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <q-input filled v-model="uuid" :label="$t('uuid')" />
                <q-input filled v-model="name" :label="$t('name')" />
                <q-input filled v-model="description" :label="$t('description')" />
                <q-select
                  v-model="protocol"
                  :options="getAvailableProtocols"
                  :label="$t('protocol')"
                />
                <q-input filled v-model="phisicalAddress" :label="$t('address')" />
                <q-input filled v-model="tags" :label="$t('tags')" />

                <div>
                  <q-btn label="Submit" type="submit" color="primary" />
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </q-form>
            </q-tab-panel>

            <q-tab-panel name="appearance">
              <div class="text-h6">{{$t('appearance')}}</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="dataSource">
              <div class="text-h6">Movies</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </div>
        <q-space />
        <q-btn color="primary" label="Update" class="full-width" />
      </q-page>
    </q-page-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ThingsEditor",
  props: ["thing"],
  components: {},
  computed: {
    ...mapGetters({
      getAvailableProtocols: "getAvailableProtocols"
    }),
    getEnvironmentsList: function() {
      return this.$store.state.environmentsList;
    },
    getHardwareTriggersList: function() {
      return this.$store.state.triggersList.filter(function(item) {
        return item.hardwareLevel === true;
      });
    }
  },
  created() {
    this.uuid = this.thing.uuid;
    this.name = this.thing.name;
    this.description = this.thing.description;
    this.protocol = this.thing.protocol;
    this.phisicalAddress = this.thing.phisicalAddress;
    this.tags = this.thing.tags;
    this.positionX = this.thing.representation[
      this.thing.currentRepresentation
    ].offset.x;
    this.positionY = this.thing.representation[
      this.thing.currentRepresentation
    ].offset.y;
    this.rotation = this.thing.representation[
      this.thing.currentRepresentation
    ].rotation;
    this.width = this.thing.representation[
      this.thing.currentRepresentation
    ].scaleX;
    this.height = this.thing.representation[
      this.thing.currentRepresentation
    ].scaleY;
    this.environment = this.thing.envUUID;
  },
  data() {
    return {
      tab: "properties",
      innerTab: "innerProperties",
      splitterModel: 20,
      panel: "properties",
      uuid: "",
      name: "",
      description: "",
      protocol: "",
      phisicalAddress: "",
      tags: [],
      positionX: "",
      positionY: "",
      rotation: "",
      width: "",
      height: "",
      environment: ""
    };
  },
  methods: {
    updateThing() {
      // retrieve data from Properties tab
      this.thing.name = this.name;
      this.thing.description = this.description;
      this.thing.protocol = this.protocol;
      this.thing.phisicalAddress = this.phisicalAddress;
      this.thing.tags = this.tags;
      // retrieve data from Appearance tab
      this.thing.envUUID = this.environment;
      // call API store action
      this.$store.dispatch("updateThing", this.thing.uuid, this.thing);
      // DEBUG
      alert(JSON.stringify(this.thing, null, 2));
      this.$emit("close");
    },
    cloneThing() {
      this.$store.dispatch("cloneThing", this.thing.uuid);
    },
    changeBehavior: function(thingId, behaviorId, newBehaviorValue) {
      const payload = {
        thingId: thingId,
        behaviorId: behaviorId,
        newBehaviorValue: newBehaviorValue
      };
      this.$store.dispatch("changeBehavior", payload);
    },
    showDeleteThingDialog() {
      this.$modal.show("dialog", {
        title: this.$t("delete_thing"),
        text: this.$t("delete_message") + ' "' + this.thing.name + '"?',
        buttons: [
          {
            title: this.$t("cancel"),
            handler: () => {
              this.$modal.hide("dialog");
            }
          },
          {
            title: this.$t("delete"),
            default: true,
            handler: () => {
              this.$snotify.success(
                'Thing "' + this.thing.name + '" deleted',
                "INFO",
                {
                  timeout: 3000,
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true
                }
              );
              this.$store.dispatch("deleteThing", this.thing.uuid);
              this.$modal.hide("dialog");
              this.$emit("close");
            }
          }
        ]
      });
    },
    showCloneThingDialog() {
      this.$modal.show("dialog", {
        title: this.$t("create_copy"),
        text: this.$t("create_copy_message") + ' "' + this.thing.name + '"?',
        buttons: [
          {
            title: this.$t("cancel"),
            handler: () => {
              this.$modal.hide("dialog");
            }
          },
          {
            title: this.$t("create_copy"),
            default: true,
            handler: () => {
              this.$snotify.success(
                'Thing "' + this.thing.name + '" duplicated',
                "INFO",
                {
                  timeout: 3000,
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true
                }
              );
              this.$store.dispatch("cloneThing", this.thing.uuid);
              this.$modal.hide("dialog");
              this.$emit("close");
            }
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.md-list {
  width: 450px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
}
</style>
