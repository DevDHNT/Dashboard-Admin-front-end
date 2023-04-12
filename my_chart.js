const ctx = document.getElementById('myChart');
const earning = document.getElementById('earning');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Matcha Jasmine', 'Hojicha Latte', 'Latte Choco', 'White Latte', 'Dark Latte', 'Orange Juice'],
      datasets: [{
        label: '% Sellings',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
    }
  });

  new Chart(earning, {
    type: 'bar',
    data: {
      labels: ['Matcha Jasmine', 'Hojicha Latte', 'Latte Choco', 'White Latte', 'Dark Latte', 'Orange Juice'],
      datasets: [{
        label: '% Sellings',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
    }
});