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
                'icon': '',
                'techniques': {
                  'name': 'Techniques',
                  'list': ['Object Oriented Programming', 'MVC', 'MVVM', 'SEO', 'Flux'],
                },
                'skills': {
                  'name': 'Skills',
                  'icon': '',
                  'list': ['html5', 'css3', 'angularJS', 'JavaScript/ES6',
                   'JQuery', 'Git Hooks', 'Gulp/Grunt', 'NodeJS',
                   'Sass/Less','BootStrap','MongoDB', 'MySQL', 'React', 'ReactNative', 'ionic', ],
                }
            },
            'design': {
                'name': 'Design',
                'icon': '',
                'techniques': {
                  'name': 'Techniques',
                  'icon': '',
                  'list': ['Pixel Perfect Layouts', 'Golden Ratio', 'Rule Of Thirds',
                  'Material Design', 'Flat Design' ],
                },
                'tools': {
                  'name': 'Tools',
                  'icon': 'Adobe PhotoShop',
                  'list': ['Adobe Illustrator', 'Adobe PhotoShop', 'Sketch App',
                   'FaceBook Origami', 'MarvelApp', 'InvisionApp'],
                }
            }
        },
    }
}

angular.module('myApp').factory('aboutService', aboutService);
