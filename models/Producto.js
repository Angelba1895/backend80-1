const mongoose = require('mongoose');

//El modelo que vamos a implementar debe ser el mismo  a la base de datos

const productoSchema = mongoose.Schema({
    

nombre:{
    type: String,
    required: true
},

marca:{
    type: String,
    required: true
},
    
tipo:{
    type: String,
    required: true
},
  
cantidad:{
    type: String,
    required: true
},
    
numeroInvima:{
    type: Number,
    required: true
},
    
paisOrigen:{
    type: String,
    required: true
}

},{versionkey: false});

module.exports = mongoose.model('Producto', productoSchema);