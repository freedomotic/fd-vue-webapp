<template>
    <div>
      <q-icon :name="icon" size="lg" class="text-white">
        <q-tooltip>{{tooltip}}</q-tooltip>
      </q-icon>
    </div>
</template>

<script>
  export default {
    props: {
      tooltip: String,
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
      .top-right .q-icon {
        top:  5px;
        left: 30px;
      }
      .bottom-right .q-icon {
        top: -53px;
        left: 37px;
      }
      .top-left .q-icon {
        top: -85px;
        left: 0px;
      }
      .bottom-left .q-icon {
        top: -53px;
        left: -90px;
      }
</style>
