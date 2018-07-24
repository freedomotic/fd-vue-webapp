<template>
    <div class="parent-box">
        <slot></slot>
    </div>    
</template>

<script>
// common container for grid representation
export default {
  name: 'GridContainer',
  data () {
    return {}
  },
  mounted: function () {
    console.log('GridMounted')
  }
}
</script>

<style scoped>
    .item {
        padding: 0.5em;
        width: 25%;
      }
    .parent-box {
       display: flex;
       flex-flow: row wrap;
       justify-content: space-around;
       padding: 1em;
       margin: 1em auto;
    }
     /*this helps in having the last line of the flex grid properly aligned*/
    .parent-box:after {
      content: "";
      flex: auto;
    }
</style>
