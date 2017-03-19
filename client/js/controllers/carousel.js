function CarouselController() {
  const vm = this;
  vm.works = [
    {
      id: 0,
      src: '../../img/musicem-scroll.gif',
    },
    {
      id: 1,
      src: 'https://media.giphy.com/media/l4FGny0c4R2xHmrQs/giphy.gif',
    },
    {
      id: 2,
      src: '../../img/winter.gif',
    },
  ];
}
angular.module('myApp').controller('CarouselController', CarouselController);
