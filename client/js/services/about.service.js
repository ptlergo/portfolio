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
            },
            'design': {
                'name': 'Design',
                'icon': 'a',
            }
        },
    }
}

angular.module('myApp').factory('aboutService', aboutService);
