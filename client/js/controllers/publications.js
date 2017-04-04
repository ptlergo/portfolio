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
                of my writings are for brand identies such as taglines, artists bios,
                and advertisement copy. I also write articles on my own publication, 8Pounds Music,
                and blog about tech on Medium during my free time.`;
}
angular.module('myApp').controller('PublicationsController', PublicationsController);
