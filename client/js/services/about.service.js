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
        },
        tools: {
          name: 'Tools',
          icon: '',
          list: ['Adobe Illustrator', 'Adobe PhotoShop', 'Sketch App',
            'FaceBook Origami', 'MarvelApp', 'InvisionApp'],
        },
      },
      summary: `
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
