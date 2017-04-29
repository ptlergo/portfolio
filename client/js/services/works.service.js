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
        name: 'music\'em: Content Aggregation App',
        path: 'musicem',
        details: 'A MEAN Stack Progressive Web App. I developed in a 3 month SCRUM sprint.',
        challenges: `Music'em is built with X-Ray to create a bot that scrapes websites of interest.
                     I built multiple bots per site to collect information such as: content title, images,
                     links, and etc. The data is then saved to a firebase database for further access.
                     AngularJS was used to bind my information from my nodejs API to the front-end. My app.
                     runs on the express NodeJS server. I gained a thorough understanding of JavaScript,
                     Angular's MVVM architecture and http requests from this project.`,
        paragraphs: [
          `The intent of this project was not only to showcase the skills acquired as a Full Sail University
            Web Design and Development student, but to also establish a credible and profitable brand to further the goals
            i've established from the expertise acquired as the Editor-In-Chief of 8Pounds Music.`,
          `The project took the span of 3 months, each month focusing on different phases of SPRINTS.`,
          `Month 1 focused on conception.`,
          `Month 2 focused on usability tests.`,
          `Month 3 focused on development, QA, and deployment.`,
        ],
        image: 'http://marvelapp.com/1f3ia7a?emb=1',
        case_images: [
          '../img/case-images/musicem/musicem-case-image.png',
          '../img/case-images/musicem/xxl-influencers.png',
          '../img/case-images/musicem/home-m.png',
          '../img/case-images/musicem/musicem-engagement.png',

        ],
        gif_src: 'https://media.giphy.com/media/3ohzdLBDAwCtfWy6sM/giphy.gif',
        type: 'web app',
        tech: ['AngularJS', 'API', 'NodeJS', 'firebase', 'css3', 'JavaScript',
          'material design', 'X-Ray', 'google app engine'],
        tags: 'PWA, angularjs, node, firebase, javascript',
        category: 'web',
      },
      {
        name: 'Event Campaign of Sylvan LaCue\'s "The Loner Tour"',
        path: 'lonertour',
        details: `Partnered with CreativesOnly, an event company. My task was to with deliver a digital strategy
                  to optimize profits and fan engagement of Sylvan LaCue's "The Loner Tour".`,
        challenges: ` I utilized my 8Pounds Music platform to opperate as the concert 'hub'. 8Pounds.com is developed on
                      the WordPress CMS from a PHP based theme I tailored for my brand's needs which includes e-commerce.
                      The 8Pounds platform has an audience ranging between 16 - 26yrs of age, the prime demographic to target.
                      The benefit of using the CMS is the many plugins, one of which I used to create a ticket kiosk widget for the concert.`,
        paragraphs: [
          `The Ticket Tailor service allowed me to set certain meta data values to track of incoming sales such as: device used,
             concert referal method, purchasing method, and a few others. This information will later be of huge value in increasing
             future events' potential revenue. Each link to the ticket kiosk were embeded with a FaceBook pixel to add more information
             from the FaceBook ad campaign created for the concert. FaceBook pixel gave more depth with customer demographics. `,
          'The Stripe API came in handy for making secure credit card transactions with a receipt.',
          `The result of the campaign was: an increase of all the artists', and the event company's visibility, increase of their fan base
             twitter, FaceBook, Instagram, and SnapChat engagement rate, surplus of concert revenue expectation, and saved budget amount.
             The head liner, Sylvan LaCue, would soon be presented with the oppurtunity to join a larger nationwide tour with
             Saba Pivot, and the event company, Creative's Only partnered in a Miami, FL college festival with DJ Khaled.
             The experience was enjoyable and built team work skills under a Agile workflow enviroment. I learned additional branding
             techniques, and eCommerce tools that will surely drive sales and enhance overall enjoyment.`,
          `A video recap of the event was created to allow fans to relive the experience forever, and to also envoke emotions of the
             possible fun expereince that can be delivered for projects to come. The event was documented by Orlando Weekly.`,
        ],
        image: '',
        gif_src: '../img/case-images/thelonertour/poster-thelonertour.png',
        case_images: [
          '../img/case-images/thelonertour/poster-thelonertour-instagram.png',
          '../img/case-images/thelonertour/stripe-api.png',
          '../img/case-images/thelonertour/ticket_sales.png',
          '../img/case-images/thelonertour/poster-lonertour-at-venue.jpg',
          '../img/case-images/thelonertour/purchases-turn-into-visual-stats.png',
          '../img/case-images/thelonertour/mockups/mockup-orlando-weekly-sylvan-lacue.png',
          '../img/case-images/thelonertour/mockups/mockup-thelonertour-editpage.png',
          '../img/case-images/thelonertour/mockups/mockup-thelonertour-fb-event.png',
        ],
        type: 'Marketing Campaign & eCommerce',
        tech: ['WordPress', 'PHP', 'MySQL', 'BootStrap3', 'JQuery', 'Stripe API', 'Adobe PhotoShop'],
        tags: 'Stripe API, php, bootstrap, jquery, WordPress, branding, e-commerce',
        category: 'digital strategy',
      },
      {
        name: 'Winter Soulstice RSVP App.',
        path: 'wintersoulstice',
        details: 'PHP based Progressive Web App for concert customers to have memorable reservation experience that seeks to inform and incentivise social media engagement. ',
        challenges: `This was my first use of the codeIgniter framework, it was tricky practicing MVC with PHP.
                     The bootstrap styling was simple until using the popup modal for each performer, I had to
                     add a boolean case to get the modal to open upon screen click, but because my knowledge
                     was limited at the time I did not properly develop the app. for desktops so the z-index I
                     added for the JavaScript snow effect prevented the button listening event from happening. `,
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
