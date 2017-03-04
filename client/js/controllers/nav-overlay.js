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

  vm.hamClass = true;
  vm.mToggle = false;

  vm.routes = [
    {
      name: 'Home',
      url: '#home',
    },
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Writings',
      url: '#writings',
    },
    {
      name: 'Works',
      url: '#works',
    },
  ];
}

angular.module('myApp').controller('NavController', NavController);
