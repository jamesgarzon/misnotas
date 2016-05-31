'use strict';

import mongoose from 'mongoose';

var DocenteSchema = new mongoose.Schema({
  user_id:String;
  asignaturas:[{
  /* Codigo de periodo para saber en que periodos dio que materias*/codigo:String,
  	nombre: String,
  	grupo:String,
  	actividades:[{
  		id_actividad:String
  	}]
  }]
});

export default mongoose.model('Docente', DocenteSchema);
