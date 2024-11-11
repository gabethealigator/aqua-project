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

  if (moduleTurbidity >= 4.2) {
    moduleTurbidityState.innerText = 'Limpa'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/low-turbidity.jpg)')
  }
  if (moduleTurbidity >= 3.5 && moduleTurbidity < 4.2) {
    moduleTurbidityState.innerText = 'Um pouco turva'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/medium-turbidity.jpg)')
  }
  if (moduleTurbidity >= 2.5 && moduleTurbidity < 3.5) {
    moduleTurbidityState.innerText = 'Turva'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/medium-turbidity.jpg)')
  }
  if (moduleTurbidity < 2.5) {
    moduleTurbidityState.innerText = 'Muito turva'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/high-turbidity.jpg)')
  }
}
