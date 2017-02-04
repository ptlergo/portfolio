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

  vm.click = function(){
    vm.print = 'clicked';
    console.log('press');
  };
}

angular.module('myApp').controller('NavController', NavController);
