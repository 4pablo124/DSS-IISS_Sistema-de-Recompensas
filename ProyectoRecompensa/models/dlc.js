const mongoose = require('mongoose');
const Schema = mongoose.Shema;

let dlc = new Schema({
        titulo: {
            type: String
        },

        descripcion: {
            type: String
        }
        
    }, {
            collection: 'jugadores'
    }
);

module.exports = mongoose.model('jugador', jugador);