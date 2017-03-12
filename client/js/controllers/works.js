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
  vm.tagline = 'My Works';
  vm.summary = `My years have been spent creating a range of digital content such as websites
  apps, web tools, logos, and graphics. My works always begin with the question of 'how do I best
  embody my client's brand?`;

  vm.cases = {
    1: {
      name: 'musicem',
      details: 'Web app that aggregates content from curated music brands.',
      challenges: '',
      image: '',
      type: 'app',
      tags: '',
    },
    2: {
      name: 'winter-soulstice',
      details: 'web app for concert that reserves tickets and as details of performers. ',
      challenges: '',
      image: '',
      type: 'app',
      tags: '',
    },
    3: {
      name: 'debug-squasher',
      details: 'programming tool published to npm to enhance development.',
      challenges: '',
      image: '',
      type: 'tool',
      tags: '',
    },
    4: {
      name: 'hamburger icon',
      details: 'angular menu icon with animation.',
      challenges: '',
      image: '',
      type: 'tool',
      tags: '',
    },
    5: {
      name: '8Pounds Music',
      details: 'WordPress website template with custom css and animations applied.',
      challenges: '',
      image: '',
      type: 'website',
      tags: '',
    },
  }
}

angular.module('myApp').controller('WorksController', WorksController);
