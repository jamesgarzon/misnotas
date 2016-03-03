'use strict';

describe('Service: desempenosService', function () {

  // load the service's module
  beforeEach(module('notasApp'));

  // instantiate service
  var desempenosService;
  beforeEach(inject(function (_desempenosService_) {
    desempenosService = _desempenosService_;
  }));

  it('should do something', function () {
    expect(!!desempenosService).toBe(true);
  });

});
