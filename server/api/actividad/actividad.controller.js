/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/actividades              ->  index
 * POST    /api/actividades              ->  create
 * GET     /api/actividades/:id          ->  show
 * PUT     /api/actividades/:id          ->  update
 * DELETE  /api/actividades/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Actividad from './actividad.model';
import Estudiante from '.././estudiante/estudiante.model';

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

// Gets a list of Actividads
export function index(req, res) {
  Actividad.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Actividad from the DB
export function show(req, res) {
  Actividad.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Actividad in the DB
export function create(req, res) {
  Actividad.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Actividad in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Actividad.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Actividad from the DB
export function destroy(req, res) {
  Actividad.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Obtiene una lista de actividades por asignatura, grupo, y periodo
export function actividadesPorAsignatura(req, res) {
  // Actividad.findAsync()
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));
  Actividad.find({periodo:'2015-1', asignatura:'MATEMATICAS', grupo:'9A'}).
  then(function(actividades){
    // res.send(resultados);
    Estudiante.find().
    then(function (estudiantes) {
      var respuesta =  [{actividades:actividades},{estudiantes:estudiantes}];
      // var actividadades = [];
      // var estudiantes = [];
      // respuesta.push(actividadades);
      // respuesta.push(estudiantes);
      // respuesta.push(actividades);
      // respuesta.push(estudiantes);
      res.send(respuesta);
    })


  })
  .catch(handleError(res));

}
