'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ActividadSchema = new mongoose.Schema({
  nombre: String,
  periodo: String,
  desempeno: String,
  asignatura: String,
  grupo: String,
  tipo: String,
  fecha_creacion: { type: Date, default: Date.now },
  fecha_entrega: Date,
  docente: String,
  estudiante: String
});

export default mongoose.model('Actividad', ActividadSchema);
