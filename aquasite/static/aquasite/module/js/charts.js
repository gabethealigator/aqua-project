
export const phChartCanvas = document.getElementById('ph-chart');
export let phChartData = {
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

    plugins: {
      legend: {
        display: false
      }
    }
  }
}
export let phChart = new Chart(phChartCanvas, phChartData)

export function updatePHChartData(djangoData) {
  let newPhChartData = phChartData.data.datasets[0].data
  newPhChartData.shift()
  newPhChartData.push(djangoData.ph)
  phChartData.data.datasets[0].data = newPhChartData
  phChart.update()
}


export const turbidityChartCanvas = document.getElementById('turbidity-chart');
export let turbidityChartData = {
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

    plugins: {
      legend: {
        display: false
      }
    }
  }
}
export let turbidityChart = new Chart(turbidityChartCanvas, turbidityChartData)

export function updateTurbidityChartData(djangoData) {
  let newTurbidityChartData = turbidityChartData.data.datasets[0].data
  newTurbidityChartData.shift()
  newTurbidityChartData.push(djangoData.turbidity)
  turbidityChartData.data.datasets[0].data = newTurbidityChartData
  turbidityChart.update()
}


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

    plugins: {
      legend: {
        display: false
      }
    }
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

    plugins: {
      legend: {
        display: false
      }
    }
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
