function CarouselController() {
  const vm = this;
  vm.msg = 'carousel';
  vm.writings = [
    {
      id: 0,
      src: 'http://i.imgur.com/H981AN7.jpg',
    },
    {
      id: 1,
      src: 'http://i.imgur.com/ArRiBMs.png',
    },
  ];

  vm.works = [
    {
      id: 0,
      src: 'http://i.imgur.com/Ls0YKZF.jpg',
    },
    {
      id: 1,
      src: 'http://i.imgur.com/ArRiBMs.png',
    },
  ];
}
angular.module('myApp').controller('CarouselController', CarouselController);
