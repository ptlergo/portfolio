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
  vm.main_logo = homeService.brand;
  vm.homeService = homeService;
  vm.socialLinks = homeService.Contact.social;
  vm.date = new Date().getFullYear();
  vm.otherLinks = homeService.Contact.other;
  vm.name = homeService.Content;
  vm.summary = homeService.Content.about.summary;
  vm.templates = [
    homeService.Content.about.templateUrl,
    homeService.Content.works.templateUrl,
    homeService.Content.publications.templateUrl,
  ];
}

HomeController.$inject = ['homeService'];
angular.module('myApp').controller('HomeController', HomeController);
