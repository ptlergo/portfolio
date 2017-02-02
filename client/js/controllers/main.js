function MainController() {
  const vm = this;
  vm.print = 'PRINTED!';
}

angular.module('myApp').controller('MainController', MainController);
