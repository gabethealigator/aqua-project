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
    '<p>A temperatura atual da água está em:</p> <p><span class="h2">' + temperature + '</span> <br> <span class="h4">' + rate + '</span></p> <p class="m-0">Mantenha a temperatura dentro desse intervalo para garantir eficiência e segurança. Caso a temperatura esteja fora dessa faixa, ajuste o sistema de aquecimento ou resfriamento conforme necessário.</p>'
  )
}

function generatePopover(trigger, placement, content) {
  const popoverTrigger = document.getElementById(trigger)
  function createPopover() {
    return new bootstrap.Popover(popoverTrigger, {
      trigger: 'manual',
      placement: placement,
      content: content,
      html: true,
      container: 'body'
    })
  }
  let popover = null

  popoverTrigger.addEventListener('mouseenter', () => {
    const popoverElements = document.querySelectorAll('[role="tooltip"]')
    popoverElements.forEach(element => {
      element.remove()
    })
    popover = createPopover()
    popover.show()
  })
  popoverTrigger.addEventListener('mouseleave', () => {
    popover.hide()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  generatePopover(
    'geral-quality',
    'right',
    '<p class="m-0">Este indicador fornece uma visão geral da qualidade da água monitorada pelo dispositivo, incluindo aspectos como temperatura, pH, turbidez e nível. Ele ajuda a avaliar se a água está dentro dos padrões ideais.</p>'
  )

  generatePopover(
    'turbidity',
    'bottom',
    '<p class="m-0">Este indicador mostra o nível de turbidez da água, que é uma medida da clareza do líquido. A turbidez é influenciada pela presença de partículas sólidas, como sedimentos, algas ou poluentes, e pode afetar a qualidade e segurança da água. Valores elevados de turbidez podem indicar a necessidade de tratamento adicional.</p>'
  )

  generatePopover(
    'water-level',
    'top',
    '<p class="m-0">Este indicador exibe o nível atual da água monitorada pelo dispositivo. Ele mostra o volume da água em relação aos parâmetros configurados. Manter o nível dentro dos limites ideais é crucial para garantir a eficiência e segurança do sistema.</p>'
  )

  generatePopover(
    'ph',
    'top',
    '<p>Este indicador mostra o nível de pH da água, que mede sua acidez ou alcalinidade, variando de 0 a 14, com 7 sendo neutro. Valores abaixo de 7 indicam acidez, enquanto valores acima de 7 indicam alcalinidade.</p> <p class="m-0">Manter o pH em níveis apropriados é crucial para a eficiência dos processos e para garantir a segurança do uso da água. Um pH fora da faixa ideal pode afetar a qualidade da água e o desempenho dos sistemas que dependem dela.</p>'
  )
})
