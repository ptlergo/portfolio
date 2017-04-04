/**
  * @ngdoc method
  * @name MainController
  * @methodOf module.MainController
  * @description
  * Main controller for homepage, header, and footer
  *
  * @returns {}
*/
function MainController() {
  const vm = this;
  vm.main_logo = '../../img/pat-logo.svg';

  vm.templates = [
    { name: 'about', url: 'views/home/about-section.html' },
    { name: 'works', url: 'views/home/works-section.html' },
    { name: 'publications', url: 'views/home/publications-section.html' },
  ];
}


angular.module('myApp').controller('MainController', MainController);
