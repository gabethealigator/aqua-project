import * as charts from './charts.js'
import * as PHScale from './ph-scale.js'
import * as temperature from './temperature.js'

const moduleId = document.getElementById('module').getAttribute('data-module-id')
let moduleSocket = new WebSocket(
  'ws://' +
  window.location.host +
  '/dashboard/module/' +
  moduleId +
  '/'
)
moduleSocket.onmessage = (e) => {
  const djangoData = JSON.parse(e.data)
  console.log(djangoData)

  PHScale.updateModulePHLevel(djangoData)
  temperature.updateModuleTemperatureLevelAndCondition(djangoData)
  charts.updateTemperatureChartData(djangoData)
  charts.updateLevelChartData(djangoData)
}