/**
  * @ngdoc directive
  * @name prototype
  * @methodOf directive.prototype
  * @description
  * Case studies prototype images
  *
  * @returns {}
*/
function prototype() {
  return {
    restrict: 'AEC',
    templateUrl: 'views/templates/prototype-directive.html',
  };
}

angular.module('myApp').directive('prototype', prototype);
