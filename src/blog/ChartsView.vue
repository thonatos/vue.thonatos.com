<template>
  <ul class="ul-charts">
    <li class="li-chart" v-for="chart in list">
      <a href="{{'#/chart/' + chart.url}}">{{chart.name}}</a>
    </li>
    <li>
      <a href="#!/chart/nano_active?start_time=2016-07-01&end_time=2016-07-24">时间段</a>
    </li>
    <li>
      <a href="#!/chart/nano_active?new_time=7">最近七天</a>
    </li>

  </ul>
</template>

<script>
import store from './_store/store'

import { getChartList } from './_store/getters'

export default {
  name: 'ChartsView',

  components: {
  },

  store: store,

  vuex: {
    actions: {
    },
    getters: {
      list: getChartList
    }
  },

  computed: {
    href (url) {
      console.log(url)
      return url
    }
  },

  route: {
    data ({ to }) {
      // return {
      // }
    }
  }
}
</script>

<style lang="less">
  @import "../_less/v2/base";
  @import "../_less/component/animation";

  .list-charts{
    .item-chart {

    }
  }
</style>