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
  vm.img_src = '../../img/iphone.png';
  vm.tagline = 'Details of some projects i\'ve worked on';
  vm.printWorks = 'My Works';
  vm.summary = `My years have been spent creating a variety of digital content as a Full Sail University
                Web Design & Development student, and for clients such as: musicians, agencies, and companies.
                I've made websites, apps, web tools, logos, and graphics. I believe that simplicity can
                come from complexity which shows in my minimalist design approach. Before beginning I always 
                ask 'how can I effectively embody the creative expression of my client's brand?`;
  vm.cases = worksService.caseStudies;
}
WorksController.$inject = ['worksService'];
angular.module('myApp').controller('WorksController', WorksController);
