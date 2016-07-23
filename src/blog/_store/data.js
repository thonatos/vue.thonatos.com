export default {
  bar: {
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
  },
  pie: {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 274, name: '联盟广告' },
          { value: 235, name: '视频广告' },
          { value: 400, name: '搜索引擎' }
        ].sort(function (a, b) { return a.value - b.value }),
        roseType: 'angle',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  },
  line: {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Num',
        type: 'line',
        areaStyle: { normal: {} },
        data: [52, 54, 60, 61, 65, 62, 80, 85, 90, 99, 40, 30, 20, 10, 0]
      }
    ]
  }
}
