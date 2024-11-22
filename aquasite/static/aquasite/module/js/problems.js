export function updateProblems(djangoData) {
  const problemsList = document.getElementById('problems-list');
  problemsList.innerHTML = '';
  
  const problems = [];
  
  let distanceOfWater = Number(Math.round(djangoData.level));
  let aquariumHeight = Number(djangoData.aquariumHeight);
  let maxDistance = aquariumHeight + 20;
  let waterLevelPercentage = 0;

  if (distanceOfWater <= maxDistance && distanceOfWater >= 20) {
    waterLevelPercentage = Math.round(Math.abs((((distanceOfWater - 20) / aquariumHeight) * 100) - 100));
  } else if (distanceOfWater > maxDistance) {
    waterLevelPercentage = 100;
  }
  
  if (djangoData.temperature < 6) {
    problems.push({
      type: 'danger',
      message: 'Temperatura muito baixa',
      detail: `${Math.round(djangoData.temperature)}°C - Risco para os organismos aquáticos`
    });
  } else if (djangoData.temperature > 31) {
    problems.push({
      type: 'danger', 
      message: 'Temperatura muito alta',
      detail: `${Math.round(djangoData.temperature)}°C - Risco para os organismos aquáticos`
    });
  }

  if (djangoData.ph < 6.5) {
    problems.push({
      type: 'warning',
      message: 'pH ácido',
      detail: `pH ${djangoData.ph} - Água muito ácida`
    });
  } else if (djangoData.ph > 8.5) {
    problems.push({
      type: 'warning',
      message: 'pH alcalino', 
      detail: `pH ${djangoData.ph} - Água muito alcalina`
    });
  }

  if (djangoData.turbidity < 2.5) {
    problems.push({
      type: 'warning',
      message: 'Turbidez alta',
      detail: 'Água extremamente turva'
    });
  } else if (djangoData.turbidity < 6.5) {
    problems.push({
      type: 'warning',
      message: 'Turbidez parcial',
      detail: 'Água parcialmente turva'
    });
  }

  if (waterLevelPercentage < 30) {
    problems.push({
      type: 'danger',
      message: 'Nível crítico',
      detail: `Nível da água em ${waterLevelPercentage}% - Necessário reposição urgente`
    });
  } else if (waterLevelPercentage < 50) {
    problems.push({
      type: 'warning',
      message: 'Nível baixo',
      detail: `Nível da água em ${waterLevelPercentage}% - Considere adicionar água`
    });
  } else if (waterLevelPercentage > 95) {
    problems.push({
      type: 'warning',
      message: 'Nível muito alto',
      detail: `Nível da água em ${waterLevelPercentage}% - Considere remover água`
    });
  }

  const totalProblemsElement = document.getElementById('total-problems');
  if (totalProblemsElement) {
    totalProblemsElement.textContent = problems.length;
  }

  if (problems.length === 0) {
    problemsList.innerHTML = `
      <div class="list-group-item list-group-item-success d-flex align-items-center">
        <i class="fa-solid fa-circle-check me-2"></i>
        Nenhum problema detectado
      </div>
    `;
  } else {
    problems.forEach(problem => {
      problemsList.innerHTML += `
        <div class="list-group-item list-group-item-${problem.type} d-flex flex-column">
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-triangle-exclamation me-2"></i>
            <strong>${problem.message}</strong>
          </div>
          <small class="mt-1">${problem.detail}</small>
        </div>
      `;
    });
  }
} 
