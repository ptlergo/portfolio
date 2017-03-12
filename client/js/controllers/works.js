/**
  * @ngdoc method
  * @name WorksController
  * @methodOf module.WorksController
  * @description
  * Works Page controller
  *
  * @returns {}
*/
function WorksController() {
  const vm = this;
  vm.img_src = 'https://marypomerantzadvertising.com/wp-content/uploads/responsiveweb.gif';
  vm.printWorks = 'My Works';
  vm.summary = `My years have been spent creating a range of digital content such as websites
  apps, web tools, logos, and graphics. My works always begin with the question of 'how do I best
  embody my client's brand?`;
  vm.printWorks = 'Musicem';
  vm.printWorks = 'wintersoulstice';
  vm.printWorks = '8Pounds';
  vm.printWorks = 'Web Tools';
  vm.printWorks = 'Graphics';
}

angular.module('myApp').controller('WorksController', WorksController);
