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
        name: 'music\'em The Content Aggregation Progressive Web App.',
        path: 'musicem',
        details: 'MEAN Stack progressive web app. that aggregates content from curated list of music brands.',
        challenges: `Music'em is built with X-Ray to create a bot that scrapes websites of interest.
                     I built multiple bots per site to collect information such as: content title, images,
                     links, and etc. The data is then saved to a firebase database for further access.
                     AngularJS was used to bind my information from my nodejs API to the front-end. My app.
                     runs on the express NodeJS server. I gained a thorough understanding of JavaScript,
                     Angular's MVVM architecture and http requests from this project.`,
        image: 'http://marvelapp.com/1f3ia7a?emb=1',
        case_images: ['../img/case-images/musicem/musicem-case-image.png'],
        gif_src: 'https://media.giphy.com/media/3ohzdLBDAwCtfWy6sM/giphy.gif',
        type: 'web app',
        tech: ['AngularJS', 'API', 'NodeJS', 'firebase', 'css3', 'JavaScript',
          'material design', 'X-Ray', 'google app engine'],
        tags: 'PWA, angularjs, node, firebase, javascript',
        category: 'web',
      },
      {
        name: 'Sylvan LaCue\'s The Loner Tour Marketing Campaign',
        path: 'lonertour',
        details: 'Took advantage of the WordPress CMS to establish an e-commerce hub for a concert and drive sales to event.',
        challenges: ` I developed the 8Pounds Music website on the WordPress CMS from a PHP based theme. As of recent
                      there are more than 400 articles written on the platform with images, audio, and video content to match.
                      The benefit of the CMS is the many plugins one of which I used to create a ticket kiosk widget.`,
        paragraphs: [
          `Ticket Tailor allowed the appropiate ability to track meta data of incoming sales.
             In corelation with geni.us links I was able to create custom links for each individual selling tickets
             thus tracking each sellers ticket amounts and allowing the ability to redirect to any page needed at any time.
             The links were enhanced with SEO techniques for increased keyword search results for local concerts. A FaceBook
             pixel was added to the links to track the demographics marketed to on FaceBook from the ad campaign I started from
             the 8Pounds Music FaceBook page. `,
          `Developing this functionality required the use of Stripe, a transcation app. I used
             their API for secure ticket transcations online that were not used from PayPal. The transacations I
             made were also requesting additional info. from customers such as referal details in order to increase
             sales of future events.`,
          `The conclusion of the campaign provided an increase of the artists involved fan base, generated
             revenue that exceeded expectations, and had a high egagement rate across twitter, FaceBook, Instagram, and SnapChat.
             The head liner artist Sylvan LaCue will soon after take the results from the concert to then participate in a much
             larger tour with Saba Pivot across the nation. The event company Creative's Only used the meta data and egagement results
             to later partner in a festival with DJ Khaled in Miami for college students.`,
        ],
        image: '',
        gif_src: '',
        case_images: ['../img/case-images/thelonertour/sylvan-banner.png'],
        type: 'Marketing Campaign & eCommerce',
        tech: ['WordPress', 'PHP', 'MySQL', 'BootStrap3', 'JQuery', 'Stripe API', 'Adobe PhotoShop'],
        tags: 'Stripe API, php, bootstrap, jquery, WordPress, branding, e-commerce',
        category: 'marketing & ecommerce',
      },
      {
        name: 'Winter Soulstice Concert RSVP App.',
        path: 'wintersoulstice',
        details: 'Progressive web app for a concert customer to reserve tickets and view details of performers. ',
        challenges: `Writing the content for each performer took some time. As this was my first use of the
                     codeIgniter framework it was tricky to apply MVC with my PHP coding. The bootstrap styling
                     was simple until using the popup modal for each performer, I had to add a boolean case to get
                     the modal to open upon screen click, but because my knowledge was limited at the time I did not
                     properly develop the app. for desktops so the z-index I added for the snow effect prevented the
                     button listening event to happen. `,
        image: '../img/winter.gif',
        gif_src: '../img/winter-soulstice-rsvp-app.gif',
        type: 'app',
        tech: ['codeIgniter', 'PHP', 'MongoDB', 'BootStrap3', 'JQuery', 'Heroku'],
        tags: 'codeigniter, php, bootstrap, jquery',
        category: 'web',
      },
    ],
    designs: [],
    Device: {
      img: '../../img/iphone.png',
    },
  };
}

angular.module('myApp').factory('worksService', worksService);
