document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('growthChart').getContext('2d');
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fundData = [25000, 25150, 25200, 25400, 25550, 25700, 25800, 26000, 26200, 26350, 26400, 26500];
  const spData = [25000, 25200, 24800, 25300, 25600, 25900, 26100, 26400, 26700, 26900, 27100, 27400];

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Busara Fund',
          data: fundData,
          borderColor: '#1e88e5',
          backgroundColor: 'transparent',
        },
        {
          label: 'S&P 500 (normalised)',
          data: spData,
          borderColor: '#e53935',
          backgroundColor: 'transparent',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Fund Growth vs. S&P 500',
        },
      },
      scales: {
        y: {
          ticks: {
            callback: (value) => '£' + value.toLocaleString(),
          },
        },
      },
    },
  });
});
