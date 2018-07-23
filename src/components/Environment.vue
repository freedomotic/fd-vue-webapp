<template>
  <div class='environment-container'>
    <div style="z-index:1;">
       <h4 id="envname">{{environment.name}}</h4>
    </div>
    <canvas ref='canvas' class='environment-canvas' width="700" height="550"/>    
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
      backgroundImg: new Image(this.environment.width, this.environment.height)
    }
  },
  methods: {
    canvasImage: function () {
      this.backgroundImg.addEventListener('load', function () {
        var wrh = this.backgroundImg.width / this.backgroundImg.height
        var newWidth = this.canvas.width
        var newHeight = newWidth / wrh
        if (newHeight > this.canvas.height) {
          newHeight = this.canvas.height
          newWidth = newHeight * wrh
        }
        var xOffset = newWidth < this.canvas.width ? ((this.canvas.width - newWidth) / 2) : 0
        var yOffset = newHeight < this.canvas.height ? ((this.canvas.height - newHeight) / 2) : 0
        this.context.drawImage(this.backgroundImg, xOffset, yOffset, newWidth, newHeight)
      }.bind(this), false)
    }
  },
  mounted: function () {
    this.canvas = this.$refs.canvas
    this.context = this.canvas.getContext('2d')
    this.backgroundImg.src = require('../assets/map2.png')
    this.backgroundImg.className = 'environment-image'
    this.canvasImage()
  }
}
</script>

<style scoped>
      .environment-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
      }

      .environment-canvas {
        position: absolute;
        margin-top: 4%;
        background-color: white;
        z-index: 1;
      }

      .thing {
        display: block;
        position: absolute;
        z-index: 1000;
        transition: all 1s ease-in-out;
      }
      
      #envname {
        margin: 2%;
        padding: 0 5px;
        background-color: rgba(120, 120, 120, 0.5);
        color: white;
        left: 15%;
        position: absolute;
      }
      
</style>


