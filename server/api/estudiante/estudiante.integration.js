'use strict';

var app = require('../..');
import request from 'supertest';

var newEstudiante;

describe('Estudiante API:', function() {

  describe('GET /api/estudiantes', function() {
    var estudiantes;

    beforeEach(function(done) {
      request(app)
        .get('/api/estudiantes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          estudiantes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      estudiantes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/estudiantes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/estudiantes')
        .send({
          identificacion: 'nuevo estudiante'
          // nombre: 'This is the brand new estudiante!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newEstudiante = res.body;
          done();
        });
    });

    it('should respond with the newly created estudiante', function() {
      newEstudiante.identificacion.should.equal('nuevo estudiante');
      // newEstudiante.info.should.equal('This is the brand new estudiante!!!');
    });

  });

  describe('GET /api/estudiantes/:id', function() {
    var estudiante;

    beforeEach(function(done) {
      request(app)
        .get('/api/estudiantes/' + newEstudiante._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          estudiante = res.body;
          done();
        });
    });

    afterEach(function() {
      estudiante = {};
    });

    it('should respond with the requested estudiante', function() {
      estudiante.identificacion.should.equal('nuevo estudiante');
      // estudiante.info.should.equal('This is the brand nuevo estudiante!!!');
    });

  });

  describe('PUT /api/estudiantes/:id', function() {
    var updatedEstudiante;

    beforeEach(function(done) {
      request(app)
        .put('/api/estudiantes/' + newEstudiante._id)
        .send({
          identificacion: 'Estudiante actualizado',
          // info: 'This is the updated estudiante!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedEstudiante = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEstudiante = {};
    });

    it('should respond with the updated estudiante', function() {
      updatedEstudiante.identificacion.should.equal('Estudiante actualizado');
      // updatedEstudiante.info.should.equal('This is the updated estudiante!!!');
    });

  });

  describe('DELETE /api/estudiantes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/estudiantes/' + newEstudiante._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when estudiante does not exist', function(done) {
      request(app)
        .delete('/api/estudiantes/' + newEstudiante._id)
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
