export function generateTemperaturePopover(djangoData) {
  let temperature = djangoData.temperature
  let rate = ''

  if (temperature >= 0 && temperature < 6) {
    rate = 'Excelente'
  } else if (temperature >= 6 && temperature < 16) {
    rate = 'Boa'
  } else if (temperature >= 16 && temperature < 21) {
    rate = 'Moderada'
  } else if (temperature >= 21 && temperature < 26) {
    rate = 'Moderada a Ruim'
  } else if (temperature >= 26 && temperature < 31) {
    rate = 'Ruim'
  } else if (temperature >= 31 && temperature < 36) {
    rate = 'Muito Ruim'
  } else if (temperature >= 36 && temperature < 41) {
    rate = 'Crítica'
  } else if (temperature >= 41 && temperature < 46) {
    rate = 'Extremamente Crítica'
  } else if (temperature >= 46) {
    rate = 'Péssima'
  }

  return generatePopover(
    'thermometer',
    'left',
    'Temperatura',
    '<p>Este indicador fornece a temperatura atual da água, que está em:</p> <p class="mb-2"><span class="h2">' + temperature + ' °C</span></p> <p class="m-0"><span class="h4">' + rate + '</span></p>'
  )
}

function generatePopover(trigger, placement, title, content) {
  const popoverTrigger = document.getElementById(trigger)
  function createPopover() {
    return new bootstrap.Popover(popoverTrigger, {
      trigger: 'manual',
      placement: placement,
      title: title,
      content: content,
      html: true,
      container: 'body'
    })
  }
  let popover = undefined

  popoverTrigger.addEventListener('mouseenter', () => {
    const popoverElements = document.querySelectorAll('[role="tooltip"]')
    popoverElements.forEach(element => {
      element.remove()
    })
    popover = createPopover()
    popover.show()
  })
  popoverTrigger.addEventListener('mouseleave', () => {
    if (popover != undefined) {
      popover.hide()
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  generatePopover(
    'geral-quality',
    'right',
    'Qualidade geral',
    '<p class="m-0">Este indicador fornece uma visão geral da atual qualidade da água monitorada pelo dispositivo, incluindo ps aspectos de temperatura, pH, turbidez e nível da água.</p>'
  )

  generatePopover(
    'turbidity',
    'left',
    'Turbidez',
    '<p class="m-0">Este indicador mostra o nível atual de turbidez da água, que é uma medida da clareza do líquido. A turbidez é influenciada pela presença de partículas sólidas.</p>'
  )

  generatePopover(
    'water-level',
    'left',
    'Nível da água',
    '<p class="m-0">Este indicador exibe o nível atual da água monitorada pelo dispositivo.</p>'
  )

  generatePopover(
    'ph',
    'top',
    'Escala PH',
    '<p class="m-0">Este indicador mostra o nível de pH da água, que mede sua acidez ou alcalinidade, variando de 0 a 14, com 7 sendo neutro. Valores abaixo de 7 indicam acidez, enquanto valores acima de 7 indicam alcalinidade.</p>'
  )
})
