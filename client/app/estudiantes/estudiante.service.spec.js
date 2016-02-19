'use strict';

describe('Service: estudianteService', function () {

  // load the service's module
  beforeEach(module('notasApp'));

  // instantiate service
  var estudianteService;
  beforeEach(inject(function (_estudianteService_) {
    estudianteService = _estudianteService_;
  }));

  it('should do something', function () {
    expect(!!estudianteService).toBe(true);
  });

});
