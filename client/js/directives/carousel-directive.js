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
    msg: 'Carousel',
  };
}

angular.module('myApp').directive('Carousel', Carousel);
