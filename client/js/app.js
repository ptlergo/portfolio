angular.module('myApp', ['ngRoute'])
  .config(($routeProvider) => {
    const homeRoute = {
      controller: 'MainController',
      templateUrl: 'views/home.html',
    };

    $routeProvider.when('/', homeRoute);
  });
