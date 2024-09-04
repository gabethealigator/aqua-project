export function updateWaterGeralQuality(djangoData) {
  const ranges = {
    ph: { good: [6.5, 8.5], medium: [5.5, 9.5] },
    temperature: { good: [15, 25], medium: [10, 30] },
    turbidity: { good: [0, 5], medium: [5, 10] },
    waterLevel: { good: [1, 3], medium: [3, 5] }
  };

  const weights = {
    ph: 30,
    temperature: 30,
    turbidity: 20,
    waterLevel: 20
  };

  const params = ['ph', 'temperature', 'turbidity', 'waterLevel'];
  let qualityScore = 0;

  params.forEach(param => {
    const value = djangoData[param];
    const range = ranges[param];
    const weight = weights[param];

    if (value >= range.good[0] && value <= range.good[1]) {
      qualityScore += weight;
    }
    if (value >= range.medium[0] && value < range.good[0] || value > range.good[1] && value <= range.medium[1]) {
      qualityScore += weight * 2 / 3;
    }
    if (value < range.medium[0] || value > range.medium[1]) {
      qualityScore += weight / 3;
    }
  });

  qualityScore = parseFloat(qualityScore.toFixed(2));

  const percentage = document.getElementById('geral-quality-percentage');
  const bodyStyle = window.getComputedStyle(document.querySelector('body'));
  const bodyBgColor = bodyStyle.backgroundColor;

  percentage.innerText = `${qualityScore}`;
  document.documentElement.style.setProperty('--progress', qualityScore + '%');
  document.documentElement.style.setProperty('--bg-color', bodyBgColor);
}

