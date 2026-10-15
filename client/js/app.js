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
       const flexButtonRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works/flex-button.html',
    };
    const winterSoulsticeRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works/wintersoulstice.html',
    };
    const quickSlingRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works/quicksling.html',
    };
        const adventhealthRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works/adventhealth.html',
    };
        const adtplusRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works/adtplus.html',
    };
        const nebulaRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works/nebula.html',
    };

    $routeProvider.when('/', homeRoute);
    $routeProvider.when('/about', aboutRoute);
    $routeProvider.when('/publications', publicationsRoute);
    $routeProvider.when('/works', worksRoute);
    $routeProvider.when('/works/musicem', musicemRoute);
    $routeProvider.when('/works/lonertour', lonerTourRoute);
    $routeProvider.when('/works/flexbox-button', flexButtonRoute);
    $routeProvider.when('/works/wintersoulstice', winterSoulsticeRoute);
    $routeProvider.when('/works/quicksling', quickSlingRoute);
    $routeProvider.when('/works/adventhealth', adventhealthRoute);
    $routeProvider.when('/works/adtplus', adtplusRoute);
    $routeProvider.when('/works/nebula', nebulaRoute);
    $routeProvider.otherwise({ redirectTo: '/' });

    $provide.decorator('$sniffer', ($delegate) => {
      $delegate.history = false;
      return $delegate;
    });

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $compileProvider.debugInfoEnabled(false);
  });
