<template>
  <v-ons-page>
      <v-ons-card v-for="page of pages" :key="page.label"
        @click="push(page.component, page.label)"
      >
        <div class="title">{{$t(page.label)}}</div>
      </v-ons-card>
  </v-ons-page>
</template>

<script>
import ws from '@/utils/websocket'
import Actuators from './ActuatorsPanel.vue'
import Environments from './Environments.vue'
import Lights from './LightsPanel.vue'
import Sensors from './SensorsPanel.vue'
import Temperature from './TemperaturePanel.vue'
import ThingsPanel from './ThingsPanel.vue'
import Info from './Info.vue'

export default {
  props: ['pageStack'],

  data () {
    return {
      pages: [
        {
          component: Environments,
          label: 'environments'
        },
        {
          component: Lights,
          label: 'lights'
        },
        {
          component: Temperature,
          label: 'temperature'
        },
        {
          component: Sensors,
          label: 'sensors'
        },
        {
          component: Actuators,
          label: 'actuators'
        },
        {
          component: ThingsPanel,
          label: 'all_things'
        },
        {
          component: Info,
          label: 'info'
        }
      ]
    }
  },
  created () {
    ws.openWebSockets()
  },
  mounted () {
    this.$store.dispatch('getThingsList')
    this.$store.dispatch('getEnvironmentsList')
  },
  methods: {
    push (page, key) {
      this.pageStack.push({
        extends: page,
        data () {
          return {
            toolbarInfo: {
              backLabel: 'Home',
              title: key
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.intro {
  text-align: center;
  padding: 0 20px;
  margin-top: 40px;
}

ons-card {
  cursor: pointer;
  color: #333;
}

.card__title, .card--material__title {
  font-size: 20px;
}
</style>
