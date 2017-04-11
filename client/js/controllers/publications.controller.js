/**
  * @ngdoc method
  * @name WritingsController
  * @methodOf module.WritingsController
  * @description
  * Writings Page controller
  *
  * @returns {}
*/
function PublicationsController(homeService) {
  const vm = this;
  const publications = homeService.Content.publications;
  vm.img_src = publications.imgUrl;
  vm.title = publications.title;
  vm.summary = publications.summary;
  vm.links = publications.links;
}
PublicationsController.$inject = ['homeService'];
angular.module('myApp').controller('PublicationsController', PublicationsController);
