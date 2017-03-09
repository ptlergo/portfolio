function CarouselController() {
  const vm = this;
  vm.msg = 'carousel';
  vm.works = [
    {
      id: 0,
      src: '../../img/musicem-scroll.gif',
    },
    {
      id: 1,
      src: '../../img/winter-soulstice-prototype.gif',
    },
    {
      id: 2,
      src: '../../img/winter.gif',
    },
  ];
}
angular.module('myApp').controller('CarouselController', CarouselController);
