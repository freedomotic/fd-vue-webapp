<template>
  <div @click="openWindow">
    <md-card>
      <md-card-content class="inner-text" :style="dataColor">
          <md-icon class="md-size-5x">{{icon}}</md-icon>
          <md-card-content>{{title}}</md-card-content>
      </md-card-content>
    </md-card>
   </div> 
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['color', 'action', 'icon', 'title'],
  computed: {
    dataColor: function () {
      return 'color: #' + this.color
    }
  },
  methods: {
    openWindow () {
      this.$store.dispatch('open' + this.action)
    }
  }
}
</script>

<style scoped>
  .md-card {
    margin: auto;
    background-color: #222222;
    text-transform: uppercase;
    height: 300px;
  }

  .inner-text {
    text-align: center;
    position: sticky;
    top: 0%;
    cursor: pointer;
  }
  
  .md-icon.md-theme-default.md-icon-font {
    color: inherit;
  } 
</style>

