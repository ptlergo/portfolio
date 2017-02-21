/**
  * @ngdoc directive
  * @name carousel
  * @methodOf directive.carousel
  * @description
  * Image carousel
  *
  * @returns {}
*/
function carousel() {
  return {
    restrict: 'AEC',
    templateUrl: 'views/templates/carousel-directive.html',
    scope: {
      title: '=',
    },
  };
}

angular.module('myApp').directive('carousel', carousel);
