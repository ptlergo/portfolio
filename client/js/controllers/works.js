/**
  * @ngdoc method
  * @name WorksController
  * @methodOf module.WorksController
  * @description
  * Works Page controller
  *
  * @returns {}
*/
function WorksController(worksService) {
  const vm = this;
  vm.img_src = 'https://marypomerantzadvertising.com/wp-content/uploads/responsiveweb.gif';
  vm.tagline = 'Details of some projects i\'ve worked on';
  vm.printWorks = 'My Works';
  vm.summary = `My years have been spent creating a range of digital content such as websites
  apps, web tools, logos, and graphics. I use a minimalist approach and my philosophy is 'complexity from simplicity'.
  My works always begin with the question of 'how do I efficiently embody a creative expression of my client's brand?`;
  vm.cases = worksService.caseStudies;
}
WorksController.$inject = ['worksService'];
angular.module('myApp').controller('WorksController', WorksController);
