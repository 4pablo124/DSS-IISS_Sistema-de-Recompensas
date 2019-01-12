const   express = require('express'),
        path = require('path'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        mongoose = require('mongoose'),
        config = require('./DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();

const jugadorRoutes = require('./routes/jugador.route');
const videojuegoRoutes = require('./routes/videojuego.route');
const dlcRoutes = require('./routes/dlc.route');
const recompensaRoutes = require('./routes/recompensa.route');

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.use('/jugador', jugadorRoutes);
app.use('/videojuego', videojuegoRoutes);
app.use('/dlc', dlcRoutes);
app.use('/recompensa', recompensaRoutes);

const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});