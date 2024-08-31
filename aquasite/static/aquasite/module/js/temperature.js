export function updateModuleTemperatureLevelAndCondition(djangoData) {
  let moduleTemperature = djangoData.temperature

  const temperature = document.getElementById('temperature')
  const thermometerLevel = document.getElementById('thermometer-level')
  temperature.innerText = moduleTemperature
  moduleTemperature <= 50 
  ? thermometerLevel.style.height = 'calc(' + moduleTemperature + '% * 2)' 
  : thermometerLevel.style.height = 'calc(50% * 2)'

  const temperatureCondition = document.getElementById('temperature-condition')
  if (moduleTemperature >= 0 && moduleTemperature < 6) {
    temperatureCondition.innerText = 'Excelente'
  } else if (moduleTemperature >= 6 && moduleTemperature < 16) {
    temperatureCondition.innerText = 'Boa'
  } else if (moduleTemperature >= 16 && moduleTemperature < 21) {
    temperatureCondition.innerText = 'Moderada'
  } else if (moduleTemperature >= 21 && moduleTemperature < 26) {
    temperatureCondition.innerText = 'Moderada a Ruim'
  } else if (moduleTemperature >= 26 && moduleTemperature < 31) {
    temperatureCondition.innerText = 'Ruim'
  } else if (moduleTemperature >= 31 && moduleTemperature < 36) {
    temperatureCondition.innerText = 'Muito Ruim'
  } else if (moduleTemperature >= 36 && moduleTemperature < 41) {
    temperatureCondition.innerText = 'Crítica'
  } else if (moduleTemperature >= 41 && moduleTemperature < 46) {
    temperatureCondition.innerText = 'Extremamente Crítica'
  } else if (moduleTemperature >= 46) {
    temperatureCondition.innerText = 'Péssima'
  }
}