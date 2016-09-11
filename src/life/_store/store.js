import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const state = {
  posts: {
    count: 0,
    page: 1,
    num: 0,
    posts: [
      {'id': 1, 'title': 'cjb', 'content': 'first'},
      {'id': 2, 'title': 'sb', 'content': 'second'},
      {'id': 3, 'title': 'sb pm', 'content': 'third'}
    ]
  }
}

const apiQuery = (path, options) => {

  const baseUrl = 'http://api.thonatos.com/'
  const api = {
    nano_active: baseUrl + 'nano_active'
  }

  Vue.http.get(api[path], {params: options}).then((res) => {
    // success callback
  }, (res) => {
    // error callback
    console.log(res)
  })

}

const mutations = {
  POSTS_NEXT (state, offset) {
    state.posts.page = state.posts.page + offset
  },
  POSTS_PREV (state, offset) {
    state.posts.page = state.posts.page - offset
  },
  POST_UPDATE (state, pid) {
    apiQuery('post', {})
    for (const index in state.posts.list) {
      if (state.posts.list[index].id === parseInt(pid, 0)) {
        state.posts.post = state.posts.list[index]
        return
      }
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
