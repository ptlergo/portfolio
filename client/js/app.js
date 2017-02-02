angular.module('myApp', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    const homeState = {
      controller: 'MainController',
      name: 'home',
      templateUrl: 'views/home.html',
      url: '/home',
    };

    const testState = {
      controller: 'MainController',
      name: 'test',
      templateUrl: 'views/test.html',
      url: '/test',
    };

    $stateProvider.state(testState);
    $stateProvider.state(homeState);
    $urlRouterProvider.otherwise('/home');
  });
