export default {
  nano_active: data =>{

    const x = []
    const y = []
    for (var index in data) {
      x.push(index)
      y.push(data[index])
    }

    return {
      title: {
        text: 'Nano激活数量',
        textAlign: 'left'
      },
      tooltip: {},
      xAxis: {
        data: x
      },
      yAxis: {},
      series: [{
        name: '激活数量',
        type: 'bar',
        data: y
      }]
    }
  }
}
