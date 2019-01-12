const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let recompensa =  new Schema({
    titulo: String,
    descripcion: String,
    dificultad: String,
    Videojuego: String
}, {
    collection: 'recompensas'
   }
);

module.exports = mongoose.model('recompensa', recompensa);