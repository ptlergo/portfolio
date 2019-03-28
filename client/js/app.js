angular.module('myApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap'])
  .config(($routeProvider, $locationProvider, $compileProvider, $provide) => {
    const homeRoute = {
      controller: 'HomeController',
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

    const musicemRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works/musicem.html',
    };
    const lonerTourRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works/lonertour.html',
    };
    const winterSoulsticeRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works/wintersoulstice.html',
    };
    const quickSlingRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works/quicksling.html',
    };

    $routeProvider.when('/', homeRoute);
    $routeProvider.when('/about', aboutRoute);
    $routeProvider.when('/publications', publicationsRoute);
    $routeProvider.when('/works', worksRoute);
    $routeProvider.when('/works/musicem', musicemRoute);
    $routeProvider.when('/works/lonertour', lonerTourRoute);
    $routeProvider.when('/works/wintersoulstice', winterSoulsticeRoute);
    $routeProvider.when('/works/quicksling', quickSlingRoute);
    $routeProvider.otherwise({ redirectTo: '/' });

    $provide.decorator('$sniffer', ($delegate) => {
      $delegate.history = false;
      return $delegate;
    });

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $compileProvider.debugInfoEnabled(false);
  });
