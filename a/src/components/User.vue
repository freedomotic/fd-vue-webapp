<template>
 <md-card>
  <md-card-header>
    <md-card-media>
    </md-card-media>  
  </md-card-header>
      
  <md-card-header>    
    <md-card-header-text>
      <div class="md-title">{{ getUserFromStore.name }}</div>
      <div class="md-subhead">{{ getUserFromStore.roles }}</div>
    </md-card-header-text>
  </md-card-header>
  <md-card-actions>
     <md-button class="md-icon-button" >
       <md-icon>settings</md-icon>
     </md-button>
     <md-button class="md-icon-button">
       <md-icon>delete</md-icon>
     </md-button>
  </md-card-actions> 
 </md-card>
</template>

<script>
  export default {
    props: {
      index: ''
    },
    data () {
      return {
        image: ''
      }
    },
    computed: {
      getUserFromStore: function () {
        return this.$store.state.usersList[this.index]
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .md-card .md-title {
    font-size: 32px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 28px;
    text-align: center;
   }
   .md-card .md-subhead {
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 20px;
    text-align: center;
   }
   
   .md-theme-default.md-card {
    width: 300px;
    height: 300px;
    background-color: #8bae2d;
   }
  .md-card-actions {
    position: absolute;
    height: 50px;
    width: 100%;
    bottom: 0;
  }
   .md-card .md-card-header .md-card-media {
      width: 64px;
      -ms-flex: 0 0 64px;
          flex: 0 0 64px;
      height: 64px;
      margin: auto;
    }
    
    .md-card .md-card-actions {
      background-color: #ffffff;
    }
</style>
