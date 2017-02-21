function CarouselController() {
  const vm = this;
  vm.msg = 'carousel';
  vm.slides = [
    {
      src: 'http://i.imgur.com/H981AN7.jpg',
    },
    {
      src: 'http://i.imgur.com/ArRiBMs.png',
    },
    {
      src: '',
    },
    {
      src: '',
    },
  ];
}
angular.module('myApp').controller('CarouselController', CarouselController);
