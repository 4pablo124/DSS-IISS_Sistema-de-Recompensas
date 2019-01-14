const   express = require('express');
const   app = express();
const   recompensaRoutes = express.Router();

const Recompensa = require('../models/recompensa.model');

recompensaRoutes.route('/add').post(function (req, res){
    // Create a Recompensa
    let recompensa = new Recompensa(req.body);
 
    // Guarda recompensa en MongoDB
    recompensa.save()
        .then(data => {
            res.status(200).json(data);
        })
        
        .catch(err => {
            res.status(500).json({msg: err.message});
        });
});

recompensaRoutes.route('/findAll').get(function (req, res) {
    Recompensa.find()
    .then(recompensas => {
        res.status(200).json(recompensas);
    })
    
    .catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
});

recompensaRoutes.route('/find/:recompensaId').get(function (req, res) {
    Recompensa.findById(req.params.recompensaId)
    .then(recompensa => {
        if(!recompensa) {
            return res.status(404).json({
                msg: "Recompensa no encontrada con id " + req.params.recompensaId
            });            
        }
        res.json(recompensa);
    })
    
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Recompensa no encontrada con id " + req.params.recompensaId
            });                
        }
        return res.status(500).json({
            msg: "Error obteniendo Recompensa con id " + req.params.recompensaId
        });
    });
});

recompensaRoutes.route('/update/:recompensaId').put(function (req, res) {
    // Encuentra recompensa y la actualiza
    Recompensa.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(recompensa => {
        if(!recompensa) {
            return res.status(404).json({
                msg: "Recompensa no encontrada con id " + req.params.recompensaId
            });
        }
        res.json(recompensa);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Recompensa no encontrada con id " + req.params.recompensaId
            });                
        }
        return res.status(500).json({
            msg: "Error actualizando Recompensa con id " + req.params.recompensaId
        });
    });
});

recompensaRoutes.route('/delete/:recompensaId').delete(function (req, res) {
    Recompensa.findByIdAndRemove(req.params.recompensaId)
    .then(recompensa => {
        if(!recompensa) {
            return res.status(404).json({
                msg: "Recompensa no encontrada con id " + req.params.recompensaId
            });
        }
        res.json({msg: "Recompensa borrada correctamente!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "Recompensa no encontrada con id " + req.params.recompensaId
            });                
        }
        return res.status(500).json({
            msg: "Could not delete Recompensa con id " + req.params.recompensaId
        });
    });
})

module.exports = recompensaRoutes;