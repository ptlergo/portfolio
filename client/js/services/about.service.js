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
          list: ['Object Oriented Programming', 'MVC', 'MVVM', 'Whitehat SEO', 'Digital Marketing', 'Flux Application Architecture'],
        },
        skills: {
          name: 'Skills',
          icon: '',
          list: ['html5', 'css3', 'angularJS', 'JavaScript/ES6',
            'JQuery', 'Git Hooks', 'Gulp/Grunt', 'NodeJS',
            'Sass/Less', 'BootStrap', 'MongoDB', 'MySQL', 'React', 'ReactNative', 'ionic'],
          details: `My knowledge as a developer allows me to make consistent layouts
                    that are user friendly and easy for developers to integrate and
                    scale reliably.`,
        },
      },
      design: {
        name: 'Design',
        icon: '../../img/paint-palette.svg',
        techniques: {
          name: 'Techniques',
          icon: '',
          list: ['Pixel Perfect Layouts', 'Golden Ratio', 'Rule Of Thirds',
            'Material Design', 'Flat Design'],
          details: `I am able to work in an agile working enviroment alongside
                    back-end engineers, designers, and other front-end developers.
                    I have experience as a Scrum Master.`,
        },
        tools: {
          name: 'Tools',
          icon: '',
          list: ['Adobe Illustrator', 'Adobe PhotoShop', 'Sketch App',
            'FaceBook Origami', 'MarvelApp', 'InvisionApp'],
          details: `My knowledge as a developer allows me to make consistent layouts
                    that are user friendly and easy for developers to integrate and
                    scale reliably.`,
        },
      },
      aboutSite: `This website has been built from the ground up. I started with
                  conception using wireframes to execution using prototyping tools
                  and to deployment.
                  Built using AngularJS and Node.js for optimal speed
                  and easy SEO integration Css and custom animations written
                  in Sass with a mobile first design philosophy. Gulp as my Task manager
                  Jasmine and Karma for unit testing more details visit my repo.`,

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
