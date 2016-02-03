'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var DesempenosSchema = new mongoose.Schema({
  id: String,
  nombre: String,
  descripcion: String,
  materia: String,
  autor: [{
    nombre: String,
    rol: String,
    identificacion: String
  }],
  fechaCreacion: String,
  ultimaModificacion: String
});

export default mongoose.model('Desempenos', DesempenosSchema);
