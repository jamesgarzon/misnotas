/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/periodos              ->  index
 * POST    /api/periodos              ->  create
 * GET     /api/periodos/:id          ->  show
 * PUT     /api/periodos/:id          ->  update
 * DELETE  /api/periodos/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Periodo from './periodo.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
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

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Periodos
export function index(req, res) {
  return Periodo.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Periodo from the DB
export function show(req, res) {
  return Periodo.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Periodo in the DB
export function create(req, res) {
  return Periodo.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Periodo in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Periodo.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Periodo from the DB
export function destroy(req, res) {
  return Periodo.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Gets a single Periodo from the DB
export function obtenerUltimoPeriodo(req, res) {
  return Periodo.find({esUltimo:true}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
//funciona para actualizar masivamente la variable esUltimo
export function actualizarEstados(req, res) {
  return Periodo.update({esUltimo:true},{$set:{esUltimo:false}},{ multi: true}).exec()
    .then(handleEntityNotFound(res))
    // .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
