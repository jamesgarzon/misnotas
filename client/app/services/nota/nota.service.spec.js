'use strict';

describe('Service: nota', function () {

  // load the service's module
  beforeEach(module('notasApp'));

  // instantiate service
  var nota;
  beforeEach(inject(function (_nota_) {
    nota = _nota_;
  }));

  it('should do something', function () {
    expect(!!nota).toBe(true);
  });

});
