'use strict';

describe('Controller: ActividadesCtrl', function () {

  // load the controller's module
  beforeEach(module('notasApp'));

  var ActividadesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActividadesCtrl = $controller('ActividadesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
