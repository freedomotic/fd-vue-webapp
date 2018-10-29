<template>
  <div class="external-container" ref="container">

    <div class="test">

    <div class="top-nav">
      <div class="menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div >
         <h3 id="envname">{{environment.name}}</h3>
      </div>
    </div>

    <div class="display">
      <canvas ref='environmentCanvas' class='environment-canvas' :width="environment.width" :height="environment.height" :style="{'min-width': environment.width + 'px', 'min-height': environment.height + 'px'}"/>
      <div v-for="thing in getEnvironmentThingsList" :key="thing.uuid">

        <span v-if="!moveEnabled" class="thing" :style="objPosition(thing.representation[0].offset)">
          <md-tooltip md-direction='right' class='pre-render-line'>{{setThingTooltipContent(thing)}}</md-tooltip>
          <img :id="thing.uuid" :src="getThingIcon(thing.representation[thing.currentRepresentation].icon)" @contextmenu="openThingEditor(thing)" @click="sendClickEvent(thing.uuid)"/>
        </span>

        <span v-else class="thing movable" :style="objPosition(thing.representation[0].offset)">
        <img :id="thing.uuid" :src="getThingIcon(thing.representation[thing.currentRepresentation].icon)" draggable="true"/>
        </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThingsEditor from './ThingsEditor.vue'

export default {
  name: 'Environment',
  props: {
    environment: {}
  },
  components: {
    ThingsEditor
  },
  computed: {
    getEnvironmentThingsList () {
      let envId = this.environment.uuid
      return this.$store.state.thingsList.filter(function (item) {
        return item.envUUID === envId
      })
    }
  },
  watch: {
    scaleFactor () {
      var scaleStr = 'scale(' + this.scaleFactor + ',' + this.scaleFactor + ') translateX(-50%)'
      var element = this.$refs.container
      element.style.transform = scaleStr
      element.style.WebkitTransform = scaleStr
      element.style.msTransform = scaleStr
      // var horizontalOffset = (window.innerWidth - this.environment.width * this.scaleFactor) / 2
      // element.style.left = horizontalOffset + 'px'
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
      console.log(scaleFactorX + ':' + scaleFactorY, window.innerWidth, window.innerHeight)
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
      // CALL moveThing(thing.uuid, Math.floor(newPos.x), Math.floor(newPos.y))
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
    setThingTooltipContent (thing) {
      let behaviors = ''
      thing.behaviors.forEach((behavior) => {
        behaviors += behavior.name + ':' + ' ' + behavior.value
        if (behavior.active) {
          behaviors += ' [Active]' + '\n'
        } else {
          behaviors += ' [Inactive]' + '\n'
        }
      })
      return thing.name + '\n' + thing.description + '\n' + behaviors
    },
    moveThing: function (thingId, x, y) {
      const payload = {'thingId': thingId, 'x': x, 'y': y}
      this.$store.dispatch('moveThing', payload)
    },
    sendClickEvent: function (thingId) {
      this.$store.dispatch('sendObjectClickEvent', thingId)
    },
    openThingEditor: function (thing) {
      this.$modal.show(ThingsEditor, {
        thing: thing
      }, {
        adaptive: true,
        resizable: true,
        clickToClose: false,
        scrollable: true,
        width: '50%',
        height: 'auto'
      })
    },
    getThingIcon: function (resourceId) {
      return this.axios.defaults.baseURL + '/resources/' + resourceId
    },
    basename (path) {
      let separator = '/'
      const windowsSeparator = '\\'
      if (path.includes(windowsSeparator)) {
        separator = windowsSeparator
      }
      return path.slice(path.lastIndexOf(separator) + 1)
    }
  },
  mounted: function () {
    this.$store.dispatch('getResource', this.basename(this.environment.backgroundImage)).then((data) => {
      this.backgroundImg.src = data
      this.backgroundImg.className = 'environment-image'
    })
    this.canvas = this.$refs.environmentCanvas
    this.context = this.canvas.getContext('2d')
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
        nonodisplay: flex;
        nonoflex-flow: row wrap;
        justify-content: center;
        position: absolute;
        top: 0;
        left:50%;
        width: 100%;
        min-width: 1500px;
        max-width: 1078px;
        height: 100%;
        transform-origin: top left;
        background-color: white;
        /*top: 10%;*/

      }

      @media(max-width:900px){
        .external-container{
          top: 10%;
        }
      }
      .environment-canvas {
        position: absolute;
        margin-top: 2%;
        background-color: white;
        z-index: 1;
        width: 100%;
        height: 100%;
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


      .pre-render-line {
        white-space: pre;
        height: auto;
      }
      .top-nav{
        position: absolute;
        width: 100%;
        height: 10%;
        top: 0;
        display: flex;
        justify-content: space-between;
      }
      .display{
        position: absolute;
        width: 100%;
        height: 90%;
        bottom: 0;
      }
      .menu{
        max-width: 100px;
        width: 100%;
        margin: 2rem 0 0 2rem;
      }
      .menu div{
        width: 35px;
        height: 5px;
        background-color: black;
        margin: 6px 0;
      }
      #envname {
        padding: 20px;
        background-color: rgba(120, 120, 120, 0.5);
        color: white;
        z-index: 1000;
        margin: 2rem 2rem 0 0;
      }
      /*.test{*/
        /*position: relative;*/
        /*width: 100%;*/
        /*height: 100%;*/
      /*}*/

</style>
