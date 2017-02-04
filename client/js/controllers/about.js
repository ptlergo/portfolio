/**
  * @ngdoc method
  * @name AboutController
  * @methodOf module.AboutController
  * @description
  * About page controller
  *
  * @returns {}
*/
function AboutController() {
  const vm = this;
  vm.printAbout = 'About View message';
}

angular.module('myApp').controller('AboutController', AboutController);
