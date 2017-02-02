// Test all modules: currently 1 module: myApp
describe('MODULE TEST', () => {
  let module;

  beforeEach(() => {
    module = angular.module('myApp');
  });

  it('myApp should be registered', () => {
    expect(module).toBeDefined();
  });
});

// Test All Controllers. Currently 1: MainController
describe('CONTROLLERS TEST', () => {
  it('MainController', (done) => {
    done();
  });
});
