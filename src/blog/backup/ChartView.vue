<template>
  <div class='echart' v-echarts="barChartOption"></div>
</template>

<script>
export default {
  name: 'TestView',

  data () {
    return {
      barChartOption: {
        tooltip: {},
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [{
          name: 'Num',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },

  created () {
    console.log(this)
  }

}
</script>

<style lang='less'>
  .echart{
    width: 100%;
    height: 500px;
  }
</style>