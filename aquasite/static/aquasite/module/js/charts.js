export const turbidityChartCanvas = document.getElementById('turbidity-chart');
export let turbidityChartData = {
  type: 'line',
  data: {
    labels: ['', '', '', '', ''],
    datasets: [{
      label: 'Turbidez da água',
      data: [20, 20, 20, 20, 20],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      y: {
        min: 0,
        max: 1000,
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
  function convertVoltageToNTU(voltage, voltageMin = 0, voltageMax = 5) {
    if (voltage > voltageMax) voltage = voltageMax
    if (voltage < voltageMin) voltage = voltageMin

    const ntu = ((voltageMax - voltage) / (voltageMax - voltageMin)) * 1000

    return ntu.toFixed(2)
  }

  let newTurbidityChartData = turbidityChartData.data.datasets[0].data
  newTurbidityChartData.shift()
  newTurbidityChartData.push(convertVoltageToNTU(djangoData.turbidity))
  turbidityChartData.data.datasets[0].data = newTurbidityChartData
  turbidityChart.update()
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
  function calculateWaterLevelPercentage() {
    let distanceOfWater = Number(Math.round(djangoData.level))
    let aquariumHeight = Number(djangoData.aquariumHeight)
    let maxDistance = aquariumHeight + 20

    const waterLevelHTMLPercentage = document.getElementById('water-percentage')
    const waterLevelBackground = document.getElementById('water-background')

    let waterLevelPercentage = 0

    if (waterLevelHTMLPercentage != null && waterLevelBackground != null) {
      if (distanceOfWater <= maxDistance && distanceOfWater >= 20) 
        waterLevelPercentage = Math.round(Math.abs((((distanceOfWater - 20) / aquariumHeight) * 100) - 100))
    }

    if (distanceOfWater > maxDistance) return waterLevelPercentage = 100
    if (distanceOfWater < 20) return waterLevelPercentage = 0

    return waterLevelPercentage
  }

  let newLevelChartData = levelChartData.data.datasets[0].data
  newLevelChartData.shift()
  newLevelChartData.push(calculateWaterLevelPercentage())
  levelChartData.data.datasets[0].data = newLevelChartData
  levelChart.update()
}
