import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import Data from './data'
import Serialize from './serialize'

// 告诉 vue “使用” vuex
Vue.use(Vuex)
Vue.use(VueResource)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  posts: {
    page: 1,
    list: [
      { 'id': 1, 'title': 'cjb', 'content': 'first' },
      { 'id': 2, 'title': 'sb', 'content': 'second' },
      { 'id': 3, 'title': 'sb pm', 'content': 'third' }
    ],
    post: {},
    data: null
  },
  chart: {
    list: [
      { 'name': 'line', 'url': 'line' },
      { 'name': 'pie', 'url': 'pie' },
      { 'name': 'bar', 'url': 'bar' }
    ],
    name: 'pie',
    data: {
      tooltip: {},
      xAxis: {
      },
      yAxis: {},
      series: []
    }
  }
}

// 定义一个方法通过接口处理数据并更新到store
const apiQuery = (path, options) => {

  const baseUrl = 'http://statistics.internal.insta360.com/'
  const api = {
    nano_active: baseUrl + 'nano_active'
  }

  const ajax = (url, options) => {
    Vue.http.get(url, {params: options}).then((res) => {
      // success callback
      state.chart.data = Serialize.nano_active(JSON.parse(res.body))
    }, (res) => {
      // error callback
      console.log(res)
    })
  }
  ajax(api[path], options)
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  POSTS_NEXT (state, offset) {
    state.posts.page = state.posts.page + offset
  },
  POSTS_PREV (state, offset) {
    state.posts.page = state.posts.page - offset
  },
  POST_UPDATE (state, pid) {
    for (const index in state.posts.list) {
      if (state.posts.list[index].id === parseInt(pid, 0)) {
        state.posts.post = state.posts.list[index]
        return
      }
    }
  },
  CHART_UPDATE (state, cname, query) {
    state.chart.name = cname
    if (cname !== 'nano_active') {
      state.chart.data = Data[cname]
    } else {
      apiQuery('nano_active', query)
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
