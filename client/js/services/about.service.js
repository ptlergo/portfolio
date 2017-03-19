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
    'development': {
      'name': 'Development',
      'icon': 'k',
      'techniques': {
        'name': 'Techniques',
        'icon': '',
        'list': [],
      },
      'skills': {
        'name': 'Skills',
        'icon': '',
        'list': ['html5', 'css3', 'angularJS', 'JavaScript/ES6',
         'JQuery', 'Git Hooks', 'Gulp/Grunt', 'NodeJS',
         'Sass/Less', 'React', 'ReactNative', 'ionic', ],
      },
    },
    'design': {
      'name': 'Design',
      'icon': '',
      'techniques': {
        'name': 'Techniques',
        'icon': '',
        'list': [],
      },
      'tools': {
        'name': 'Tools',
        'icon': '',
        'list': [],
      },
    },
   }
}

angular.module('myApp').factory('aboutService', aboutService);
