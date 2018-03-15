<template>
  <div>
    <div style="z-index:100;">
       <h4 id="envname">{{environment.name}}</h4>
    </div>
    <canvas ref="canvas" 
            width="850" 
            height="750" 
    >
    </canvas>
    
  </div>  
</template>

<script>
/* global Image */
export default {
  name: 'Environment',
  props: {
    environment: {}
  },
  computed: {
    getEnvironmentThingsList: function (envId) {
      // should be mapped to action getEnvironmentThingsList
      return this.$store.state.environmentThingsList
    }
  },
  data () {
    return {
      canvas: {},
      context: {},
      backgroundImg: new Image(850, 750)
    }
  },
  methods: {
    canvasImage: function () {
      this.backgroundImg.addEventListener('load', function () {
        this.context.drawImage(this.backgroundImg, 0, 0)
      }.bind(this), false)
    }
  },
  mounted: function () {
    this.canvas = this.$refs.canvas
    this.context = this.canvas.getContext('2d')
    this.backgroundImg.src = require('../assets/map2.png')
    this.canvasImage()
  }
}
</script>

<style scoped>
      canvas {
        position: absolute;
        background-color: white;
        z-index: 11;
      }
      
      .thing {
        display: block;
        position: absolute;
        z-index: 1000;
        transition: all 1s ease-in-out;
      }
      
      #envname {
        margin: 10px;
        padding: 0 5px;
        background-color: rgba(120, 120, 120, 0.5);
        color: white;
      }
      
</style>


