angular.module('myApp', ['ngRoute'])
  .config(($routeProvider) => {
    const homeRoute = {
      controller: 'MainController',
      templateUrl: 'views/home.html',
    };

    const aboutRoute = {
      controller: 'MainController',
      templateUrl: 'views/about.html',
    };

    const writingsRoute = {
      controller: 'MainController',
      templateUrl: 'views/writings.html',
    };

    const worksRoute = {
      controller: 'MainController',
      templateUrl: 'views/works.html',
    };

    $routeProvider.when('/', homeRoute);
    $routeProvider.when('/about', aboutRoute);
    $routeProvider.when('/writings', writingsRoute);
    $routeProvider.when('/works', worksRoute);
    $routeProvider.otherwise({ redirectTo: '/' });
  });
