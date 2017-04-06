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
        summary: '',
      },
    },
  };
}
angular.module('myApp').factory('homeService', homeService);
