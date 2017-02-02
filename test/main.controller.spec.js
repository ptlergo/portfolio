describe('UNIT: TESTING CONTROLLERS', () => {
  beforeEach(module('myApp'));

  let $controller;

  beforeEach(inject((_$controller_) => {
    // injector unwraps the '_' from parameter when matching.
    $controller = _$controller_;
  }));

  it('should have a main controller', () => {
    const $scope = {};
    const controller = $controller('MainController', { $scope: $scope });
    expect($scope.print).toEqual('message');
  });
});
