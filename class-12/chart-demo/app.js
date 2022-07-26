'use strict';

const ctx = document.getElementById('myChart').getContext('2d');
// Constructor (1arg - my canvas element, 2nd arg - big ol object)

let myObj =  {
  type: 'bar',
  data: {
      labels: ['RED', 'BLUE', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Views',
          data: [20, 19, 3, 5, 2, 3],
          backgroundColor: [
              'red',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      },
      {
        label: '# of Votes',
        data: [5, 10, 1, 15, 22, 3],
        backgroundColor: [
            'red',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
}



new Chart(ctx, myObj);
