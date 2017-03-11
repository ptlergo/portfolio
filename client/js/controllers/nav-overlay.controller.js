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
  vm.brand = '../../img/pat-logo.svg';


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
      name: 'Publications',
      url: '#publications',
    },
    {
      name: 'Works',
      url: '#works',
    },
  ];
}
angular.module('myApp').controller('NavController', NavController);
