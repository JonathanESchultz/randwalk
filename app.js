document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('liveChart').getContext('2d');
    const liveData = {
        labels: [],
        datasets: [{
            label: 'Live Data',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
            rough: {
                roughness: 2,
                bowing: 2,
                stroke: '#ff0000',
            }
        }]
    };

    const config = {
        type: 'line',
        data: liveData,
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            },
            elements: {
                line: {
                    tension: 0.4
                }
            }
        }
    };

    const liveChart = new Chart(ctx, config);

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }

    function removeData(chart) {
        chart.data.labels.shift();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
        });
        chart.update();
    }

    function generateLiveData() {
        const newLabel = liveData.labels.length ? liveData.labels[liveData.labels.length - 1] + 1 : 0;
        const newData = Math.floor(Math.random() * 100);

        if (liveData.labels.length >= 20) {
            removeData(liveChart);
        }

        addData(liveChart, newLabel, newData);
    }

    setInterval(generateLiveData, 500); // Update twice as fast
});
