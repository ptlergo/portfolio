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
  vm.tagline = 'Details of some projects i\'ve worked on';
  vm.printWorks = 'My Works';
  vm.summary = `My years have been spent creating a range of digital content such as websites
  apps, web tools, logos, and graphics. I use a minimalist approach and my philosophy is 'complexity from simplicity'.
  My works always begin with the question of 'how do I efficiently embody a creative expression of my client's brand?`;

  vm.cases = [
    {
      id: 1,
      name: 'music\'em',
      details: 'Web app that aggregates content from curated music brands.',
      challenges: '',
      image: '../img/musicem-scroll.gif',
      type: 'app',
      tech: 'AngularJS, API, NodeJS, express, firebase, css3, material design, google cloud',
      tags: '',
    },
    {
      id: 2,
      name: 'winter-soulstice',
      details: 'web app for concert that reserves tickets and as details of performers. ',
      challenges: '',
      image: '../img/winter.gif',
      type: 'app',
      tech: 'codeIgniter, PHP, MongoDB, BootStrap3, JQuery, Heroku',
      tags: '',
    },
    {
      id: 3,
      name: 'debug-squasher',
      details: 'programming tool published to npm to enhance development.',
      challenges: '',
      image: '',
      type: 'tool',
      tech: 'NodeJS, javascript, NPM',
      tags: '',
    },
    {
      id: 4,
      name: 'hamburger icon',
      details: 'angular menu icon with animation.',
      challenges: '',
      image: '',
      tech: 'AngularJS, angular-animate, css3',
      type: 'tool',
      tags: '',
    },
    {
      id: 5,
      name: '8Pounds Music',
      details: 'WordPress website template with custom css and animations applied.',
      challenges: '',
      image: '',
      type: 'website',
      tech: 'PHP, css3, JQuery, WordPress',
      tags: '',
    },
    {
      id: 6,
      name: 'MY Portfolio Page',
      details: 'Using angular and css technigues to manipulate svgs and create animations to showcase works and expereince as a developer.',
      challenges: '',
      image: '',
      type: 'web app',
      tech: 'AngularJS, css3, JQuery, JavaScript',
      tags: '',
    },
  ];
}

angular.module('myApp').controller('WorksController', WorksController);
