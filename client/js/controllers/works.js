/**
  * @ngdoc method
  * @name WorksController
  * @methodOf module.WorksController
  * @description
  * Works Page controller
  *
  * @returns {}
*/
function WorksController(worksService, homeService) {
  const vm = this;
  vm.img_src = '../../img/iphone.png';
  vm.tagline = 'Details of some projects i\'ve worked on';
  vm.printWorks = homeService.Content.works.title;
  vm.summary = homeService.Content.works.summary;
  vm.cases = worksService.caseStudies;
}
WorksController.$inject = ['worksService', 'homeService'];
angular.module('myApp').controller('WorksController', WorksController);
