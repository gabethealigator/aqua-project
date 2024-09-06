import * as charts from './charts.js'
import * as PHScale from './ph-scale.js'
import * as temperature from './temperature.js'
import * as waterLevel from './water-level.js'
import * as geralQuality from './geral-quality.js'
import { generateTemperaturePopover } from './popovers.js'

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
  waterLevel.updateWaterLevel(djangoData)
  geralQuality.updateWaterGeralQuality(djangoData)

  // charts.updatePHChartData(djangoData)
  charts.updateTurbidityChartData(djangoData)
  // charts.updateTemperatureChartData(djangoData)
  charts.updateLevelChartData(djangoData)

  generateTemperaturePopover(djangoData)
}