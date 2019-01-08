const mongoose = require('mongoose');
const Schema = mongoose.Shema;

let videojuego = new Schema({
        titulo: {
            type: String
        },

        descripcion: {
            type: String
        },

        genero: {
            type: Number
        },

        dispositivo: {
            type: Number
        }

    }, {
            collection: 'videojuegos'
    }
);

module.exports = mongoose.model('videojuego', videojuego);