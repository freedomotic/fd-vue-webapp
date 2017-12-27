<template>
  <div>
    <bugs/>
    <div id="img-background" :style="backgroundStyle" :class="{active: !!backgroundStyle.backgroundImage}"/>
  </div>
</template>

<script>
import Bugs from './Bugs.vue'
import bkg from '../assets/bkgnd.jpg'

export default {
  name: 'Background',
  components: {
    'bugs': Bugs
  },
  data () {
    return {
      backgroundStyle: {
        backgroundColor: '#ddd',
        backgroundImage: ''
      }
    }
  },
  created () {
    this.backgroundStyle.backgroundImage = 'url(' + bkg + ')'
  }
}
</script>

<style scoped>
#img-background {
    position: fixed;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }
  #img-background:after {
    position: absolute;
    top: 0;
    left: 0;
    background: #ddd;
    transition: opacity 0.5s linear;
    width: 100%;
    height: 100%;
    display: block;
    content: "";
  }

  #img-background.active:after {
    opacity: 0;
  }
</style>
