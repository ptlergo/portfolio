/**
  * @ngdoc directive
  * @name Carousel
  * @methodOf directive.Carousel
  * @description
  * Image Carousel
  *
  * @returns {}
*/
function Carousel() {
  return {
    msg: 'Carousel',
  };
}

angular.module('myApp').directive('Carousel', Carousel);
