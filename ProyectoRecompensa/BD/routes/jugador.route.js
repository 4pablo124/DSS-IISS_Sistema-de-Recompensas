const express = require('express');
const app = express();
const jugadorRoutes = express.Router();

const Jugador = require('../models/jugador.model');

jugadorRoutes.route('/add').post(function (req, res){
    // Create a Jugador
    let jugador = new Jugador(req.body);
 
    // Guarda Jugador en MongoDB
    jugador.save()
        .then(data => {
            res.status(200).json(data);
        })
        
        .catch(err => {
            res.status(500).json({msg: err.message});
        });
});

jugadorRoutes.route('/findAll').get(function (req, res) {
    Jugador.find()
    .then(jugador => {
        res.status(200).json(jugador);
    })
    
    .catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
});

jugadorRoutes.route('/find/:jugadorId').get(function (req, res) {
    Jugador.findById(req.params.jugadorId)
    .then(jugador => {
        if(!jugador) {
            return res.status(404).json({
                msg: "Jugador no encontrado con id " + req.params.jugadorId
            });            
        }
        res.json(jugador);
    })
    
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Jugador no encontrado con id " + req.params.jugadorId
            });                
        }
        return res.status(500).json({
            msg: "Error obteniendo Jugador con id " + req.params.jugadorId
        });
    });
});

module.exports = jugadorRoutes;