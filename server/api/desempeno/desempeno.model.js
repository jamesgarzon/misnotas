'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var DesempenoSchema = new mongoose.Schema({
  nombre : String,
  descripcion : String,
  tipo : String,
  periodo:String
});

export default mongoose.model('Desempeno', DesempenoSchema);
