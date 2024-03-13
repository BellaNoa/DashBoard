var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", "Janeiro", "Fevereiro", "Março"],
            datasets: [{
                label: 'Receita Mensal',
                data: [ 76149.87 , 48211.96, 38807.27, 78031.32, 70204.82, 38881.71, 39767.23, 16821.40],
                backgroundColor: 'rgba(0,206,209)',
                borderColor: 'rgba(0, 0, 0, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            },
            plugins: {
                annotation: {
                    annotations: [{
                        type: 'bar',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 1,
                        value: 50,
                        label: {
                            enabled: true,
                            content: '50',
                            position: 'center'
                        }
                    }]
                }
            }
        }
    });