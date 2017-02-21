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
  const vm = this;
  vm.imgArray = [
    {
      src: 'https://unsplash.com/collections/curated/133?photo=uZxT3njDQYc',
    },
    {
      src: 'https://unsplash.com/collections/curated/133?photo=6xh7H5tWj9c',
    },
    {
      src: 'https://unsplash.com/collections/curated/133?photo=OWbH9a8Yi2I',
    },
    {
      src: 'https://unsplash.com/collections/curated/133?photo=duiETcZN7O4',
    },
  ];
  return {
    restrict: 'AEC',
    templateUrl: 'views/templates/carousel-directive.html',
  };
}

angular.module('myApp').directive('carousel', carousel);
