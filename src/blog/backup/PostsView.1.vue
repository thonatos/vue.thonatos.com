<template>
  <div class="blog">
    <h3>Count is {{ counterValue }}</h3>
    <button @click='increment'>Increment +1</button>
    <post v-for="post in posts" :post="post"></post>
  </div>
</template>

<script>
import store from '../_store/store'
import Post from './Post'

import { incrementCounter } from '../_store/actions'
import { getCount } from '../_store/getters'

export default {
  name: 'PostsView',

  components: {
    Post
  },

  vuex: {
    actions: {
      increment: incrementCounter
    },
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      counterValue: getCount
    }
  },

  store: store,

  data () {
    return {
      page: 1,
      posts: []
    }
  },

  route: {
    data ({ to }) {
      const current = to.params.current
      console.log(current)
      return {
        page: 1,
        posts: [
          {'id': 1, 'title': 'post', 'content': '1'},
          {'id': 2, 'title': 'post', 'content': '2'},
          {'id': 3, 'title': 'post', 'content': '3'}
        ]
      }
    }
  }

  // created () {
  //   store.on('posts-updated', this.update)
  // },

  // destroyed () {
  //   store.removeListener('posts-updated', this.update)
  // },

  // methods: {
  //   update () {
  //     store.fetchItemsByPage(this.page).then(posts => {
  //       this.posts = posts
  //     })
  //   }
  // }
}
</script>

<style lang="less">
  @import "../_less/v2/base";
  @import "../_less/component/animation";
</style>