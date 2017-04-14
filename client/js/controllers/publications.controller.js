/**
  * @ngdoc method
  * @name WritingsController
  * @methodOf module.WritingsController
  * @description
  * Writings Page controller
  *
  * @returns {}
*/
function PublicationsController(publicationService, $sce, homeService) {
  const vm = this;
  const publications = publicationService.publications;
  vm.img_src = publications.imgUrl;
  vm.title = publications.title;
  vm.summary = publications.summary;
  vm.Mainsummary = homeService.Content.publications.summary;
  vm.links = publications.links;
  vm.video = $sce.trustAsResourceUrl(publications.links[0].src);
}
PublicationsController.$inject = ['publicationService', '$sce', 'homeService'];
angular.module('myApp').controller('PublicationsController', PublicationsController);
