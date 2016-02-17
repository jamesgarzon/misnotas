'use strict';

describe('Controller: AsistenciaCtrl', function () {

  // load the controller's module
  beforeEach(module('notasApp'));

  var AsistenciaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AsistenciaCtrl = $controller('AsistenciaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
