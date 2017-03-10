/**
  * @ngdoc method
  * @name MainController
  * @methodOf module.MainController
  * @description
  * Main controller for homepage, header, and footer
  *
  * @returns {}
*/
function MainController() {
  const vm = this;
  vm.h_logo = '../../img/pat-logo.svg';
  vm.f_logo = '../../../img/pat-logo.svg';
}

angular.module('myApp').controller('MainController', MainController);
