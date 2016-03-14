'use strict';

describe('Service: grupos', function () {

  // load the service's module
  beforeEach(module('notasApp'));

  // instantiate service
  var grupos;
  beforeEach(inject(function (_grupos_) {
    grupos = _grupos_;
  }));

  it('should do something', function () {
    expect(!!grupos).toBe(true);
  });

});
