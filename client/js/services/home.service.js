/**
  * @ngdoc method
  * @name homeService
  * @methodOf module.homeService
  * @description
  * Home Page service for section summaries
  *
  * @returns {}
*/
function homeService() {
  return {
    Content: {
      about: {
        title: 'About Me',
        template: '',
        summary: '',
      },
      works: {
        title: 'About Me',
        template: '',
        summary: '',
      },
      publication: {
        title: 'About Me',
        template: '',
        summary: '',
      },
    },
  };
}
angular.module('myApp').factory('homeService', homeService);
