/**
 * @ngdoc method
 * @name homeService
 * @methodOf module.homeService
 * @description
 * Home Page service for section summaries
 *
 * @returns {}
 */
function homeService() {
  return {
    Content: {
      about: {
        title: 'About Me',
        tagline: '',
        templateUrl: 'views/home/about-section.html',
        imgUrl: 'https://marypomerantzadvertising.com/wp-content/uploads/responsiveweb.gif',
        summary: `Hello, I am Patrick, A Digital Designer & Front-End Web Developer with 5+ years
                  of experience based in Orlando, Florida. I like to tell unique stories. Some stories are
                  coded narratives intended to engage users and others craft compelling messages that drive
                  sales of brands.`,
      },
      works: {
        title: 'My Works',
        tagline: 'Details of some projects i\'ve worked on',
        templateUrl: 'views/home/works-section.html',
        imgUrl: '',
        summary: `My years have been spent creating a variety of digital content as a Full Sail University
                  Web Design & Development student, and for clients such as musicians, and agencies.
                  I've created websites, apps, web tools, logos, and graphics. Before beginning I always
                  ask 'how can I effectively embody the creative expression of my client's brand across
                  devices using the latest most suitable tech. available.`,
      },
      publications: {
        title: 'My Publications',
        tagline: '',
        templateUrl: 'views/home/publications-section.html',
        imgUrl: 'https://marypomerantzadvertising.com/wp-content/uploads/responsiveweb.gif',
        summary: `From writing code to writing literature, my passions are intertwined. Some
                  of my writings include brand identies such as taglines, artists bios,
                  and advertisement copy. I also write music centric articles on my own publication,
                  8Pounds.com. I recently had the oppurtunity to talk about developing my latest app.
                  music'em to Full Sail University which was broadcasted worldwide.`,
      },
    },
    Contact: {
      social: [
        'https://www.linkedin.com/in/patrickfunom',
        'https://twitter.com/patrickfunom',
        'https://github.com/ptlergo',
      ],
      other: [
        'patrickfunom@live.com',
        '1-407-655-9901',
      ],
    },
    brand: '../../img/pat-logo.svg',
  };
}
angular.module('myApp').factory('homeService', homeService);