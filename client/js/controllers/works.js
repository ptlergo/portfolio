/**
  * @ngdoc method
  * @name WorksController
  * @methodOf module.WorksController
  * @description
  * Works Page controller
  *
  * @returns {}
*/
function WorksController() {
  const vm = this;
  vm.printWorks = 'Works View message';
}

angular.module('myApp').controller('WorksController', WorksController);
