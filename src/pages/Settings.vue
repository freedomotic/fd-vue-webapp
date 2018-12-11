<template>
  <q-page padding>
    <div class="row gutter-md">
      <div v-if="$q.screen.gt.sm" class="col-xs-12 col-lg-4">
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
      <div v-else class="col-12">
        <q-btn
          icon="more_vert"
          label="select"
          @click="actionSheet = true"
        />
      </div>
      <div class="col-xs-12 col-lg-8">
        <router-view />
      </div>
    </div>
    <q-action-sheet
      title="Settings"
      v-model="actionSheet"
      :actions="options"
      @ok="ok"
    />
  </q-page>
</template>

<script>
import { options } from '../layer/settings'

export default {
  data: () => ({actionSheet: false}),
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
