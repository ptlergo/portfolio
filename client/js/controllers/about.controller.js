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
  vm.img_src = about.imgUrl;
  vm.title = about.title;
  vm.skills = aboutPage.development.skills.list;
  vm.techniquesDev = aboutPage.development.techniques.list;
  vm.techniquesDes = aboutPage.design.techniques.list;
  vm.tools = aboutPage.design.tools.list;
  vm.summary = aboutPage.summary;
}

AboutController.$inject = ['aboutService', 'homeService'];
angular.module('myApp').controller('AboutController', AboutController);
