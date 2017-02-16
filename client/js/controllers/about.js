/**
 * @ngdoc method
 * @name AboutController
 * @methodOf module.AboutController
 * @description
 * About page controller
 *
 * @returns {}
 */
function AboutController() {
  const vm = this;
  vm.img_src = 'https://marypomerantzadvertising.com/wp-content/uploads/responsiveweb.gif';
  vm.printAbout = 'About Me';
  vm.summary = `
Hello, I am Patrick, A digital designer & front-end developer with 3+ years of experience based in Florida.
I tell unique stories using the digital language. My coded narratives create fully interactive and responsive websites and apps
that drive sales, boost profitability, and engage users. I love to write and am blessed to have my articles about music or tech
published on various platforms. I love working intimately with startups, agencies, and individuals crafting compelling brand identities
that live online as a 'digital you'.`;
}

angular.module('myApp').controller('AboutController', AboutController);
