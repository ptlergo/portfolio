angular
  .module('myApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap'])
  .config(($routeProvider, $locationProvider, $compileProvider) => {
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
      templateUrl: 'views/projects.html',
    };

    const musicemRoute = {
      controller: 'WorksController',
      templateUrl: 'views/projects/musicem.html',
    };
    const lonerTourRoute = {
      controller: 'WorksController',
      templateUrl: 'views/projects/lonertour.html',
    };
    const winterSoulsticeRoute = {
      controller: 'WorksController',
      templateUrl: 'views/projects/wintersoulstice.html',
    };
    
    const quickSlingRoute = {
      controller: 'WorksController',
      templateUrl: 'views/projects/quicksling.html',
    };

    $routeProvider.when('/', homeRoute);
    $routeProvider.when('/about', aboutRoute);
    $routeProvider.when('/publications', publicationsRoute);
    $routeProvider.when('/projects', worksRoute);
    $routeProvider.when('/projects/musicem', musicemRoute);
    $routeProvider.when('/projects/lonertour', lonerTourRoute);
    $routeProvider.when('/projects/wintersoulstice', winterSoulsticeRoute);
    $routeProvider.when('/projects/quicksling', quickSlingRoute);
    $routeProvider.otherwise({
      redirectTo: '/',
    });

    // $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    // $compileProvider.debugInfoEnabled(false);
  });
