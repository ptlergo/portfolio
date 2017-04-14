/**
  * @ngdoc method
  * @name WritingsController
  * @methodOf module.WritingsController
  * @description
  * Writings Page controller
  *
  * @returns {}
*/
function PublicationsController(publicationService, $sce) {
  const vm = this;
  const publications = publicationService.publications;
  vm.img_src = publications.imgUrl;
  vm.title = publications.title;
  vm.summary = publications.summary;
  vm.links = publications.links;
  vm.video = $sce.trustAsResourceUrl(publications.links[0].src);
}
PublicationsController.$inject = ['publicationService', '$sce'];
angular.module('myApp').controller('PublicationsController', PublicationsController);
