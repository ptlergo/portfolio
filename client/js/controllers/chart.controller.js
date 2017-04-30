/**
 * @ngdoc method
 * @name ChartController
 * @methodOf module.ChartController
 * @description
 * chartJS controller for polar area in case studies pages
 *
 * @returns {}
 */
function ChartController() {
  const vm = this;
  const CHART = document.getElementById('charty');
  Chart.defaults.global.animation.duration = 2000;
  vm.charty = new Chart(CHART, {
    type: 'polarArea',
    data: {
      labels: ['social media', 'friend', 'other'],
      datasets: [{
        label: 'event refereals',
        data: [62, 27, 11],
        backgroundColor: ['#7C88DB', '#799CA9', '#9A9A77'],
      }],
    },
    options: {},
  });
}
angular.module('myApp').controller('ChartController', ChartController);
