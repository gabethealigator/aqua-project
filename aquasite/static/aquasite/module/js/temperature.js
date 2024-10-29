export function updateModuleTemperatureLevelAndCondition(djangoData) {
  let moduleTemperature = djangoData.temperature

  const thermometerLevel = document.getElementById('thermometer-level')
  moduleTemperature <= 50 
  ? thermometerLevel.style.height = 'calc(' + moduleTemperature + '% * 2)' 
  : thermometerLevel.style.height = 'calc(50% * 2)'
}
