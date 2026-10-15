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
  vm.caseNebula = worksService.caseStudies[0];
  vm.caseAdtplus = worksService.caseStudies[1];
  vm.caseAdventhealth = worksService.caseStudies[2];
  vm.caseMusicem = worksService.caseStudies[3];
  vm.caseFlexButton = worksService.caseStudies[4];
  vm.lonerTour = worksService.caseStudies[5];
  vm.winterSoulstice = worksService.caseStudies[6];
  vm.caseQuicksling = worksService.caseStudies[7];

  vm.device = worksService.Device.img;
}
WorksController.$inject = ['worksService', 'homeService'];
angular.module('myApp').controller('WorksController', WorksController);
