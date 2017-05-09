/**
 * @ngdoc method
 * @name aboutService
 * @methodOf module.aboutService
 * @description
 * About Page service with list of skills and expertise
 *
 * @returns {}
 */
function aboutService() {
  return {
    Proficiencies: {
      development: {
        name: 'Development',
        icon: '../../img/computer.svg',
        techniques: {
          name: 'Techniques',
          list: ['Object Oriented Programming', 'MVC', 'MVVM', 'Whitehat SEO',
            'Digital Marketing', 'TDD', 'Flux Application Architecture',
          ],
        },
        skills: {
          name: 'Skills',
          icon: '',
          list: ['HTML5', 'CSS3', 'AngularJS', 'TypeScript', 'JavaScript/ES6', 'PHP',
            'Git Hooks', 'NodeJS', 'JQuery', 'SASS', 'WordPress', 'MongoDB', 'MySQL', 'React',
          ],
          details: `My knowledge as a developer allows me to make consistent frameworks
                    that are user friendly, easy to integrate, and scale reliably.`,
        },
      },
      design: {
        name: 'Design',
        icon: '../../img/paint-palette.svg',
        techniques: {
          name: 'Techniques',
          icon: '',
          list: ['UCD', 'Pixel Perfect Layouts', 'Golden Ratio', 'Rule Of Thirds', 'Flat Design'],
          details: `Working in an agile enviroment alongside key team members as the scrum master has
          taught me the importance of communicating not just verbally but also with images that best 
          convey the collective vision.`,
        },
        tools: {
          name: 'Tools',
          icon: '',
          list: ['Whiteboard', 'Notecards', 'Sketch Pad', 'Adobe Illustrator', 'Adobe PhotoShop', 'Sketch App', 'Trello',
            'FaceBook Origami', 'Optimizely', 'InvisionApp', 'Gulp Task Manager', 'Mocha/Jasmine Unit Tests', 'Visual Studio IDE',
          ],
          details: `Each tools I use help me conduct a User-Centered Design approach in achieving the goal to
                    build a well conceived product that has thoughtful unit tests and will always function as planned.`,
        },
      },
      aboutSite: `This application has been built from the ground up using AngularJS running on a Node.js enviroment
                  deployed to A DigitalOcean Ubuntu VPS with NGINX as a reverse proxy. Also a 'production version' app
                  deployed to the PaaS, Heroku. All animations, and buttons are made using SASS. The task manager Gulp
                  I use to execute Jasmine unit tests, and BrowserSync for a more efficient development enviroment.
                  For more details visit the public repository on my github account.`,
      tagline: `
                Hello, I'm Patrick Funom Tunga-Lergo, A Digital Designer & Front-End Web Developer
                with 3+ years of experience based in Orlando, Florida. I tell unique stories using
                digital languages. My coded narratives develop fully interactive and responsive
                websites as well as apps that drive sales, boost profitability, and engage consumers.
                Another passion of mine, besides soccer, is writing. My articles about music, and tech,
                are published on various platforms. It brings me joy to collaborate intimately with startups,
                agencies, and individuals to craft compelling brand identities that live online as a 'digital you'.`,
    },
  };
}

angular.module('myApp').factory('aboutService', aboutService);
