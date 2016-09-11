<template>
  <post :post="post"></post>
</template>

<script>
import Post from './_component/Post'
import store from './_store/store'
import { getPostsItem } from './_store/getters'

export default {
  name: 'PostView',

  components: {
    Post
  },

  store: store,

  vuex: {
    getters: {
      post: getPostsItem
    }
  },

  route: {
    data ({ to }) {
      const pid = to.params.pid
      store.dispatch('POST_UPDATE', pid)
      // return {
      // }
    }
  }

}
</script>

<style lang="less">
  @import "../_less/v2/base";
  @import "../_less/component/animation";
</style>