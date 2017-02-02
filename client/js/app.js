angular.module('myApp', ['ui.router'])
  .config(($stateProvider) => {
    const homeState = {
      url: '/home',
      name: 'home',
      template: '/views/home.html',
      controller: 'MainController',

    };
    $stateProvider.state(homeState);
  });
