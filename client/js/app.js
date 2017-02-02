angular.module('myApp', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    const homeState = {
      controller: 'MainController',
      name: 'home',
      template: 'views/home.html',
      url: '/home',
    };

    $stateProvider.state(homeState);
    $urlRouterProvider.otherwise('/home');
  });
