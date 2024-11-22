export function updateWaterLevel(djangoData) {
  let distanceOfWater = Number(Math.round(djangoData.level))
  let aquariumHeight = Number(djangoData.aquariumHeight)
  let maxDistance = aquariumHeight + 14

  const waterLevelHTMLPercentage = document.getElementById('water-percentage')
  const waterLevelBackground = document.getElementById('water-background')

  if (waterLevelHTMLPercentage != null && waterLevelBackground != null) {

    let waterLevelPercentage = 0
    if (distanceOfWater <= maxDistance && distanceOfWater >= 14)
      waterLevelPercentage = Math.round(Math.abs((((distanceOfWater - 14) / aquariumHeight) * 100) - 100))

    waterLevelHTMLPercentage.innerText = waterLevelPercentage
    waterLevelBackground.style.height = '' + waterLevelPercentage + '%'

    if (distanceOfWater > maxDistance) {
      waterLevelHTMLPercentage.innerText = '100'
      waterLevelBackground.style.height = '100%'
    }
  }
}
