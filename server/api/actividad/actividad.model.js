'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ActividadSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  periodo: String,
  grupo: String,
  area:String,
  asignatura: String,
  desempeno: {},
  tipo: String,
  fecha_creacion: { type: Date, default: Date.now },
  fecha_entrega: Date,
  docente: String
});

export default mongoose.model('Actividad', ActividadSchema);
