'use strict';

var express = require('express');
var controller = require('./estudiante.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/id/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/actividades', controller.actividadesPorEstudiante);
router.get('/obtenerEstudiantesPeriodo/:codigo', controller.obtenerEstudiantesPeriodo);
router.get('/obtenerEstudiantesGrupo/:codigo', controller.obtenerEstudiantesGrupo);
router.get('/ob/obtenerEstudiantesGrupoPeriodo/:nombre/:codigo', controller.obtenerEstudiantesGrupoPeriodo);
router.get('/actualizarPeriodoEstudiantes/:periodo', controller.actualizarPeriodoEstudiantes);
router.get('/asignarGrupoEstudiante/:id/:periodo', controller.asignarGrupoEstudiante);
module.exports = router;
///:periodo
/*/:grupo*/