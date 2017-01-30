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
  vm.print = 'message';
}

angular.module('myApp', []).controller('MainController', MainController);
