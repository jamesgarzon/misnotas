'use strict';

describe('Controller: EstudiantesCtrl', function () {

  // load the controller's module
  beforeEach(module('notasApp'));

  var EstudiantesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EstudiantesCtrl = $controller('EstudiantesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
