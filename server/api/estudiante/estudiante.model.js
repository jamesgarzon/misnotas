'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;
var crypto = require('crypto');

var EstudianteSchema = new Schema({

  
  user_id: String,
 //Cambiar cuando creemos la entidad
 periodos : [
 {
      codigo : String, // 2016-1
      grupo : String,
      asignaturas : [
      {
        nombre : String,
              docente : String, // Cambiar cuando creemos la entidad
              asistencias : [Date],
              area:{
                nombre : String,
                nota : Number,
                notaEscolar : String,
                notaNacional : String
              },
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



        });

export default mongoose.model('Estudiante', EstudianteSchema);

// {
//   "tipoDocumento" : "CC",
//   "documento" : "1040040896",
//   "nombres" : "JAMES DANILO",
//   "apellidos" : "GARZÓN OTALVARO",
//   "direccion" : "CALLE 16 #56678",
//   "telefonos" : [ { "tipo" :"HOGAR", "titular" : "CENELLY", "numero" : "3457765345" } ],
//   "email" : "jamesgarzon@gmail.com,
//   "acudiente" : "CENELLY",
//   "periodos" : [
//     {
//       "codigo" : "2016-1", // 2016-1
//       "grupo" : "9B",
//       "areas" : [
//         {
//           "nombre" : "HUMANIDADES-9",
//           "nota" : 5,
//           "notaEscolar" : "E",
//           "notaNacional" : "S",
//           "asignaturas" : [
//             {
//               "nombre" : "ESPAÑOL",
//               "docente" : "9201930564",
//               "asistencias" : ["2015-01-09","2015-01-10"],
//               "actividades" : [
//                 {
//                 "titulo" : "ENSAYO EL PRINCIPITO",
//                 "descripcion" : "Obviamente es un ensayo sobre el libro de el principito",
//                 "fechaCreacion" : "2016-02-20",
//                 "nota" : 5,
//                 "notaEscolar" : "E",
//                 "notaNacional" : "S",
//                 "desempeno" : {
//                   "nombre" : "SER",
//                   "descripcion" : "Soy tu padre",
//                   "tipo" : ["SER"]
//                 }
//               }
//               ]
//             }
//           ]
//         }
//       ]
//       }
//     ]
// }

// var mongoose = require('mongoose'); var ObjectId = mongoose.Schema.Types.ObjectId; var Car = new Schema({ driver: ObjectId }); // or just Schema.ObjectId for backwards compatibility with v2
