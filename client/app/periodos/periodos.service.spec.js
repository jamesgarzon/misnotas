'use strict';

describe('Service: periodos', function () {

  // load the service's module
  beforeEach(module('notasApp'));

  // instantiate service
  var periodos;
  beforeEach(inject(function (_periodos_) {
    periodos = _periodos_;
  }));

  it('should do something', function () {
    expect(!!periodos).toBe(true);
  });

});
