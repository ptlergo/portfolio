/**
  * @ngdoc method
  * @name WritingsController
  * @methodOf module.WritingsController
  * @description
  * Writings Page controller
  *
  * @returns {}
*/
function WritingsController() {
  const vm = this;
  vm.printWritings = 'Writings View message';
}

angular.module('myApp').controller('WritingsController', WritingsController);
