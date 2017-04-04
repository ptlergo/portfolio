/**
 * @ngdoc method
 * @name AboutController
 * @methodOf module.AboutController
 * @description
 * About page controller
 *
 * @returns {}
 */
function AboutController(aboutService) {
  const vm = this;
  vm.img_src = 'https://marypomerantzadvertising.com/wp-content/uploads/responsiveweb.gif';
  vm.printAbout = 'About Me';
  vm.profs = aboutService;
  vm.skills = aboutService.Proficiencies.development.skills.list;
  vm.techniquesDev = aboutService.Proficiencies.development.techniques.list;
  vm.techniquesDes = aboutService.Proficiencies.design.techniques.list;
  vm.tools = aboutService.Proficiencies.design.tools.list;
  vm.summary = aboutService.Proficiencies.summary;
}

AboutController.$inject = ['aboutService'];
angular.module('myApp').controller('AboutController', AboutController);
