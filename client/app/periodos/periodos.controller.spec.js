'use strict';

describe('Controller: PeriodosCtrl', function () {

  // load the controller's module
  beforeEach(module('notasApp'));

  var PeriodosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeriodosCtrl = $controller('PeriodosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
