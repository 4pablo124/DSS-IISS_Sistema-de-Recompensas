const express = require('express');
const app = express();
const recompensaRoutes = express.Router();

let recompensaModel = require('..models/recompensa');

recompensaRoutes.route('/add').post(function(req, res) {
    let recompensa = new recompensaModel(req.body);
    recompensa.save()
        .then(game => {
            res.status(200).json({'recompensa': 'recompensa se ha añadido correctamente'});
        })

        .catch(err => {
            res.status(400).send("Imposible guardar en la base de datos");
        })
});

module.exports = recompensaRoutes;