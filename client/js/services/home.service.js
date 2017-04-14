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
        summary: `Hello, I am Patrick, A Digital Designer & Front-End Web Developer with 3+ years
                  of experience based in Florida. I tell unique stories using the digital language. My
                  coded narratives create fully responsive websites and interactive apps that drive sales,
                  boost profitability, and engage users. It brings me joy to collaborate intimately with
                  startups, agencies, and individuals to craft compelling brand identities that
                  live online as a 'digital you'.`,
      },
      works: {
        title: 'My Works',
        tagline: 'Details of some projects i\'ve worked on',
        templateUrl: 'views/home/works-section.html',
        imgUrl: '',
        summary: `My years have been spent creating a variety of digital content as a Full Sail University
                  Web Design & Development student, and for clients such as: musicians, agencies, and companies.
                  I've made websites, apps, web tools, logos, and graphics. I believe that simplicity can
                  come from complexity which shows in my minimalist design approach. Before beginning I always
                  ask 'how can I effectively embody the creative expression of my client's brand?`,
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
        links: [
          { title: 'Making music\'em: A Progressive Web App.',
            src: 'https://www.youtube.com/watch?v=BL80370LkzQ',
            category: 'talks',
          },
          { title: 'Kim ft. King Los Block 4',
            src: 'http://bit.ly/2p3CkfT',
            publication: '8Pounds',
            category: 'writings',
          },
          { title: 'Kaiydo Fruit Punch',
            src: 'http://bit.ly/2oUT1xa',
            publication: '8Pounds',
            category: 'writings',
          },
          { title: 'Metatags',
            src: '',
            publication: 'Medium',
            category: 'writings',
          },
          { title: 'Flexbox Button Animation',
            src: '',
            publication: 'Medium',
            category: 'writings',
          },
        ],
      },
    },
    Contact: {
      social: [
        'https://www.linkedin.com/in/patrickfunom',
        'https://twitter.com/patrickfunom',
        'https://github.com/ptlergo',
      ],
      other: [
        'me@patrickfunom.com',
        '1-407-655-9901',
      ],
    },
    brand: '../../img/pat-logo.svg',
  };
}
angular.module('myApp').factory('homeService', homeService);
