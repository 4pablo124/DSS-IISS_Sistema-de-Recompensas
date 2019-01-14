const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jugadorVideojuego = new Schema({
        jugador: String,
        videojuego: String
}, {
        collection: 'jugadorVideojuegos'
    }
);

module.exports = mongoose.model('jugadorVideojuego', jugadorVideojuego);