'use strict';

describe('Controller: EstudianteModalCtrl', function () {

  // load the controller's module
  beforeEach(module('notasApp'));

  var EstudianteModalCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EstudianteModalCtrl = $controller('EstudianteModalCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
