<template>
    <div id="corner">
      <md-icon :md-src="icon"></md-icon>
    </div>
</template>

<script>
  export default {
    props: {
      orientation: String,
      icon: String
    },
    orientationChanged: function () {
      if (this.orientation) {
        this.$.corner.classList.add(this.orientation)
      }
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
      paper-icon-button::shadow #icon {
        position: relative;
        width: 40px;
        height: 40px;
        color: #fff;
      }
      .top-right paper-icon-button {
        top: 0px;
        left: 45px;
      }
      .bottom-right paper-icon-button {
        top: -53px;
        left: 37px;
      }
      .top-left paper-icon-button {
        top: -90px;
        left: 0px;
      }
      .bottom-left paper-icon-button {
        top: -53px;
        left: -90px;
      }
</style>