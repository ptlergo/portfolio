describe('UNIT: TESTING CONTROLLERS', () => {
  beforeEach(module('myApp'));

  it('should have a main controller', () => {
    expect(myApp.main).toBeDefined();
  });
});
