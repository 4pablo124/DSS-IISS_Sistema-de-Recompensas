const express = require('express');
const app = express();
const dlcRoutes = express.Router();

let dlcModel = require('..models/dlc');

dlcRoutes.route('/add').post(function(req, res) {
    let dlc = new dlcModel(req.body);
    dlc.save()
        .then(game => {
            res.status(200).json({'dlc': 'dlc se ha añadido correctamente'});
        })

        .catch(err => {
            res.status(400).send("Imposible guardar en la base de datos");
        })
});

module.exports = dlcRoutes;