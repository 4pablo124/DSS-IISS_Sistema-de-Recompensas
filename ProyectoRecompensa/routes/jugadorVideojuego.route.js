const express = require('express');
const app = express();
const jugadorVideojuegoRoutes = express.Router();

const JugadorVideojuego = require('../models/jugadorVideojuego.model');

jugadorVideojuegoRoutes.route('/add').post(function (req, res){
    // Create a JugadorVideojuego
    let jugadorVideojuego = new JugadorVideojuego(req.body);
 
    // Guarda JugadorVideojuego en MongoDB
    jugadorVideojuego.save()
        .then(data => {
            res.status(200).json(data);
        })
        
        .catch(err => {
            res.status(500).json({msg: err.message});
        });
});

module.exports = jugadorVideojuegoRoutes;