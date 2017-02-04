/**
  * @ngdoc method
  * @name MainController
  * @methodOf module.MainController
  * @description
  * Homepage controller
  *
  * @returns {}
*/
function MainController() {
  const vm = this;
  vm.printHome = 'Home View message';
  vm.printAbout = 'About View message';
  vm.printWrite = 'Writings View message';
  vm.printWorks = 'Works View message';
}

angular.module('myApp').controller('MainController', MainController);
