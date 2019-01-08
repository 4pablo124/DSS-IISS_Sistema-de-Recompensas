const express = require('express');
const app = express();
const jugadorRoutes = express.Router();

let jugadorModel = require('..models/jugador');

jugadorRoutes.route('/add').post(function(req, res) {
    let jugador = new jugadorModel(req.body);
    jugador.save()
        .then(game => {
            res.status(200).json({'jugador': 'jugador se ha añadido correctamente'});
        })

        .catch(err => {
            res.status(400).send("Imposible guardar en la base de datos");
        })
});

module.exports = jugadorRoutes;