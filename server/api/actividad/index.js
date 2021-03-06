'use strict';

var express = require('express');
var controller = require('./actividad.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/actividadesPorAsignatura', controller.actividadesPorAsignatura);
// router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/crearActividadPorAsignatura', controller.crearActividadPorAsignatura);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
