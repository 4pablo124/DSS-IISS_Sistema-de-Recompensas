const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let recompensa = new Schema({
        titulo: {
            type: String
        },

        descripcion: {
            type: String
        },

        dificultad: {
            type: String
        },

        videojuego: {
            type: String
        }
        
    }, {
            collection: 'recompensas'
    }
);

module.exports = mongoose.model('recompensa', recompensa);