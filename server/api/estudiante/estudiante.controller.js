/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/estudiantes              ->  index
 * POST    /api/estudiantes              ->  create
 * GET     /api/estudiantes/:id          ->  show
 * PUT     /api/estudiantes/:id          ->  update
 * DELETE  /api/estudiantes/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Estudiante = require('./estudiante.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Estudiantes
export function index(req, res) {
  Estudiante.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Estudiante from the DB
export function show(req, res) {
  Estudiante.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Estudiante in the DB
export function create(req, res) {
  Estudiante.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Estudiante in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Estudiante.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Estudiante from the DB
export function destroy(req, res) {
  Estudiante.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Gets a list of Estudiantes
export function actividadesPorEstudiante(req, res) {
  Estudiante.findAsync()
    .then(function (estudiantes) {
      var respuesta = [];
      for (var i = 0; i < estudiantes.length; i++) {
        respuesta.push([estudiantes[i].apellidos,5,4,'-']);
      }
      res.json(respuesta);
    })
    .catch(handleError(res));
}
