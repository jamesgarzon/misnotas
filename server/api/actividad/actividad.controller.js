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
  var respuesta = {};

  var periodo = req.query.periodo;
  var asignatura = req.query.asignatura;
  var grupo = req.query.grupo;

  Actividad.find({periodo:periodo, asignatura:asignatura, grupo:grupo}).
  then(function(actividades){
    Estudiante.find({"periodos.codigo":periodo,"periodos.grupo":grupo, "periodos.areas.asignaturas.nombre":asignatura, }, {"periodos.areas.asignaturas.actividades":1, nombres:1, apellidos:1, documento:1,periodos: { $elemMatch: { codigo: periodo } } })
    .then(function (estudiantes) {
      var actividadesResp= [];
      for (let i = 0; i < actividades.length; i++) {
        var actividad = {};
        actividad.titulo = actividades[i].titulo;
        actividad.notas=[];
        actividad.notas.estudiante = '';
        actividad.notas.calificacion = '';
        console.log("estudiantes length:"+ estudiantes.length);
        for (let j = 0; j < estudiantes.length; j++) {
          var actividadesEstudiante = estudiantes[i].periodos[0].areas[0].asignaturas[0].actividades;
          var notaEncontrada = false;
          for (let k = 0; k < actividadesEstudiante.length; k++) {
            if (actividad.titulo==actividadesEstudiante[k].titulo) {
              // actividad.notas.estudiante = estudiante[j].nombres + estudiantes[j].apellidos;
              // actividad.notas.estudiante = actividadesEstudiante[k].nota);
              // actividad.notas.push(actividadesEstudiante[k].nota);
              actividad.notas.push({estudiante:estudiantes[j].documento, calificacion:actividadesEstudiante[k].nota})
              notaEncontrada = true;
            }
          }
          if (!notaEncontrada) {
            actividad.notas.push('-');
          }
        }
        actividadesResp.push(actividad);
      }
      respuesta.estudiantes = estudiantes;
      respuesta.actividades = actividadesResp;

      res.send(respuesta);
    })
  })
  .catch(handleError(res));
}

export function crearActividadPorAsignatura(req, res) {


  var periodo = req.body.periodo;
  var asignatura = req.body.asignatura;
  var grupo = req.body.grupo;

  Actividad.createAsync(req.body)
    .then(function(actividad){
      console.log('actividad creada');
      // Estudiante.update({"periodos.codigo":periodo,"periodos.grupo":grupo, "periodos.areas.asignaturas.nombre":asignatura},{$push:{"periodos.areas.asignaturas.$.actividades":actividad} }).exec()
        Estudiante.find(
          {
            "periodos.codigo":periodo,
            "periodos.grupo":grupo,
            "periodos.areas.asignaturas.nombre":asignatura
          },
          {
            "periodos.areas.asignaturas":{ $slice: 1 } ,
             periodos: { $elemMatch: { codigo: periodo, grupo:grupo } },
             "periodos.areas": { $elemMatch: { "asignaturas": {"$elemMatch":{nombre:asignatura}}} },

            //  db.collectionName.find({"magazine.articles":{"$elemMatch":{"articleLayouts":{"$elemMatch":{"pageLayouts":{"$in":["2d641b7c-3d74-4cfa-8267-d5a01ed2614b"]}}}}}}).pretty()

          })
      .then(function (estudiantes) {
        // console.log("respondió el servicio");
        // for (let i = 0; i < estudiantes.length; i++) {
        //   var estudiante = estudiantes[i];
        //   for (let j = 0; j < estudiante.length; j++) {
        //     var areas = estudiante.areas;
        //     for (let i = 0; i < areas.length; i++) {
        //       if (areas[i].nombre==area) {
        //
        //       }
        //       var asignatura = areas[]
        //     }
        //   }
        // }

        res.json(estudiantes);
      });
      // .then(function(estudiantes){
        // for (let i = 0; i < estudiantes.length; i++) {
          // ************
          // Estudiante.update({"_id":req.params.id,"periodos.codigo":req.params.periodo},{$push:{"periodos.areas.asignatura.$.actividades":actividad}}).exec()
          //   .then(handleEntityNotFound(res))
          //   .then(saveUpdates(req.body))
          //   .then(responseWithResult(res))
          //   .catch(handleError(res));

          // res.json({
          //   success:true,
          //   message:'Actividad creada con exito'
          // })
          // ******************
        // }

      // })
    })
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
  //



}
