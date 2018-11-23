    require('./config/config');
    const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const bodyParser = require('body-parser');
    // parse application/x-www-form-urlencoded
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
    });