var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Ago", "Set", "Out", "Nov", "Dez", "Jan", "Fev", "Mar"],
            datasets: [{
                label: 'Vendas R$',
                data: [64836.11,42308.00,37571.28,81082.49,72219.68,36375.93,40520.87,19454.75],
                backgroundColor: 'rgba(173,216,230)',
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

    var ctx = document.getElementById('myChartTwo').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Ago", "Set", "Out", "Nov", "Dez", "Jan", "Fev", "Mar"],
            datasets: [{
                label: 'Margem de Lucro %',
                data: [14.75,50.53,112.94,42.36,90.73,40.52,17.26,19.68],
                backgroundColor: 'rgba(70,130,180)',
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