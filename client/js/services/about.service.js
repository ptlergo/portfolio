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
    development: {
      name: 'Development',
      icon: '',
      techniques: {
        name: 'Techniques',
        icon: '',
        list: [],
      },
      skills: {
        name: 'Skills',
        icon: '',
        list: [],
      },
    },
    design: {
      name: 'Design',
      icon: '',
      techniques: {
        name: 'Techniques',
        icon: '',
        list: [],
      },
      tools: {
        name: 'Tools',
        icon: '',
        list: [],
      },
    },
   }
}

angular.module('myApp').factory('aboutService', aboutService);
