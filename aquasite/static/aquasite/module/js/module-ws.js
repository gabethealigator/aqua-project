import * as charts from './charts.js'
import * as PHScale from './ph-scale.js'
import * as waterTemperature from './temperature.js'
import * as waterLevel from './water-level.js'
import * as turbidity from './turbidity.js'
import * as geralQuality from './geral-quality.js'
import { updateTemperaturePopover } from './popovers.js'
import { updateProblems } from './problems.js';

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
  waterTemperature.updateModuleTemperatureLevelAndCondition(djangoData)
  waterLevel.updateWaterLevel(djangoData)
  turbidity.updateModuleTurbidity(djangoData)
  geralQuality.updateWaterGeralQuality(djangoData)

  charts.updateTurbidityChartData(djangoData)
  charts.updateLevelChartData(djangoData)

  updateTemperaturePopover(djangoData)
  updateProblems(djangoData)
}
