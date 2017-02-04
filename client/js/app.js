angular.module('myApp', ['ngRoute'])
  .config(($routerProvider) => {
    $routerProvider.when('/', {
      controller: 'MainController',
      template: 'template connect',
    });
  });
