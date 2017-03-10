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
  vm.main_logo = '../../img/pat-logo.svg';
}

angular.module('myApp').controller('MainController', MainController);
