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
            'Digital Marketing', 'UCD', 'TDD', 'Flux Application Architecture',
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
          list: ['Wireframing/Prototyping', 'Pixel Perfect Layouts', 'Golden Ratio', 'Rule Of Thirds', 'Flat Design'],
          details: `My expereince as a Scrum Master working in an agile enviroment alongside 
                    back-end developers, designers, and other front-end developers.`,
        },
        tools: {
          name: 'Tools',
          icon: '',
          list: ['Whiteboard', 'Notecards', 'Adobe Illustrator', 'Adobe PhotoShop', 'Sketch App', 'Trello',
            'FaceBook Origami', 'Optimizely', 'InvisionApp', 'Gulp Task Manager', 'Mocha/Jasmine Unit Tests', 'Visual Studio IDE',
          ],
          details: `Each tools I use help me conduct a User-Centered Design approach in achieving the goal to
                    build a well conceived product that has thoughtful unit tests and will always function as planned.`,
        },
      },
      aboutSite: `This website has been built from the ground up using
                  AngularJS and Node.js for an express server that optimizes speed
                  with a Google page rank score of 98 on mobile and desktop. The animations
                  are custom using CSS keyframes and AngularJS. All the custom animations, and
                  buttons are made with Sass for easy use across other projects, and Gulp as my 
                  task manager to execute unit tests, and BrowserSync easily. More details can be
                  found in the public repo on my github account.`,
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
