'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EstudianteSchema = new mongoose.Schema({
  identificacion: String,
  nombre: String,
  apellido: String,
  fecha_nacimiento: Date,
  ciudad: String,
  direccion: String,
  telefono: String,
  email: String
});

export default mongoose.model('Estudiante', EstudianteSchema);
