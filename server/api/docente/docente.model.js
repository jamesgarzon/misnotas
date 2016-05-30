'use strict';

import mongoose from 'mongoose';

var DocenteSchema = new mongoose.Schema({
  user_id:String;
  asignaturas:[{
  	nombre: String,
  	grupo:String
  }]
});

export default mongoose.model('Docente', DocenteSchema);
