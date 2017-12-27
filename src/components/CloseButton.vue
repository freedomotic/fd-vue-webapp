<template>
        <md-content class="close-button" @click="closeWindow">
            <md-icon>close</md-icon>
        </md-content>
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
        left: 0;
        z-index: 2;
        color:white;
        text-align: center;
        padding: 12px 3px 0 3px;
        font-size: small;
        font-weight: bolder;
        box-shadow: 1px 1px 1px #444;
        border: 2px solid white;
    }

  .md-icon.md-theme-default.md-icon-font {
    color: white;
   }
</style>

        