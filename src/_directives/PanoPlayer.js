/**
 *
 * three.js.
 *
 * @project     vue.thonatos.com
 * @datetime    19:38 - 16/9/7
 * @author      Thonatos.Yang <thonatos.yang@gmail.com>
 * @copyright   Thonatos.Yang <https://www.thonatos.com>
 *
 */

import Vue from 'vue'
import PanoPlayer from './panoplayer/base'

export default {
  deep: true,
  params: ['muted'],
  paramWatchers: {
    muted: function (val, oldVal) {
      var _this = this
      if (val === true) {
        _this.instance.mute(val)
      } else {
        _this.instance.mute(val)
      }
    }
  },
  bind: function () {
    var _this = this
    _this.instance = new PanoPlayer()
    // console.error('init')

    Vue.nextTick(function () {

      // console.error('init')
      _this.instance.init(_this.el, {url: require('../_assets/w.9.6.30.mp4')})

      // show loading animation
      if (_this.params.loading === true) {
        _this.instance.showLoading()
      }

      // auto resize
      var resizeEvent = new Event('resize')
      _this.resizeEventHandler = function () {
        _this.instance.resize()
      }

      _this.el.addEventListener('resize', _this.resizeEventHandler, false)

      window.onresize = function () {
        _this.el.dispatchEvent(resizeEvent)
      }
    })
  },
  update: function (val, oldVal) {
    console.log(val)
    // var _this = this
    // var pano = val
    // _this.instance = new PanoPlayer()

    Vue.nextTick(function () {
      // console.error('update')
      // _this.instance.dispose()
      // _this.instance.init(_this.el, pano)
      // _this.instance.setOption(options)
    })
  },
  unbind: function () {
    var _this = this
    console.error('unbind')
    _this.instance.dispose()
    _this.el.removeEventListener('resize', _this.resizeEventHandler, false)
  }
}
