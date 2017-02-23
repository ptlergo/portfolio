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
}

angular.module('myApp').controller('HomeController', HomeController);
