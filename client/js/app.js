angular.module('myApp', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider.when('/', {
      controller: 'MainController',
      templateUrl: 'views/home.html',
    });
  });
