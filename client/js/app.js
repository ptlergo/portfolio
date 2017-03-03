angular.module('myApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap'])
  .config(($routeProvider, $locationProvider) => {
    const homeRoute = {
      controller: 'HomeController',
      templateUrl: 'views/home.html',
    };

    const aboutRoute = {
      controller: 'AboutController',
      templateUrl: 'views/about.html',
    };

    const writingsRoute = {
      controller: 'WritingsController',
      templateUrl: 'views/writings.html',
    };

    const worksRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works.html',
    };

    $routeProvider.when('/', homeRoute);
    $routeProvider.when('/about', aboutRoute);
    $routeProvider.when('/writings', writingsRoute);
    $routeProvider.when('/works', worksRoute);
    $routeProvider.otherwise({ redirectTo: '/' });
    $locationProvider.hashPrefix('');
  });
