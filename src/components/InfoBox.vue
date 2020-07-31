<template>
  <div @click="openWindow">
    <q-card class="inner-text" :style="dataColor">
        <q-card-section>
          <q-icon size="128px" :name="icon"/>
        </q-card-section>
        <q-card-section class="inner-text">{{title}}</q-card-section>
    </q-card>
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

  .q-card {
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
  
</style>

