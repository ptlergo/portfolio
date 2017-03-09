function CarouselController() {
  const vm = this;
  vm.msg = 'carousel';
  vm.works = [
    {
      id: 0,
      src: '../../img/musicem-scroll.mp4',
    },
    {
      id: 1,
      src: '../../img/winter.gif',
    },
    {
      id: 2,
      src: '../../img/winter-soulstice-prototype.gif',
    },
  ];
}
angular.module('myApp').controller('CarouselController', CarouselController);
