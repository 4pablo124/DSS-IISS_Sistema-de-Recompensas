const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jugador = new Schema({
        nombre: {
            type: String
        },

        apellidos: {
            type: String
        },

        nickname: {
            type: String
        },

        email: {
            type: String
        },

        fechaNacimiento: {
            type: Date
        }
    }, {
            collection: 'jugadores'
    }
);

module.exports = mongoose.model('jugador', jugador);