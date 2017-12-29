<template>
  <md-content id="bottom-btn">
    <md-icon id="bottom-btn-icon" class="md-size-2x">keyboard_arrow_up</md-icon>
  </md-content>
</template>

<script>
export default {
  name: 'BottomMenu',
  data () {
    return {}
  }
}
</script>

<style scoped>
#bottom-btn {
        left: 0; 
        right: 0; 
        bottom: 0;
        margin-left: auto; 
        margin-right: auto; 
	      width: 80px;
        position: absolute;
        z-index: 2;
        color:#fafafa;
        text-align: center;
        text-transform: uppercase;
        background-color: rgba(80,80,80,0.7);
        user-select: none;
        cursor: pointer;
        font-weight: 700;
        text-decoration: none;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        border-bottom: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }


.md-icon.md-theme-default.md-icon-font {
    color: #fafafa;
    font-weight: normal;
}  
</style>


