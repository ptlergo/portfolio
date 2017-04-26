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
                   Other writings include sales copy, and code tutorials on Medium.com.`,
        talks: `My background as a math tutor helps me to communicate.
                  I recently had the opportunity to talk to a worldwide broadcasted
                  audience and a room full of students at Full Sail University about my
                  journey developing my latest web app. 'music'em'.`,
      },
      links: [{
        title: 'Making music\'em: A Progressive Web App.',
        src: 'https://www.youtube.com/watch?v=BL80370LkzQ',
        img_src: 'img/graphics/thumbnails/pub-talk-thumbnail.jpg',
        publication: 'Full Sail University',
        category: 'talks',
      },
      {
        title: 'ReverbNation Redesign Proposal',
        src: 'https://issuu.com/patrickfunom/docs/proposal_draft',
        img_src: 'reverbnation-thumbnail.png',
        publication: 'Issuu',
        category: 'writings',
      },
      {
        title: 'Flexbox Button Quickie',
        src: 'https://medium.com/@patrickfunom/flexbox-button-quickie-c26695e9323',
        img_src: '',
        publication: 'Medium',
        category: 'writings',
      },
      {
        title: 'Metatags',
        src: '',
        img_src: '',
        publication: 'Medium',
        category: 'writings',
      },
      {
        title: 'Kim & King Los Post Up On New Single “BLOCK 4”',
        src: 'http://bit.ly/2p3CkfT',
        img_src: '',
        publication: '8Pounds Music',
        category: 'writings',
      },
      {
        title: 'Kaiydo\'s New Song “FRUIT PUNCH” Is An Enjoyable Blend Of Horns & 808s',
        src: 'http://bit.ly/2oUT1xa',
        img_src: '',
        publication: '8Pounds Music',
        category: 'writings',
      },
      {
        title: 'A Recap Of iEKNOWS\' Innovative Concert \'One For The Money Two For The Show\'',
        src: 'http://bit.ly/2pgKqlQ',
        img_src: 'ieknows-thumbnail.jpg',
        publication: '8Pounds Music',
        category: 'writings',
      },
      {
        title: 'Dreamville\'s Bas Makes Big Uproar At His \'Too High To Riot\' Concert',
        src: 'http://bit.ly/2oMZ6rw',
        img_src: 'bas-thumbnail.jpg',
        publication: '8Pounds Music',
        category: 'writings',
      },
      ],
    },
  };
}
angular.module('myApp').factory('publicationService', publicationService);
