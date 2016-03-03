'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var DesempenosSchema = new mongoose.Schema({
    id : String,
    nombre : String,
    descripcion : String,
    tipo : [String]

});

export default mongoose.model('Desempenos', DesempenosSchema);
