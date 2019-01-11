const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dlc = new Schema({
        titulo: {
            type: String
        },

        descripcion: {
            type: String
        },
        
        videojuego: {
            type: String
        }
        
    }, {
            collection: 'dlcs'
    }
);

module.exports = mongoose.model('dlc', dlc);