const express = require('express');
const app = express();
const videojuegoRoutes = express.Router();

const Videojuego = require('../models/videojuego.model');

videojuegoRoutes.route('/add').post(function (req, res){
    // Create a Videojuego
    let videojuego = new Videojuego(req.body);
 
    // Guarda videojuego en MongoDB
    videojuego.save()
        .then(data => {
            res.status(200).json(data);
        })
        
        .catch(err => {
            res.status(500).json({msg: err.message});
        });
});


videojuegoRoutes.route('/findAll').get(function (req, res) {
    Videojuego.find()
    .then(videojuegos => {
        res.status(200).json(videojuegos);
    })
    
    .catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
});

videojuegoRoutes.route('/find/:videojuegoId').get(function (req, res) {
    Videojuego.findById(req.params.videojuegoId)
    .then(videojuego => {
        if(!videojuego) {
            return res.status(404).json({
                msg: "Videojuego no encontrado con id " + req.params.videojuegoId
            });            
        }
        res.json(videojuego);
    })
    
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Videojuego no encontrado con id " + req.params.videojuegoId
            });                
        }
        return res.status(500).json({
            msg: "Error obteniendo Videojuego con id " + req.params.videojuegoId
        });
    });
});

videojuegoRoutes.route('/update/:videojuegoId').put(function (req, res) {
    // Encuentra videojuego y lo actualiza
    Videojuego.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(videojuego => {
        if(!videojuego) {
            return res.status(404).json({
                msg: "Videojuego no encontrado con id " + req.params.videojuegoId
            });
        }
        res.json(videojuego);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Videojuego no encontrado con id " + req.params.videojuegoId
            });                
        }
        return res.status(500).json({
            msg: "Error actualizando Videojuego con id " + req.params.videojuegoId
        });
    });
});

videojuegoRoutes.route('/delete/:videojuegoId').delete(function (req, res) {
    Videojuego.findByIdAndRemove(req.params.videojuegoId)
    .then(videojuego => {
        if(!videojuego) {
            return res.status(404).json({
                msg: "Videojuego no encontrado con id " + req.params.videojuegoId
            });
        }
        res.json({msg: "Videojuego borrado correctamente!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "Videojuego no encontrado con id " + req.params.videojuegoId
            });                
        }
        return res.status(500).json({
            msg: "Could not delete Videojuego con id " + req.params.videojuegoId
        });
    });
})

module.exports = videojuegoRoutes;