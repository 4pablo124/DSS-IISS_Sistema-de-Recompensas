const express = require('express');
const app = express();
const dlcRoutes = express.Router();

const DLC = require('../models/dlc.model');

dlcRoutes.route('/add').post(function (req, res){
    // Create a DLC
    let dlc = new DLC(req.body);
 
    // Guarda DLC en MongoDB
    dlc.save()
        .then(data => {
            res.status(200).json(data);
        })
        
        .catch(err => {
            res.status(500).json({msg: err.message});
        });
});

dlcRoutes.route('/findAll').get(function (req, res) {
    DLC.find()
    .then(dlc => {
        res.status(200).json(dlc);
    })
    
    .catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
});

dlcRoutes.route('/find/:dlcId').get(function (req, res) {
    DLC.findById(req.params.dlcId)
    .then(dlc => {
        if(!dlc) {
            return res.status(404).json({
                msg: "DLC no encontrado con id " + req.params.dlcId
            });            
        }
        res.json(dlc);
    })
    
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "DLC no encontrado con id " + req.params.dlcId
            });                
        }
        return res.status(500).json({
            msg: "Error obteniendo DLC con id " + req.params.dlcId
        });
    });
});

module.exports = dlcRoutes;