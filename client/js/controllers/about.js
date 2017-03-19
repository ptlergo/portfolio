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
  vm.summary = `
Hello, I am Patrick, A Digital Designer & Front-End Web Developer with 3+ years of experience based in Florida.
I tell unique stories using the digital language. My coded narratives create fully interactive and responsive websites and apps
that drive sales, boost profitability, and engage users. My passion is to write, i'm blessed to have my articles about music or tech
published on various platforms. It brings me joy to collaborate intimately with startups, agencies, and individuals to craft compelling brand identities
that live online as a 'digital you'.`;
}

AboutController.$inject = ['aboutService'];
angular.module('myApp').controller('AboutController', AboutController);
