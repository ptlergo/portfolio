/**
  * @ngdoc method
  * @name AboutController
  * @methodOf module.AboutController
  * @description
  * About page controller
  *
  * @returns {}
*/
function AboutController() {
  const vm = this;
  vm.printAbout = 'About View message';
  vm.summary = 'My name is Patrick Tunga-Lergo. I am a delvoper.' +
               'A full sail student. I write for publications' +
               'I also do a lot of other stuff i will get into later';
}

angular.module('myApp').controller('AboutController', AboutController);
