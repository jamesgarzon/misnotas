'use strict';

describe('Service: inicio', function () {

  // load the service's module
  beforeEach(module('notasApp'));

  // instantiate service
  var inicio;
  beforeEach(inject(function (_inicio_) {
    inicio = _inicio_;
  }));

  it('should do something', function () {
    expect(!!inicio).toBe(true);
  });

});
