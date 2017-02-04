angular.module('myApp', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider.when('/', {
      controller: 'MainController',
      template: 'template connect',
    });
  });
