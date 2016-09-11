
<template>
  <div class="pano">
    <div id='panoplayer' v-panoplayer="pano" :status="normal" :muted="muted"></div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      muted: false,
      pano: {
        url: require('../_assets/index.mp4')
      }
    }
  },
  created () {
    var _this = this
    setTimeout(() => {
      _this.muted = true
    }, 2000)
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html,
  body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Helvetica, sans-serif;
  }

  #pano,
  #panoplayer{
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
  }

</style>
