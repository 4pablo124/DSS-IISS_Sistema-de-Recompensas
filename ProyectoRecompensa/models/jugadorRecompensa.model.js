const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jugadorRecompensa = new Schema({
        jugador: String,
        recompensa: String
}, {
        collection: 'jugadorRecompensas'
    }
);

module.exports = mongoose.model('jugadorRecompensa', jugadorRecompensa);