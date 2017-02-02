angular.module('myApp').controller('MainController', MainController);
MainController.$inject = ['$scope'];
function MainController($scope) {
  $scope.print = 'PRINTED!';
};
