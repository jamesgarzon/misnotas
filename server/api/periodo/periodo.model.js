'use strict';

import mongoose from 'mongoose';

var PeriodoSchema = new mongoose.Schema({
  codigo : String, // 2016-1
  esUltimo : {type: Boolean, default: true },
      grupos : [ {// en este modelos tenemos varios grupos por que como un periodop puede tener varios grupos no es lo mismo que un estudiante.
      	nombre: String,
      	areas : [
      	{
      		nombre : String,
      		asignaturas : [
      		{
      			nombre : String,
	              docente : String, // Cambiar cuando creemos la entidad

	          }
	          ]
	      }
	      ]
	  }
	  ]
	});

export default mongoose.model('Periodo', PeriodoSchema);
