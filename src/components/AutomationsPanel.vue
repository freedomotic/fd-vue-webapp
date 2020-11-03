<template>
  <div v-if="automationsOpen && $q.platform.is.desktop" class="current-section">
    <q-layout>
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="undo" class="q-mr-sm" @click="openSettings" />
          <q-toolbar-title>{{$t('automations').toUpperCase()}}</q-toolbar-title>
          <q-btn color="secondary" label="Add new automation" @click='addNewAutomation = true' />
          <q-btn flat round dense icon="close" @click="closeWindow" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-list bordered class="rounded-borders" style="max-width: 70%">
          <q-item
            v-for="automation in getAutomationsList"
            :key="automation.uuid"
            clickable
            v-ripple
          >
            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-weight-medium">{{ automation.shortDescription }}</span>
              </q-item-label>
            </q-item-section>

            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn class="gt-xs" size="12px" flat dense round icon="edit" />
                <q-btn
                  class="gt-xs"
                  size="12px"
                  flat
                  dense
                  round
                  icon="delete"
                  @click="confirmDeletion"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-separator spaced />
        </q-list>
      </q-page-container>
    </q-layout>
    <add-new-automation v-model='addNewAutomation' /> 
  </div>
  <div v-else-if="$q.platform.is.mobile" class='column'>
    <q-btn class="self-center q-my-sm" color="secondary" label="Add new automation" @click='addNewAutomation = true' />
    <q-card
      v-for="automation in getAutomationsList"
      :key="automation.uuid"
      bordered
      class="my-card"
    >
      <q-card-section class="text-black">
        <div class="text-subtitle2">{{ automation.shortDescription }}</div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="around">
        <q-btn flat icon="edit" class="small-icon" />
        <q-btn flat icon="delete" class="small-icon" @click="confirmDelete = true" />
      </q-card-actions>
    </q-card>
    <q-dialog v-model="confirmDelete" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm">Delete automation</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Confirm" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <add-new-automation v-model='addNewAutomation' />
  </div>
</template>

<script>
import AddNewAutomation from "./dialog/AddAutomationDialog.vue";

export default {
  computed: {
    automationsOpen: function() {
      return this.$store.state.automationsOpen;
    },
    getAutomationsList: function() {
      return this.$store.state.automationsList;
    }
  },
  mounted() {
    this.$store.dispatch("getAutomationsList");
    this.$store.dispatch("getTriggersList");
    this.$store.dispatch("getCommandsList");
  },
  components: {
    AddNewAutomation
  },
  data() {
    return {
      confirmDelete: false,
      addNewAutomation: false
    };
  },
  methods: {
    openSettings: function() {
      this.$store.commit("showSetup");
    },
    closeWindow: function() {
      this.$store.commit("closeSection");
    },
    confirmDeletion() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to save this session?",
          ok: true,
          cancel: true
        })
        .onOk(() => {});
    },
    showDeleteAutomationDialog(automation) {
      var automationUuid = automation.uuid;
      var automationName = automation.shortDescription;
      this.$modal.show("dialog", {
        title: "Delete automation",
        text: 'Do you want to delete "' + automationName + '" automation?',
        buttons: [
          {
            title: "CANCEL",
            handler: () => {
              this.$modal.hide("dialog");
            }
          },
          {
            title: "CONFIRM",
            default: true,
            handler: () => {
              this.$snotify.success(
                'Automation "' + automationName + '" deleted',
                "INFO",
                {
                  timeout: 3000,
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true
                }
              );
              this.$store.dispatch("deleteAutomation", automationUuid);
              this.$modal.hide("dialog");
            }
          }
        ]
      });
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
  overflow-y: scroll;
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
  background: transparent;
}

.q-list {
  width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
}
</style>
