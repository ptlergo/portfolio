angular.module('myApp', ['ui.router'])
  .config(($stateProvider) => {
    const homeState = {
      url: '/home',
      name: 'home',
      template: 'this',
      controller: 'MainController',

    };
    $stateProvider.state(homeState);
  });
