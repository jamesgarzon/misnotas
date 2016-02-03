'use strict';

var app = require('../..');
import request from 'supertest';

var newDesempenos;

describe('Desempenos API:', function() {

  describe('GET /api/desempenoss', function() {
    var desempenoss;

    beforeEach(function(done) {
      request(app)
        .get('/api/desempenoss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          desempenoss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      desempenoss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/desempenoss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/desempenoss')
        .send({
          name: 'New Desempenos',
          info: 'This is the brand new desempenos!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newDesempenos = res.body;
          done();
        });
    });

    it('should respond with the newly created desempenos', function() {
      newDesempenos.name.should.equal('New Desempenos');
      newDesempenos.info.should.equal('This is the brand new desempenos!!!');
    });

  });

  describe('GET /api/desempenoss/:id', function() {
    var desempenos;

    beforeEach(function(done) {
      request(app)
        .get('/api/desempenoss/' + newDesempenos._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          desempenos = res.body;
          done();
        });
    });

    afterEach(function() {
      desempenos = {};
    });

    it('should respond with the requested desempenos', function() {
      desempenos.name.should.equal('New Desempenos');
      desempenos.info.should.equal('This is the brand new desempenos!!!');
    });

  });

  describe('PUT /api/desempenoss/:id', function() {
    var updatedDesempenos;

    beforeEach(function(done) {
      request(app)
        .put('/api/desempenoss/' + newDesempenos._id)
        .send({
          name: 'Updated Desempenos',
          info: 'This is the updated desempenos!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedDesempenos = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDesempenos = {};
    });

    it('should respond with the updated desempenos', function() {
      updatedDesempenos.name.should.equal('Updated Desempenos');
      updatedDesempenos.info.should.equal('This is the updated desempenos!!!');
    });

  });

  describe('DELETE /api/desempenoss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/desempenoss/' + newDesempenos._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when desempenos does not exist', function(done) {
      request(app)
        .delete('/api/desempenoss/' + newDesempenos._id)
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
