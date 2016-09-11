import Vue from 'vue'
import Fm from './app'
import PanoPlayer from '../_directives/PanoPlayer'

Vue.directive('panoplayer', PanoPlayer)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Fm }
})
