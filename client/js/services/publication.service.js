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
        writings: `The music centric articles I write are prodminately published
                     on my publication, 8Pounds.com. I've written more than 300 articles
                     and also write tutorials, and OP'EDs on tech on Medium.com.`,
        talks: `My background includes tutoring math. This has helped my
                  ability to communicate. I recently had the oppurtunity to talk
                  about developing my latest app music'em. I communicated to room
                  full of Full Sail University students and a worldwide audience from
                  the broadcast on my journey as a developer.`,
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
