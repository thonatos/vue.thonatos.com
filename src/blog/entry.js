import Vue from 'vue'
import App from './app'
import PostsView from './PostsView'
import ChartsView from './ChartsView'
import ChartView from './ChartView'
import PostView from './PostView'
import Router from 'vue-router'
import echarts from '../_directives/echarts'

// install router
Vue.use(Router)
Vue.directive('echarts', echarts)

// routing
var router = new Router()

router.map({
  '/posts/:current': {
    component: PostsView
  },
  '/post/:pid': {
    component: PostView
  },
  '/charts/': {
    component: ChartsView
  },
  '/chart/:cname': {
    component: ChartView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/posts/1'
})

router.start(App, '#app')
