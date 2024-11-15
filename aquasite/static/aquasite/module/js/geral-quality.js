export function updateWaterGeralQuality(djangoData) {
  const ranges = {
    ph: { good: [6.5, 8.5], medium: [[4, 6], [9, 10]], bad: [[0, 4], [10, 14]] },
    temperature: { good: [6, 26], medium: [[0, 6], [26, 36]], bad: [36, Infinity] },
    turbidity: { good: [4.5, 5], medium: [[2.5, 4.5]], bad: [[0, 2.5]] },
    level: { good: [20, 25], medium: [[25, 32]], bad: [32, Infinity] }
  }
  
  const weights = {
    ph: 30,
    temperature: 30,
    turbidity: 20,
    level: 20
  }
  
  const params = ['ph', 'temperature', 'turbidity', 'level']
  let qualityScore = 0;
  
  params.forEach(param => {
    const value = djangoData[param]
    const range = ranges[param]
    const weight = weights[param]
  
    if (value >= range.good[0] && value <= range.good[1]) {
      qualityScore += weight
    }
    else if (range.medium.some(interval => value >= interval[0] && value <= interval[1])) {
      qualityScore += weight * 2 / 3
    }
    else if (range.bad.some(interval => value >= interval[0] && value <= interval[1])) {
      qualityScore += weight / 3
    }
  })
  
  qualityScore = parseFloat(Math.round(qualityScore))
    
  const percentage = document.getElementById('geral-quality-percentage')
  const bodyStyle = window.getComputedStyle(document.querySelector('body'))
  const bodyBgColor = bodyStyle.backgroundColor

  percentage.innerText = `${qualityScore}`;
  document.documentElement.style.setProperty('--progress', qualityScore + '%')
  document.documentElement.style.setProperty('--bg-color', bodyBgColor)
}

