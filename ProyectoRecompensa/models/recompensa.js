const mongoose = require('mongoose');
const Schema = mongoose.Shema;

let recompensa = new Schema({
        titulo: {
            type: String
        },

        descripcion: {
            type: String
        },

        dificultad: {
            type: Number
        }
        
    }, {
            collection: 'recompensas'
    }
);

module.exports = mongoose.model('recompensa', recompensa);