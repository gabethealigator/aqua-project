export function updateModulePHLevel(djangoData) {
  let modulePH = Math.round(djangoData.ph)
  const phScale = document.getElementById('overview-ph-scale').children

  for (let i = 0; i < phScale.length; i++) {
    if (phScale[i].id == 'ph-level-' + modulePH) {
      for (let j = 0; j < phScale.length; j++) {
        phScale[j].children[0].classList.remove('module-ph-level')
        phScale[j].children[1].style.fontWeight = 'normal'
      }
      phScale[i].children[0].classList.add('module-ph-level')
      phScale[i].children[1].style.fontWeight = 'bold'
    }
  }
}