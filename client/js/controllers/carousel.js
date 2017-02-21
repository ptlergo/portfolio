function CarouselController() {
  const vm = this;
  vm.msg = 'carousel';
  vm.slides = [
    {
      id: 0,
      src: 'http://i.imgur.com/H981AN7.jpg',
    },
    {
      id: 1,
      src: 'http://i.imgur.com/ArRiBMs.png',
    },
  ];
}
angular.module('myApp').controller('CarouselController', CarouselController);
