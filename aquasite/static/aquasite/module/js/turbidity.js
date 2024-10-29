export function updateModuleTurbidity(djangoData) {
  let moduleTurbidity = djangoData.turbidity

  const moduleTurbidityState = document.getElementById('module-turbidity-state')
  const moduleTurbidityNumber = document.getElementById('module-turbidity-number')

  const root = document.documentElement;

  function roundToDecimal(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces)
    return Math.round(num * factor) / factor
  }
  moduleTurbidityNumber.innerText = roundToDecimal(moduleTurbidity, 1)

  if (moduleTurbidity >= 0 && moduleTurbidity <= 5) {
    moduleTurbidityState.innerText = 'Muito limpa'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/low-turbidity.jpg)')
  }
  if (moduleTurbidity >= 5 && moduleTurbidity <= 50) {
    moduleTurbidityState.innerText = 'Limpa'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/low-turbidity.jpg)')
  }
  if (moduleTurbidity >= 50 && moduleTurbidity <= 100) {
    moduleTurbidityState.innerText = 'Um pouco turva'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/medium-turbidity.jpg)')
  }
  if (moduleTurbidity >= 100 && moduleTurbidity <= 500) {
    moduleTurbidityState.innerText = 'Turva'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/medium-turbidity.jpg)')
  }
  if (moduleTurbidity >= 500) {
    moduleTurbidityState.innerText = 'Muito suja'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/high-turbidity.jpg)')
  }
}
