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
  vm.img_src = works.imgUrl;
  vm.tagline = works.tagline;
  vm.title = works.title;
  vm.summary = works.summary;
  vm.cases = worksService.caseStudies;
}
WorksController.$inject = ['worksService', 'homeService'];
angular.module('myApp').controller('WorksController', WorksController);
