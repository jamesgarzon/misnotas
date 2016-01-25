'use strict';

describe('Controller: DesempenosCtrl', function () {

  // load the controller's module
  beforeEach(module('notasApp'));

  var DesempenosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DesempenosCtrl = $controller('DesempenosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
