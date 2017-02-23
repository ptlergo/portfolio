/**
  * @ngdoc method
  * @name HomeController
  * @methodOf module.HomeController
  * @description
  * Homepage controller
  *
  * @returns {}
*/
function HomeController() {
  const vm = this;
  vm.img_src = '../../img/pat-logo-2.svg';
  vm.border_slant = '../../img/border-slant.svg';
  vm.triangle = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="480px" height="111px" viewBox="0 0 480 111" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <polyline id="Rectangle" fill="#454545" points="480 0 480 111 0 111"></polyline>
      </g>
  </svg>`;
}

angular.module('myApp').controller('HomeController', HomeController);
