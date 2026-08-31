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
      features: {
        title: 'Features',
        tagline: '',
        templateUrl: 'views/home/features-section.html',
        imgUrl: '',
        summary: `features content`,
      },
      about: {
        title: 'About Me',
        tagline: '',
        templateUrl: 'views/home/about-section.html',
        imgUrl: '',
        summary: `Hello, I am Patrick Tunga-Lergo, 
        a UI designer and developer with 10+ years of experience based in Orlando, Florida. 
        I like to tell unique stories. Some stories are coded narratives that drive sales of brands, 
        and others are compelling experiences that engage people.`,
      },
      works: {
        title: 'My Works',
        tagline: 'Details of some projects i\'ve worked on',
        templateUrl: 'views/home/works-section.html',
        imgUrl: '',
        summary: `I graduated from Full Sail University with a BS in Web Design and Development in 2017. 
        Since then, I’ve spent the past decade crafting web apps, tools, brand identities, digital strategies, 
        and leading teams of designers and developers towards business goals. No matter the task, 
        I always begin with the question “How might I effectively embody the creative expression of my client’s brand across 
        all platforms using the latest, most suitable technology available?”`,
      },
      publications: {
        title: 'My Publications',
        tagline: '',
        templateUrl: 'views/home/publications-section.html',
        imgUrl: '',
        summary: `From writing code to writing literature, my passions are intertwined. 
        Some of my writings are used to market products. I also enjoy talking about tech, design systems, 
        and music on the publication I built, 8pounds.com, and on other publications such as ZeroHeight and Medium.`,
      },
    },
    Contact: {
      social: [
        'https://www.linkedin.com/in/patrickfunom',
        'https://twitter.com/patrickfunom',
        'https://github.com/ptlergo',
      ],
      other: [
        'ptlergo@gmail.com',
        '1-407-655-9901',
      ],
    },
    brand: '../../img/pat-logo.svg',
  };
}
angular.module('myApp').factory('homeService', homeService);