'use strict';

describe('Controller: NotasCtrl', function () {

  // load the controller's module
  beforeEach(module('notasApp'));

  var NotasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotasCtrl = $controller('NotasCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
