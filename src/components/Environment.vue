<template>
  <div class="external-container" ref="container">
    <div style="z-index:1;">
       <h3 id="envname">{{environment.name}}</h3>
    </div>
    <canvas ref='environmentCanvas' class='environment-canvas' :width="environment.width" :height="environment.height"/>
    <div v-for="thing in getEnvironmentThingsList">
      <img v-if="!moveEnabled" class="thing" :id="thing.uuid" src="../assets/icons/led-green.png"
       :style="objPosition(thing.representation[0].offset)"></img>
      <img v-else class="thing movable" :id="thing.uuid" src="../assets/icons/led-green.png"
       :style="objPosition(thing.representation[0].offset)" draggable="true"></img>
    </div>    
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
  watch: {
    scaleFactor () {
      console.log('Current scale factor ' + this.scaleFactor)
      var scaleStr = 'scale(' + this.scaleFactor + ',' + this.scaleFactor + ')'
      var element = this.$refs.container
      element.style.transform = scaleStr
      element.style.WebkitTransform = scaleStr
      element.style.msTransform = scaleStr
      var verticalOffset = -(this.environment.height * (1 - this.scaleFactor)) / 2 + 5
      element.style.top = verticalOffset + 'px'
    }
  },
  data () {
    return {
      showZones: false,
      scaleFactor: 1.0,
      sizing: 'contain',
      moveEnabled: false,
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
    },
    objPosition: function (offset) {
      console.log('left:' + offset.x + 'px;' + 'top:' + offset.y + 'px;')
      return 'left:' + offset.x + 'px;' + 'top:' + offset.y + 'px;'
    },
    resize: function () {
     // set this.scaleFactor and let scaleFactorChanged() do the rest
      this.scaleFactor = this.getScaleFactor()
    },
    getScaleFactor: function () {
      var scaleFactor = 1
      var scaleFactorX = (window.innerWidth - 50) / this.environment.width
      var scaleFactorY = (window.innerHeight - 50) / this.environment.height
      console.log(scaleFactorX + ':' + scaleFactorY)
      if (this.sizing === 'contain') {
        scaleFactor = Math.min(scaleFactorX, scaleFactorY)
      } else if (this.sizing === 'cover') {
        scaleFactor = Math.max(scaleFactorX, scaleFactorY)
      }
      return scaleFactor
    },
    dragStartHandler: function (e) {
      // set avatar icon
      var dragInfo = e.detail
      dragInfo.scaleFactor = this.scaleFactor
      // dragInfo.moveService = this.$.moveService;
      console.log(dragInfo)
      if (dragInfo.event.path[0].attributes.draggable) {
        dragInfo.avatar.style.cssText = 'border: 3px solid black; width: ' + 50 * this.scaleFactor + 'px; height:' + 50 * this.scaleFactor + 'px; border-radius: 0 50px 50px 50px; background-color: rgba(200,200,200,0.3)'
        console.log(dragInfo.event.path[0].id)
        dragInfo.drag = function () {}
        dragInfo.drop = this.drop
      }
    },
    drop: function (dragInfo) {
      // move Thing to drop position
      // var f = dragInfo.framed
      // var thing = dragInfo.event.target.templateInstance.model.envObject
      // var newPos = {
      //  x: f.x / dragInfo.scaleFactor,
      //  y: f.y / dragInfo.scaleFactor
      // }
      // POST updated data.
      // var url = 'things/' + thing.uuid + '/move/' + Math.floor(newPos.x) + '/' + Math.floor(newPos.y)
      //  dragInfo.moveService.fdtype = url;
      //  dragInfo.moveService.go();
    },
    toggleMove: function () {
      this.moveEnabled = !this.moveEnabled
    },
    doCopy: function () {
    },
    doDelete: function () {
    },
    getResource: function (resourceId) {
      this.$store.dispatch('getResource', resourceId).then((data) => {
        return (data)
      }).catch(() => {
      })
    }
  },
  mounted: function () {
    this.canvas = this.$refs.environmentCanvas
    this.context = this.canvas.getContext('2d')
    this.backgroundImg.src = require('../assets/map2.png')
    this.backgroundImg.className = 'environment-image'
    this.canvasImage()
    this.resize()
    var element = this
    window.addEventListener('resize', function (event) {
      element.resize()
    })
  }
}
</script>

<style scoped>
      .external-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
      }

      .environment-canvas {
        position: absolute;
        margin-top: 4%;
        background-color: red;
        z-index: 1;
      }

      .thing {
        display: block;
        position: absolute;
        z-index: 1000;
        transition: all 1s ease-in-out;
      }
   
      .movable {
        border: 3px solid black;
        border-radius: 0 50px 50px 50px;
        background-color: rgba(200, 200, 200, 0.3);
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


