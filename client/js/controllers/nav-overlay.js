/**
  * @ngdoc method
  * @name NavController
  * @methodOf module.NavController
  * @description
  * Navbar controller for overlay click
  *
  * @returns {}
*/
function NavController() {
  const vm = this;
  vm.printHome = 'navbar View message';

}

angular.module('myApp').controller('NavController', NavController);
