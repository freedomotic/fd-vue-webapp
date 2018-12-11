<template>
  <q-page padding>
    <div class="row gutter-x-sm">
      <div
        class="gt-sm col-xs-12 col-sm-4 col-md-4 col-lg-4"
      >
        <q-list link no-border separator>
          <q-item
            v-for="({to, icon, label}, index) in options"
            :key="index"
            :to="to"
          >
            <q-item-side :icon="icon" />
            <q-item-main :label="label" />
          </q-item>
        </q-list>
      </div>
      <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
        <router-view />
      </div>
    </div>

    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
    >
      <q-page-sticky
        class="lt-md"
        :offset="[10, 10]"
        position="bottom-right"
      >
        <q-btn
          color="primary"
          icon="settings"
          @click="actionSheet = true"
          fab
        />
      </q-page-sticky>
    </transition>
    <q-action-sheet
      title="Settings"
      v-model="actionSheet"
      :grid="$q.screen.sm"
      :actions="options"
      @ok="ok"
    />
  </q-page>
</template>

<script>
import { options } from '../layer/settings'

export default {
  data: () => ({
    isMoving: false,
    actionSheet: false
  }),
  computed: {
    options() {
      return options
    }
  },
  methods: {
    ok({to}) {
      if (to) {
        this.$router.push(to)
      }
    }
  }
}
</script>
