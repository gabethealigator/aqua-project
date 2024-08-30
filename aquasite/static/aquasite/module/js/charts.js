
export const temperatureChartCanvas = document.getElementById('temperature-chart');
export let temperatureChartData = {
  type: 'line',
  data: {
    labels: ['', '', '', '', ''],
    datasets: [{
      label: 'Temperatura da água',
      data: [20, 20, 20, 20, 20],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 100,
      }
    },
  }
}
export let temperatureChart = new Chart(temperatureChartCanvas, temperatureChartData)

export function updateTemperatureChartData(djangoData) {
  let newTemperatureChartData = temperatureChartData.data.datasets[0].data
  newTemperatureChartData.shift()
  newTemperatureChartData.push(djangoData.temperature)
  temperatureChartData.data.datasets[0].data = newTemperatureChartData
  temperatureChart.update()
}


export const levelChartCanvas = document.getElementById('level-chart');
export let levelChartData = {
  type: 'bar',
  data: {
    labels: ['', '', '', '', ''],
    datasets: [{
      label: 'Nível da água',
      data: [20, 20, 20, 20, 20],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 50,
      }
    },
  }
}
export let levelChart = new Chart(levelChartCanvas, levelChartData)

export function updateLevelChartData(djangoData) {
  let newLevelChartData = levelChartData.data.datasets[0].data
  newLevelChartData.shift()
  newLevelChartData.push(djangoData.level)
  levelChartData.data.datasets[0].data = newLevelChartData
  levelChart.update()
}