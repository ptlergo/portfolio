angular.module('myApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap'])
  .config(($routeProvider, $locationProvider) => {
    const homeRoute = {
      controller: 'MainController',
      templateUrl: 'views/home.html',
    };

    const aboutRoute = {
      controller: 'AboutController',
      templateUrl: 'views/about.html',
    };

    const publicationsRoute = {
      controller: 'PublicationsController',
      templateUrl: 'views/publications.html',
    };

    const worksRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works.html',
    };

    $routeProvider.when('/', homeRoute);
    $routeProvider.when('/about', aboutRoute);
    $routeProvider.when('/publications', publicationsRoute);
    $routeProvider.when('/works', worksRoute);
    $routeProvider.otherwise({ redirectTo: '/' });
    $locationProvider.hashPrefix('');
  });
