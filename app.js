let delayed = false;

        const DATA_COUNT = 15;
        const labels = ['20', ' ', '25', ' ', ' 30', ' ', '35', ' ', '40', ' ', '45', ' ', '50', ' ', '55'];

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Employer K: 73,500',
                    data: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
                    backgroundColor: '#0800a3',
                },
                {
                    label: 'Employee K: 52,500',
                    data: [5, 15, 30, 50, 60, 80, 100, 120, 130, 140, 150, 160, 170, 180, 190],
                    backgroundColor: '#4935ff',
                },
                {
                    label: 'Total Interest K: 244,313',
                    data: [5, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280],
                    backgroundColor: '#85afff',
                },
            ],
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                animation: {
                    onComplete: () => {
                        delayed = true;
                    },
                    delay: (context) => {
                        let delay = 0;

                        if (context.type === 'data' && context.mode === 'default' && !delayed) {
                            delay = context.dataIndex * 300 + context.datasetIndex * 100;
                        }

                        return delay;
                    },
                },
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            stepSize: 100,
                            min: 100,
                            max: 300,
                        },
                    },
                },
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Delayed Animation Chart',
                },
            },
        };

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, config);