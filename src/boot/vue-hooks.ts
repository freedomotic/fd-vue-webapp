import Component from 'vue-class-component'

export default async () => {
  Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate'
  ])
}
