<template>
  <q-btn id="bottom-btn" @click="showThings">
    <q-icon id="bottom-btn-icon" size="xl" name="keyboard_arrow_up"></q-icon>
  </q-btn>
</template>

<script>
export default {
  name: 'BottomMenu',
  data () {
    return {}
  },
  methods: {
    showThings () {
      this.$store.commit('showThings')
    }
  }
}
</script>

<style scoped>

#bottom-btn {
        left: 0; 
        right: 0; 
        bottom: 0;
        margin-left: auto; 
        margin-right: auto; 
	      width: 80px;
        position: absolute;
        z-index: 2;
        color:#fafafa;
        text-align: center;
        text-transform: uppercase;
        background-color: rgba(80,80,80,0.7);
        user-select: none;
        cursor: pointer;
        font-weight: 700;
        text-decoration: none;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        border-bottom: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

</style>


