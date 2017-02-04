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
    templateUrl: 'views/templates/hamburger-directive.html',
  };
}

angular.module('myApp').directive('hamburgerIcon', hamburgerIcon);
