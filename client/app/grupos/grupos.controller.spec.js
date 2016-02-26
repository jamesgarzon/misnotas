'use strict';

describe('Controller: GruposCtrl', function () {

  // load the controller's module
  beforeEach(module('notasApp'));

  var GruposCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GruposCtrl = $controller('GruposCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
