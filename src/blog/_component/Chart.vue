<template>
  <div class='echart' v-echarts="data" :loading="loading"></div>
</template>

<script>
export default {
  name: 'Chart',
  props: {
    name: String,
    data: Object
  },

  data () {
    return {
      loading: true
    }
  },

  created () {
    var _this = this
    console.log(this.data)
    setTimeout(() => {
      _this.loading = false
    }, 2000)
  }
}
</script>

<style lang='less'>
  @import '../../_less/v2/base';
  @import '../../_less/component/animation';
  .echart {
    padding: 1em 0;
    width: 100%;
    height: 100%;
    min-height: 600px;
  }
</style>