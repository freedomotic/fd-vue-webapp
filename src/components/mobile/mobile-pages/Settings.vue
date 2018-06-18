<template>
  <v-ons-page>
     <v-ons-card v-for="page of pages" :key="page.label"
        @click="push(page.component, page.label)"
      >
        <div class="title">{{ $t(page.label) }}</div>
      </v-ons-card>
  </v-ons-page>
</template>

<script>
import Automations from './Automations.vue'
import System from './System.vue'
import Roles from './Roles.vue'
import Languages from './Languages.vue'

export default {
  props: ['pageStack'],

  data () {
    return {
      pages: [
        {
          component: Automations,
          label: 'automations',
          desc: 'Description.'
        },
        {
          component: System,
          label: 'system',
          desc: 'Description.'
        },
        {
          component: Roles,
          label: 'roles',
          desc: 'Description.'
        },
        {
          component: Languages,
          label: 'languages',
          desc: 'Description.'
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
              backLabel: 'Settings',
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
