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
        'Proficiencies': {
            'development': {
                'name': 'Development',
                'icon': 'd',
                'techniques': {
                  'name': 'Techniques',
                  'list': ['tech', 'd'],
                },
                'skills': {
                  'name': 'Skills',
                  'icon': 'c',
                  'list': ['html5', 'css3', 'angularJS', 'JavaScript/ES6',
                   'JQuery', 'Git Hooks', 'Gulp/Grunt', 'NodeJS',
                   'Sass/Less', 'React', 'ReactNative', 'ionic', ],
                }
            },
            'design': {
                'name': 'Design',
                'icon': 'a',
                'techniques': {
                  'name': 'Techniques',
                  'icon': 'ic',
                  'list': ['fd'],
                },
                'tools': {
                  'name': 'Tools',
                  'icon': '',
                  'list': ['ds'],
                }
            }
        },
    }
}

angular.module('myApp').factory('aboutService', aboutService);
