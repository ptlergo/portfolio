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
        templateUrl: 'views/home/about-section.html',
        summary: `Hello, I am Patrick, A Digital Designer & Front-End Web Developer with 3+ years
                  of experience based in Florida. I tell unique stories using the digital language. My
                  coded narratives create fully responsive websites and interactive apps that drive sales,
                  boost profitability, and engage users. It brings me joy to collaborate intimately with
                  startups, agencies, and individuals to craft compelling brand identities that
                  live online as a 'digital you'.`,
      },
      works: {
        title: 'My Works',
        templateUrl: 'views/home/works-section.html',
        summary: '',
      },
      publications: {
        title: 'My Publications',
        templateUrl: 'views/home/publications-section.html',
        summary: `From writing code to writing literature, my passions are intertwined. Some
                  of my writings are for brand identies such as taglines, artists bios,
                  and advertisement copy. I also write articles on my own publication, 8Pounds Music,
                  and blog about tech on Medium during my free time.`,
      },
    },
  };
}
angular.module('myApp').factory('homeService', homeService);