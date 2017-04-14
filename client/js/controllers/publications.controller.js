/**
  * @ngdoc method
  * @name WritingsController
  * @methodOf module.WritingsController
  * @description
  * Writings Page controller
  *
  * @returns {}
*/
function PublicationsController(publicationService) {
  const vm = this;
  const publications = publicationService.publications;
  vm.img_src = publications.imgUrl;
  vm.title = publications.title;
  vm.summary = publications.summary;
  vm.links = publications.links;
}
PublicationsController.$inject = ['publicationService'];
angular.module('myApp').controller('PublicationsController', PublicationsController);
