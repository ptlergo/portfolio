/**
  * @ngdoc directive
  * @name hamburgerIcon
  * @methodOf directive.hamburgerIcon
  * @description
  * Hamburger menu icon
  *
  * @returns {}
*/
function hamburgerIcon() {
  return {
    template: 'test menu template',
  };
}

angular.module('myApp').directive('hamburgerIcon', hamburgerIcon);
