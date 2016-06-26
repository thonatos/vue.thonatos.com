<template>
  <div class="player">
    <div class="info">
      <h2 class="title"></h2>
    </div>
    <div class="album">
      <img src="" alt="">
    </div>
    <div class="action">
      <a href="#" class="player-play-pause" v-on:click="play"><i class="fa fa-play"></i><i class="fa fa-pause hidden"></i></a>
      <input class="player-seekbar" type="range" min="0" max="10" value="5" v-on:change="volumeChange">
      <a href="#" class="player-next" v-on:click="next"><i class="fa fa-forward"></i></a>
    </div>
    <div class="info">
      <span id="music_name"></span><span id="artist"></span>
    </div>
    <div id="lrc" class="lrc">
    </div>
  </div>

  <div class="playlist">
    <ul>
      <li><a href="/fm/80546135">低吟浅唱,历久弥醇的欧美女声</a></li>
      <li><a href="/fm/377981115">苏依丶旋</a></li>
      <li><a href="/fm/321082126">苏依丶忆</a></li>
      <li><a href="/fm/381931872">苏依丶戏</a></li>
    </ul>
  </div>
</template>

<script>
let player = () =>{
  this.audio = {}
  this.list = []
  return {
    load: () => {
      window.JQuery.get('/api/fm/playlist/', function (data) {
        if (data && data.code === 200) {
          this.list = data.result.tracks
        }
      })
    },
    init: () => {

    }
  }
}
export default {
  data () {
    return {
      player: player,
      play: (event) => {
        event.preventDefault()
        console.log('play')
      },
      next: (event) => {
        event.preventDefault()
        console.log('next')
      },
      volumeChange: (event) => {
        event.preventDefault()
        console.log(this)
      }
    }
  }
}
</script>

<style lang="less">
  @import "../_less/v2/base";
  @import "../_less/component/player.less";
</style>