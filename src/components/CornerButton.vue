<template>
    <div>
      <md-button class="md-icon-button md-primary">
        <i class="material-icons white">{{icon}}</i>
        <md-tooltip :md-direction="tooltipDirection">{{tooltip}}</md-tooltip>
      </md-button>
    </div>
</template>

<script>
  export default {
    props: {
      tooltip: String,
      tooltipDirection: String,
      icon: String
    }
}
</script>

<style>
      :host {
        display: block;
        opacity: 0.9;
        width: 90px;
        height: 90px;
        z-index: 120;
      }
      .top-right,
      .top-left,
      .bottom-right,
      .bottom-left {
        position: relative;
        width: 0;
        height: 0;
        border-style: solid;
      }
      .top-right,
      .top-left {
        top: 0px;
      }
      .bottom-right,
      .bottom-left {
        bottom: 0px;
      }
      .top-right {
        right: 0px;
        border-width: 0 90px 90px 0;
        border-color: transparent #444 transparent transparent;
      }
      .bottom-right {
        right: 0px;
        border-width: 90px 90px 0 0;
        border-color: transparent #444 transparent transparent;
      }
      .bottom-left {
        right: 0px;
        border-width: 90px 0 0 90px;
        border-color: transparent transparent transparent #777;
      }
      .top-left {
        left: 0px;
        border-width: 90px 90px 0px 0px;
        border-color: #b33 transparent transparent transparent;
      }
      paper-button {
        position: fixed;
        width: 40px;
        height: 40px;
        color: #fff;
      }
      .top-right button {
        top:  5px;
        left: 30px;
      }
      .bottom-right button {
        top: -53px;
        left: 37px;
      }
      .top-left button {
        top: -85px;
        left: 0px;
      }
      .bottom-left button {
        top: -53px;
        left: -90px;
      }
</style>
