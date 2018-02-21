<template>
  <v-ons-page>
    <p class="intro">
      Settings<br><br>
    </p>

      <v-ons-card v-for="page of pages" :key="page.label"
        @click="push(page.component, page.label)"
      >
        <div class="title">{{ page.label }}</div>
        <div class="content">{{ page.desc }}</div>
      </v-ons-card>
  </v-ons-page>
</template>

<script>
import Plugins from './Plugins.vue'
import Automations from './Automations.vue'
import System from './System.vue'
import Users from './Users.vue'
import Roles from './Roles.vue'
import Languages from './Languages.vue'

export default {
  props: ['pageStack'],

  data () {
    return {
      pages: [
        {
          component: Plugins,
          label: 'Plugins',
          desc: 'Manage all plugins.'
        },
        {
          component: Automations,
          label: 'Automations',
          desc: 'Description.'
        },
        {
          component: System,
          label: 'System',
          desc: 'Description.'
        },
        {
          component: Users,
          label: 'Users',
          desc: 'Description.'
        },
        {
          component: Roles,
          label: 'Roles',
          desc: 'Description.'
        },
        {
          component: Languages,
          label: 'Languages',
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
