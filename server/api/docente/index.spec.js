'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var docenteCtrlStub = {
  index: 'docenteCtrl.index',
  show: 'docenteCtrl.show',
  create: 'docenteCtrl.create',
  update: 'docenteCtrl.update',
  destroy: 'docenteCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var docenteIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './docente.controller': docenteCtrlStub
});

describe('Docente API Router:', function() {

  it('should return an express router instance', function() {
    docenteIndex.should.equal(routerStub);
  });

  describe('GET /api/docentes', function() {

    it('should route to docente.controller.index', function() {
      routerStub.get
        .withArgs('/', 'docenteCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/docentes/:id', function() {

    it('should route to docente.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'docenteCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/docentes', function() {

    it('should route to docente.controller.create', function() {
      routerStub.post
        .withArgs('/', 'docenteCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/docentes/:id', function() {

    it('should route to docente.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'docenteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/docentes/:id', function() {

    it('should route to docente.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'docenteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/docentes/:id', function() {

    it('should route to docente.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'docenteCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
