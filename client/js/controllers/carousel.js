function CarouselController() {
  const vm = this;
  vm.msg = 'carousel';
  vm.works = [
    {
      id: 0,
      src: '../../img/winter-soulstice-prototype.gif',
    },
    {
      id: 1,
      src: '../../img/winter.gif',
    },
    {
      id: 2,
      src: 'http://i.imgur.com/Ls0YKZF.jpg',
    },
  ];
}
angular.module('myApp').controller('CarouselController', CarouselController);
