const express = require('express');
const app = express();
const videojuegoRoutes = express.Router();

let videojuegoModel = require('../models/videojuego');

videojuegoRoutes.route('/add').post(function(req, res) {
    let videojuego = new videojuegoModel(req.body);
    videojuego.save()
        .then(game => {
            res.status(200).json({'videojuego': 'videojuego se ha añadido correctamente'});
        })

        .catch(err => {
            res.status(400).send("Imposible guardar en la base de datos");
        })
});

module.exports = videojuegoRoutes;