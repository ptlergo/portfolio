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
      summary: `From writing code to writing literature, my passions are intertwined. Some
      of my writings include brand identies such as taglines, artists bios,
      and advertisement copy. I also write music centric articles on my own publication,
      8Pounds.com. I recently had the oppurtunity to talk about developing my latest app.
      music'em to Full Sail University which was broadcasted worldwide.`,
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
