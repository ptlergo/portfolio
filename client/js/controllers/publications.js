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
  vm.img_src = 'https://marypomerantzadvertising.com/wp-content/uploads/responsiveweb.gif';
  vm.title = homeService.Content.publications.title;
  vm.summary = homeService.Content.publications.summary;
}
PublicationsController.$inject = ['homeService'];
angular.module('myApp').controller('PublicationsController', PublicationsController);
