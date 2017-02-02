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

// Test All Dependencies
describe('DEPENDENCIES TEST', () => {
  it('should test all dependencies', (done) => {
    done();
  });
});

// Test All Controllers. Currently 1: MainController
describe('CONTROLLERS TEST', () => {
  beforeEach(module('myApp'));


  it('MainController', () => {

  });
});
