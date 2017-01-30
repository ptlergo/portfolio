angular.module('myApp', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    const homeState = {
      controller: 'MainController',
      name: 'home',
      templateUrl: '../views/home.html',
      url: '/home',
    };

    $stateProvider.state(homeState);
    $urlRouterProvider.otherwise('/home');
  });
