<template>
 <md-card>
  <md-card-header>
    <md-card-media>
     <img :src="icon">
    </md-card-media>  
  </md-card-header>
      
  <md-card-header>    
    <md-card-header-text>
      <div class="md-title">{{ name }}</div>
      <div class="md-subhead">{{ description }}</div>
    </md-card-header-text>
  </md-card-header>
  <md-card-actions>
     <md-button>{{$t('settings')}}</md-button>
     <md-button>{{$t('uninstall')}}</md-button>
  </md-card-actions> 
 </md-card>
</template>

<script>
  export default {
    props: {
      name: String,
      description: String,
      icon: String,
      category: String,
      uuid: String,
      currentStatus: String
    }
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
    min-height: 250px;
    background-color: #8bae2d;
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