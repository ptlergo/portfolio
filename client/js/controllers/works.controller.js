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
  const works = homeService.Content.works;
  vm.tagline = works.tagline;
  vm.title = works.title;
  vm.summary = works.summary;

  vm.cases = worksService.caseStudies;
  vm.caseMusicem = worksService.caseStudies[0];
  vm.lonerTour = worksService.caseStudies[2];
  vm.device = worksService.Device.img;
}
WorksController.$inject = ['worksService', 'homeService'];
angular.module('myApp').controller('WorksController', WorksController);
