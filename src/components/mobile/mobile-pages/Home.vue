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
import Actuators from './Actuators.vue'
import Environments from './Environments.vue'
import Lights from './Lights.vue'
import Sensors from './Sensors.vue'
import Temperature from './Temperature.vue'

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
        }
      ]
    }
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
