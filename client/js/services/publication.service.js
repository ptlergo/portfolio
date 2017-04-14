/**
 * @ngdoc method
 * @name homeService
 * @methodOf module.homeService
 * @description
 * Home Page service for section summaries
 *
 * @returns {}
 */
function publicationService() {
  return {
    publications: {
      title: 'My Publications',
      tagline: '',
      templateUrl: 'views/home/publications-section.html',
      imgUrl: 'https://marypomerantzadvertising.com/wp-content/uploads/responsiveweb.gif',
      summary: {
        writings: `I've written more than 300 articles on my music publication 8Pounds.com.
                   Other writings include sales copy, and code tutorials on Medium.com`,
        talks: `My background as a math tutor helps me to communicate.
                  I recently had the opportunity to communicate to a worldwide broadcasted
                  audience and a room full of students at Full Sail University about my
                  journey developing my latest web app. 'music'em'.`,
      },
      links: [{
        title: 'Making music\'em: A Progressive Web App.',
        src: 'https://www.youtube.com/watch?v=BL80370LkzQ',
        category: 'talks',
      },
      {
        title: 'Kim ft. King Los Block 4',
        src: 'http://bit.ly/2p3CkfT',
        publication: '8Pounds',
        category: 'writings',
      },
      {
        title: 'Kaiydo Fruit Punch',
        src: 'http://bit.ly/2oUT1xa',
        publication: '8Pounds',
        category: 'writings',
      },
      {
        title: 'Metatags',
        src: '',
        publication: 'Medium',
        category: 'writings',
      },
      {
        title: 'Flexbox Button Animation',
        src: '',
        publication: 'Medium',
        category: 'writings',
      },
      ],
    },
  };
}
angular.module('myApp').factory('publicationService', publicationService);
