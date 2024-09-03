export function updateWaterGeralQuality(djangoData) {
  let PHScale = djangoData.ph
  let temperature = djangoData.temperature
  let turbidity = djangoData.turbidity
  let waterLevel = djangoData.level

  let progress = 100





  const percentage = document.getElementById('geral-quality-percentage')
  const bodyStyle = window.getComputedStyle(document.querySelector('body'))
  const bodyBgColor = bodyStyle.backgroundColor
  
  percentage.innerText = progress
  document.documentElement.style.setProperty('--progress', progress + '%')
  document.documentElement.style.setProperty('--bg-color', bodyBgColor)
}