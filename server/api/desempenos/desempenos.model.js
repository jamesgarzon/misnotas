'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var DesempenosSchema = new mongoose.Schema({
    nombre : String,
    descripcion : String,
    tipo : String,
    periodo:String
});

export default mongoose.model('Desempenos', DesempenosSchema);
