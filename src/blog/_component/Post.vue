<template>
  <div class="post">
    <h2><a :href="href">{{post.title}}</a></h2>
    <p>{{post.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object
  },

  computed: {
    href () {
      return this.post.url || ('#/post/' + this.post.id)
    }
  }
}
</script>

<style lang="less">
  @import "../../_less/v2/base";
  @import "../../_less/component/animation";
  .post{
    width: 100%;
    overflow: hidden;
  }
</style>