'use strict';

describe('Controller: UsuariosCtrl', function () {

  // load the controller's module
  beforeEach(module('notasApp'));

  var AsignaturasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AsignaturasCtrl = $controller('UsuariosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
