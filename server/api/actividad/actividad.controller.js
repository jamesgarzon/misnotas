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


  // Estudiantes.find({"periodos.codigo":"2016-1", "periodos.areas.asignaturas.nombre":"ESPAÑOL"}, {"periodos.areas.asignaturas.actividades":1})




  var periodo = '2016-1';
  var asignatura = 'ESPAÑOL';
  var grupo = '9B';
  Actividad.find({periodo:periodo, asignatura:asignatura, grupo:grupo}).
  then(function(actividades){
    // res.send(resultados);
    Estudiante.find({"periodos.codigo":periodo,"periodos.grupo":grupo, "periodos.areas.asignaturas.nombre":asignatura, }, {"periodos.areas.asignaturas.actividades":1}).
    then(function (estudiantes) {
      var respuesta = {};
      var actividadesResp= [];
      for (let i = 0; i < actividades.length; i++) {
        var actividad = {};
        actividad.titulo = actividades[i].titulo;
        actividad.notas=[];
        for (let j = 0; j < estudiantes.length; j++) {
          var actividadesEstudiante = estudiantes[i].periodos[0].areas[0].asignaturas[0].actividades;
          for (let k = 0; k < actividadesEstudiante.length; k++) {
            if (actividad.titulo==actividadesEstudiante[k].titulo) {
              actividad.notas.push(actividadesEstudiante[k].nota);
            }
          }
        }
        actividadesResp.push(actividad);
      }
      // respuesta.actividades= actividades;
      // respuesta.estudiantes= estudiantes;
      res.send(actividadesResp);
    })


  })
  .catch(handleError(res));

}
