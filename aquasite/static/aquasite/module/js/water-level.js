export function updateWaterLevel(djangoData) {
  let waterLevel = Math.round(djangoData.level)

  const waterLevelPercentage = document.getElementById('water-percentage')
  const waterLevelBackground = document.getElementById('water-background')

  waterLevelPercentage.innerText = waterLevel
  waterLevelBackground.style.height = '' + waterLevel + '%'
}