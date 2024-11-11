export function updateWaterLevel(djangoData) {
  let waterLevel = Math.round(djangoData.level)
  let aquariumHeight = djangoData.aquariumHeight

  const waterLevelHTMLPercentage = document.getElementById('water-percentage')
  const waterLevelBackground = document.getElementById('water-background')

  if (waterLevelHTMLPercentage != null && waterLevelBackground != null) {

    // water level percentage calc here

    waterLevelHTMLPercentage.innerText = waterLevel
    waterLevelBackground.style.height = '' + waterLevel + '%'
    waterLevel > 100 ? waterLevelBackground.style.height = '100%' : waterLevelBackground.style.height = '' + waterLevel + '%'
  }
}
