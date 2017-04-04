function CarouselController(worksService) {
  const vm = this;
  vm.works = worksService.caseStudies;
}
CarouselController.$inject = ['worksService'];
angular.module('myApp').controller('CarouselController', CarouselController);
