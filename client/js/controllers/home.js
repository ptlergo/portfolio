/**
  * @ngdoc method
  * @name HomeController
  * @methodOf module.HomeController
  * @description
  * Homepage controller
  *
  * @returns {}
*/
function HomeController() {
  const vm = this;
  vm.img_src = '../../img/pat-logo-2.svg';
  vm.border_slant = '../../img/border-slant.svg';
}

angular.module('myApp').controller('HomeController', HomeController);
