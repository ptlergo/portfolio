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
  vm.printHome = 'Home View message';
}

angular.module('myApp').controller('HomeController', HomeController);
