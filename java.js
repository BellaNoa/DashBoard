// PÁGINA DA HOME    
    
    var valorRealMensal = document.getElementById("valorRealMensal"); // pega a tag <p> no index.html
    var objReal = document.getElementById("objetivoRealMensal"); // pega a tag <p> no index.html

    var marco = -3562.59;               // VALOR DO RESULTADO MENSAL DO MÊS - GRÁFICO
    var valorAtualAdCom = 20767.85;      // VALOR DAS VENDAS NO ADCOM            
    objReal.innerHTML = 34.05;   // VALOR DO OBJETIVO ATINGIDO


    function formatarMoeda(valor) {
        // Verifica se o valor é um número
        if (isNaN(valor)) {
            return "Valor inválido";
        }
        
        // Formata o valor para o formato de moeda brasileira
        var numeroFormatado = valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        return numeroFormatado;
    }
    
    var valor = valorAtualAdCom;
    var valorFormatado = formatarMoeda(valor);
    var valorReal = valorFormatado;                   
    valorRealMensal.innerHTML = valorReal;            

    


    
    // Função para formatar os valores em reais
    function formatarValorEmReais(valor) {
        return 'R$ ' + valor.toFixed(2).replace('.', ',');
      }
  
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'],
              datasets: [{
                  label: 'Resultado Mensal',
                  data: [ 12152.44 , -1321.24, 3212.69, 16594.73, -12991.62,-4828.44,5954.37, marco], // Exemplo com valores positivos e negativos
                  backgroundColor: 'rgba(255, 99, 132, 0.2)', // Cor de fundo
                  borderColor: 'rgba(10,144,135)', // Cor da linha
                  borderWidth: 1,
                  cubicInterpolationMode: 'monotone'
              }]
          },
          options: {
              plugins: {
                  datalabels: {
                      color: 'black',
                      display: function(context) {
                          return true; // Exibe os valores para todos os pontos
                      },
                      formatter: function(value, context) {
                          return formatarValorEmReais(value);
                      }
                  }
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });

      