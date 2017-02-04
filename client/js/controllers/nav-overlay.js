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

  vm.navToggle = () => {
    console.log('nav clicked');

  };
}

angular.module('myApp').controller('NavController', NavController);
