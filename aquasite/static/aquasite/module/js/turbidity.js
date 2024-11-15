export function updateModuleTurbidity(djangoData) {
  let moduleTurbidity = djangoData.turbidity

  const moduleTurbidityState = document.getElementById('module-turbidity-state')
  const moduleTurbidityNumber = document.getElementById('module-turbidity-number')

  const root = document.documentElement;

  function convertVoltageToNTU(voltage, voltageMin = 0, voltageMax = 5) {
    if (voltage > voltageMax) voltage = voltageMax
    if (voltage < voltageMin) voltage = voltageMin

    const ntu = ((voltageMax - voltage) / (voltageMax - voltageMin)) * 1000

    return ntu.toFixed(2)
  }

  let ntu = convertVoltageToNTU(moduleTurbidity)
  moduleTurbidityNumber.innerText = ntu

  if (moduleTurbidity >= 4.5) {
    moduleTurbidityState.innerText = 'Limpa'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/low-turbidity.jpg)')
  }
  if (moduleTurbidity >= 3.5 && moduleTurbidity < 4.5) {
    moduleTurbidityState.innerText = 'Turva'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/medium-turbidity.jpg)')
  }
  if (moduleTurbidity >= 2.5 && moduleTurbidity < 3.5) {
    moduleTurbidityState.innerText = 'Muito turva'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/medium-turbidity.jpg)')
  }
  if (moduleTurbidity < 2.5) {
    moduleTurbidityState.innerText = 'Extremamente turva'
    root.style.setProperty('--turbidity-image', ' url(../../../static/aquasite/images/high-turbidity.jpg)')
  }
}
