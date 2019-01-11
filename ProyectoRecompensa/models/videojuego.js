const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let videojuego = new Schema({
        titulo: {
            type: String
        },

        descripcion: {
            type: String
        },

        genero: {
            type: String
        },

        dispositivo: {
            type: String
        }

    }, {
            collection: 'videojuegos'
    }
);

module.exports = mongoose.model('videojuego', videojuego);