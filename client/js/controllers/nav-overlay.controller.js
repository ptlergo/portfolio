/**
  * @ngdoc method
  * @name NavController
  * @methodOf module.NavController
  * @description
  * Navbar controller for overlay click
  *
  * @returns {}
*/
function NavController(homeService) {
  const vm = this;

  vm.hamClass = true;
  vm.mToggle = false;
  vm.brand = homeService.brand;


  vm.routes = [
    {
      name: 'Home',
      url: 'home',
    },
    {
      name: 'About',
      url: 'about',
    },
    {
      name: 'Publications',
      url: 'publications',
    },
    {
      name: 'Projects',
      url: 'works',
    },
  ];
}
NavController.$inject = ['homeService'];
angular.module('myApp').controller('NavController', NavController);
