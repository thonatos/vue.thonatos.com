<template>
  <chart :name="name" :data="data"></chart>
</template>

<script>
import Chart from './_component/Chart'
import store from './_store/store'
import { getChartName, getChartData } from './_store/getters'

export default {
  name: 'ChartView',

  components: {
    Chart
  },

  store: store,

  vuex: {
    getters: {
      name: getChartName,
      data: getChartData
    }
  },

  route: {
    data ({ to }) {
      const cname = to.params.cname
      const query = to.query
      store.dispatch('CHART_UPDATE', cname, query)
    }
  }

}
</script>

<style lang="less">
  @import "../_less/v2/base";
  @import "../_less/component/animation";
</style>