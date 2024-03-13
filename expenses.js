document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.getElementById('grafico').getContext('2d');

  var tempo = ["Ago","Set","Out","Nov","Dez","Jan","Fev","Mar"]; // Tempo
  var dados = [
    { label: 'Receita', data: [76149.87 , 48211.96, 38807.27, 78031.32, 70204.82, 38881.71, 39767.23, 18544.67] }, // Valores para Série 2
    { label: 'Despesas', data: [31027.31,32042.89,36195.10,23894.28,26662.82,34727.36,25017.43,15335.77] }, // Valores para Série 1
    { label: 'Custos', data: [56606.12,50830.91,50596.48,61981.50,71713.62,67121.05,49591.43,12616.83]}  // Valores para Série 3
  ];

  var coresFixas = ['green', 'red', 'blue']; // Cores fixas para cada linha

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: tempo,
      datasets: dados.map(function(serie, index) {
        return {
          label: serie.label,
          data: serie.data,
          borderColor: coresFixas[index], // Usando cores fixas para cada linha
          borderWidth: 2,
          cubicInterpolationMode: 'monotone'
        };
      })
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
});
