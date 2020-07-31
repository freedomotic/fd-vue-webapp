<template>
        <q-btn class="close-button" rounded @click="closeWindow" icon="close"/>
</template>

<<script>
export default {
  data () {
    return {}
  },
  methods: {
    closeWindow: function () {
      this.$store.commit('closeSection')
    }
  }
}
</script>

<style scoped>
  .close-button {
        background-color: red;
        border-radius: 50%;
	    width: 50px;
	    height: 50px;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        color:white;
   }

</style>

        
