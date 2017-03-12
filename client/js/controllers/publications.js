/**
  * @ngdoc method
  * @name WritingsController
  * @methodOf module.WritingsController
  * @description
  * Writings Page controller
  *
  * @returns {}
*/
function PublicationsController() {
  const vm = this;
  vm.img_src = 'https://marypomerantzadvertising.com/wp-content/uploads/responsiveweb.gif';
  vm.printWritings = 'My Publications';
  vm.summary = `From writing code to writing literature, my passions are intertwined. Some
  of my writings include brand identies such as taglines, artists bios, and ad copy. I also write
  articles on music and tech which are published online.`;
}

angular.module('myApp').controller('PublicationsController', PublicationsController);
