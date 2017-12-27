<template>
  <div>
    <bugs/>
    <div id="img-background" :style="backgroundStyle" :class="{active: !!backgroundStyle.backgroundImage}"/>
    <bottom-menu/>
  </div>
</template>

<script>
import Bugs from './Bugs.vue'
import BottomMenu from './BottomMenu.vue'

export default {
  name: 'Background',
  components: {
    'bugs': Bugs,
    'bottom-menu': BottomMenu
  },
  data () {
    return {
      backgroundStyle: {
        backgroundColor: '#ddd',
        backgroundImage: ''
      },
      backgrounds: [
        'https://c1.staticflickr.com/1/38/104792456_71001aaea2_b_d.jpg',
        'https://c2.staticflickr.com/6/5552/15171955576_612f79e75d_h_d.jpg',
        'https://c1.staticflickr.com/1/178/472387994_8bee2dfbee_b_d.jpg',
        'https://c1.staticflickr.com/9/8389/8505463101_fac8481473_h_d.jpg',
        'https://c2.staticflickr.com/6/5159/13983804179_a5b92250d3_o_d.jpg',
        'https://c1.staticflickr.com/3/2788/4517193518_c8cebf5f2e_o_d.jpg',
        'https://c1.staticflickr.com/5/4099/4911433144_e6b761b3f9_b_d.jpg',
        'https://c2.staticflickr.com/6/5065/5577311905_eb2940ac89_b_d.jpg'
      ]
    }
  },
  created () {
    let imgSrc = this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)]
    this.backgroundStyle.backgroundImage = 'url(' + imgSrc + ')'
  }
}
</script>

<style scoped>
#img-background {
    position: fixed;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }
  #img-background:after {
    position: absolute;
    top: 0;
    left: 0;
    background: #ddd;
    transition: opacity 0.5s linear;
    width: 100%;
    height: 100%;
    display: block;
    content: "";
  }

  #img-background.active:after {
    opacity: 0;
  }
</style>
