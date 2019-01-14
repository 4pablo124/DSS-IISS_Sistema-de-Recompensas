const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let videojuego = new Schema({
        titulo: String,
        descripcion: String,
        genero: String,
        dispositivo: String
}, {
        collection: 'videojuegos'
    }
);

module.exports = mongoose.model('videojuego', videojuego);