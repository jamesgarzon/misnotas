'use strict';

var express = require('express');
var controller = require('./periodo.controller');

var router = express.Router();

router.get('/', controller.index);
 router.get('/id/:id', controller.show);
router.post('/', controller.create);
router.put('/id/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/ultimoPeriodo', controller.obtenerUltimoPeriodo);
router.put('/actualizarEstados', controller.actualizarEstados); //actualzia masivamente esUltimo variable

module.exports = router;
