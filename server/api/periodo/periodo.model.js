'use strict';

import mongoose from 'mongoose';

var PeriodoSchema = new mongoose.Schema({
  codigo : String, // 2016-1
      grupo : [ {// en este modelos tenemos varios grupos por que como un periodop puede tener varios grupos no es lo mismo que un estudiante.
      	nombre: String,
		  areas : [
		    {
		      nombre : String,
		      nota : Number,
		      notaEscolar : String,
		      notaNacional : String,
		      asignaturas : [
		        {
		          nombre : String,
		          docente : String, // Cambiar cuando creemos la entidad
		          asistencias : [Date],
		          actividades : [
		            {
		            titulo : String,
		            descripcion : String,
		            fechaCreacion : Date,
		            nota : Number,
		            notaEscolar : String,
		            notaNacional : String,
		            desempeno : {
		              nombre : String,
		              descripcion : String,

		              tipo : [String],
		              periodo:[String]

		            }
		          }
		          ]
		        }
		      ]
		    }
		   ]
		}
      ]
});

export default mongoose.model('Periodo', PeriodoSchema);
