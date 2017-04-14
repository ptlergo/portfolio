/**
 * @ngdoc method
 * @name AboutController
 * @methodOf module.AboutController
 * @description
 * About page controller
 *
 * @returns {}
 */
function AboutController(aboutService, homeService) {
  const vm = this;
  const aboutPage = aboutService.Proficiencies;
  const about = homeService.Content.about;
  vm.icons = homeService.Contact;
  vm.img_src = about.imgUrl;
  vm.aboutService = aboutService;
  vm.title = about.title;
  vm.tagline = aboutPage.tagline;
}

AboutController.$inject = ['aboutService', 'homeService'];
angular.module('myApp').controller('AboutController', AboutController);
