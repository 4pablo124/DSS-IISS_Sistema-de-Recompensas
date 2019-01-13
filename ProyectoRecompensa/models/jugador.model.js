const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jugador = new Schema({
        nombre: String,
        apellidos: String,
        nickname: String,
        email: String,
        fechaNacimiento: Date
}, {
        collection: 'jugadores'
    }
);

module.exports = mongoose.model('jugador', jugador);