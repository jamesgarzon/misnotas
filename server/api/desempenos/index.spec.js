'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var desempenosCtrlStub = {
  index: 'desempenosCtrl.index',
  show: 'desempenosCtrl.show',
  create: 'desempenosCtrl.create',
  update: 'desempenosCtrl.update',
  destroy: 'desempenosCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var desempenosIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './desempenos.controller': desempenosCtrlStub
});

describe('Desempenos API Router:', function() {

  it('should return an express router instance', function() {
    desempenosIndex.should.equal(routerStub);
  });

  describe('GET /api/desempenoss', function() {

    it('should route to desempenos.controller.index', function() {
      routerStub.get
        .withArgs('/', 'desempenosCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/desempenoss/:id', function() {

    it('should route to desempenos.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'desempenosCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/desempenoss', function() {

    it('should route to desempenos.controller.create', function() {
      routerStub.post
        .withArgs('/', 'desempenosCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/desempenoss/:id', function() {

    it('should route to desempenos.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'desempenosCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/desempenoss/:id', function() {

    it('should route to desempenos.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'desempenosCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/desempenoss/:id', function() {

    it('should route to desempenos.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'desempenosCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
