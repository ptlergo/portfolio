/**
  * @ngdoc method
  * @name worksService
  * @methodOf module.worksService
  * @description
  * Works Page service with case studies
  *
  * @returns {}
*/
function worksService() {
  return {
    caseStudies: [
      {
        id: 1,
        name: 'music\'em',
        details: 'Progressive web app. that aggregates content from curated music brands.',
        challenges: `Utilizing X-Ray to create a bot that scrapes the websites of interest proved
                     to be difficult but with practice I was able to establish multiple bots per site
                     that collected the information and saved it into my firebase database for access.
                     I used AngularJS to bind my information from my nodejs server to the front-end which
                     made presenting the information challenging until I applied ngAnimate library for
                    transitional animations.`,
        image: 'http://marvelapp.com/1f3ia7a?emb=1',
        gif_src: 'https://media.giphy.com/media/3ohzdLBDAwCtfWy6sM/giphy.gif',
        type: 'app',
        tech: 'AngularJS, API, NodeJS, express, firebase, css3, JavaScript, material design, X-Ray, google cloud',
        tags: 'pwa, angular, node, firebase, javascript',
      },
      {
        id: 2,
        name: 'winter-soulstice',
        details: 'Progressive web app for concert to reserves tickets and provide details of performers. ',
        challenges: `Writing the content for each performer took some time. As this was my first use of the
                     codeIgniter framework it was tricky to apply MVC with my PHP coding. The bootstrap styling
                     was simple until using the popup modal for each performer, I had to add a boolean case to get
                     the modal to open upon screen click, but because my knowledge was limited at the time I did not
                     properly develop the app. for desktops so the z-index I added for the snow effect prevented the
                     button listening event to happen. `,
        image: '../img/winter.gif',
        gif_src: '../img/winter-soulstice-rsvp-app.gif',
        type: 'app',
        tech: 'codeIgniter, PHP, MongoDB, BootStrap3, JQuery, Heroku',
        tags: 'codeigniter, php, bootstrap, jquery',
      },
      // {
      //   id: 3,
      //   name: 'debug-squasher',
      //   details: 'programming tool published to npm to enhance development.',
      //   challenges: '',
      //   image: '',
      //   type: 'tool',
      //   tech: 'NodeJS, javascript, NPM',
      //   tags: '',
      // },
      // {
      //   id: 4,
      //   name: 'hamburger icon',
      //   details: 'angular menu icon with animation.',
      //   challenges: '',
      //   image: '',
      //   tech: 'AngularJS, angular-animate, css3',
      //   type: 'tool',
      //   tags: '',
      // },
      // {
      //   id: 5,
      //   name: '8Pounds Music',
      //   details: 'WordPress website template with custom css and animations applied.',
      //   challenges: '',
      //   image: '',
      //   type: 'website',
      //   tech: 'PHP, css3, JQuery, WordPress',
      //   tags: '',
      // },
      // {
      //   id: 6,
      //   name: 'MY Portfolio Page',
      //   details: 'angular & css technigues to make animations showcaseing experience & skills.',
      //   challenges: '',
      //   image: '',
      //   type: 'web app',
      //   tech: 'AngularJS, css3, JQuery, JavaScript',
      //   tags: '',
      // },
    ],
  };
}

angular.module('myApp').factory('worksService', worksService);
