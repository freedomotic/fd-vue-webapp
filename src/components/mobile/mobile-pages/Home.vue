<template>
  <v-ons-page>
    <p class="intro">
      Freedomotic Mobile Client<br><br>
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
import Environments from './Environments.vue'

export default {
  props: ['pageStack'],

  data () {
    return {
      pages: [
        {
          component: Environments,
          label: 'Environments',
          desc: '.'
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
