'use strict';

var app = require('../..');
import request from 'supertest';

var newDocente;

describe('Docente API:', function() {

  describe('GET /api/docentes', function() {
    var docentes;

    beforeEach(function(done) {
      request(app)
        .get('/api/docentes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          docentes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      docentes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/docentes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/docentes')
        .send({
          name: 'New Docente',
          info: 'This is the brand new docente!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newDocente = res.body;
          done();
        });
    });

    it('should respond with the newly created docente', function() {
      newDocente.name.should.equal('New Docente');
      newDocente.info.should.equal('This is the brand new docente!!!');
    });

  });

  describe('GET /api/docentes/:id', function() {
    var docente;

    beforeEach(function(done) {
      request(app)
        .get('/api/docentes/' + newDocente._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          docente = res.body;
          done();
        });
    });

    afterEach(function() {
      docente = {};
    });

    it('should respond with the requested docente', function() {
      docente.name.should.equal('New Docente');
      docente.info.should.equal('This is the brand new docente!!!');
    });

  });

  describe('PUT /api/docentes/:id', function() {
    var updatedDocente;

    beforeEach(function(done) {
      request(app)
        .put('/api/docentes/' + newDocente._id)
        .send({
          name: 'Updated Docente',
          info: 'This is the updated docente!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedDocente = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDocente = {};
    });

    it('should respond with the updated docente', function() {
      updatedDocente.name.should.equal('Updated Docente');
      updatedDocente.info.should.equal('This is the updated docente!!!');
    });

  });

  describe('DELETE /api/docentes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/docentes/' + newDocente._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when docente does not exist', function(done) {
      request(app)
        .delete('/api/docentes/' + newDocente._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
