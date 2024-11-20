export function updateProblems(djangoData) {
  const problemsList = document.getElementById('problems-list');
  problemsList.innerHTML = ''; // Clear existing problems
  
  const problems = [];
  
  // Check temperature problems
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

  // Check pH problems
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

  // Check turbidity problems
  if (djangoData.turbidity < 2.5) {
    problems.push({
      type: 'warning',
      message: 'Turbidez alta',
      detail: 'Água extremamente turva'
    });
  }

  // Check water level problems
  if (djangoData.level < 20) {
    problems.push({
      type: 'danger',
      message: 'Nível crítico',
      detail: 'Nível da água muito baixo'
    });
  }

  // Display problems or "no problems" message
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