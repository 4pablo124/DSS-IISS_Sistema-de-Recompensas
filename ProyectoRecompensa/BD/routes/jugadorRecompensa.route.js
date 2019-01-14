const express = require('express');
const app = express();
const jugadorRecompensaRoutes = express.Router();

const JugadorRecompensa = require('../models/jugadorRecompensa.model');

jugadorRecompensaRoutes.route('/add').post(function (req, res){
    // Create a JugadorRecompensa
    let jugadorRecompensa = new JugadorRecompensa(req.body);
 
    // Guarda JugadorRecompensa en MongoDB
    jugadorRecompensa.save()
        .then(data => {
            res.status(200).json(data);
        })
        
        .catch(err => {
            res.status(500).json({msg: err.message});
        });
});

module.exports = jugadorRecompensaRoutes;