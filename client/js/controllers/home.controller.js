/**
  * @ngdoc method
  * @name HomeController
  * @methodOf module.HomeController
  * @description
  * Home controller used for homepage, header, and footer
  *
  * @returns {}
*/
function HomeController(homeService) {
  const vm = this;
  vm.main_logo = '../../img/pat-logo.svg';
  vm.homeService = homeService;
  vm.templates = [
    { name: 'about', url: 'views/home/about-section.html' },
    { name: 'works', url: 'views/home/works-section.html' },
    { name: 'publications', url: 'views/home/publications-section.html' },
  ];
}

HomeController.$inject = ['homeService'];
angular.module('myApp').controller('HomeController', HomeController);
