<<<<<<< HEAD
require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
=======
require('./config/config')

const express = require('express');
>>>>>>> e2ba04df9c91ad770ad6419789d09e57e0ac362f
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
<<<<<<< HEAD
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//configuración index
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Base de datos ONLINE');
    }
});
mongoose.set('useCreateIndex', true);

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
=======
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('getUsuario');
});

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('deleteUsuario');
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando 3000");
>>>>>>> e2ba04df9c91ad770ad6419789d09e57e0ac362f
});