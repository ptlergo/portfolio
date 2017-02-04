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

  vm.navToggle = () => {
    console.log('nav clicked');

  };
}

angular.module('myApp').controller('NavController', NavController);
