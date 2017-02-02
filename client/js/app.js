angular.module('myApp', ['ui.router'])
  .config(($stateProvider) => {
    const homeState = {
      url: '/home',
      name: 'home',
      template: 'home.html',

    };
    $stateProvider.state(homeState);
  });
