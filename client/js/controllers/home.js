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
  vm.img_src = '../../img/pat-logo.svg';
}

angular.module('myApp').controller('HomeController', HomeController);
