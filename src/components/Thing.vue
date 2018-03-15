<template>
 <div>    
  <md-card md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{thing.name}}</div>
          <div class="md-subhead">Normal size</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/plugin-running.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
         <md-button class="md-icon-button" @click="showEditThingModal">
            <md-icon>settings</md-icon>
         </md-button>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            <div v-for="behavior in thing.behaviors">
              {{behavior.name}}
            </div> 
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
 </div>
</template>

<script>
import ThingsEditor from './ThingsEditor.vue'

export default {
  props: [ 'thing' ],
  components: {
    ThingsEditor
  },
  methods: {
    showEditThingModal () {
      this.$modal.show(ThingsEditor, {
        thing: this.thing
      }, {
      })
    }
  }
}
</script>
<style scoped>
  .md-card {
    width: 350px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    background-color: #ededed
  }
  
  .md-card-media {
      width: 64px;
      height: 64px;
  }
</style>