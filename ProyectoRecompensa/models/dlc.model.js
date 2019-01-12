const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dlc = new Schema({
        titulo: String,
        descripcion: String,
        videojuego: String
        
}, {
        collection: 'dlcs'
    }
);

module.exports = mongoose.model('dlc', dlc);