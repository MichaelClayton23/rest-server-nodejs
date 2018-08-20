require('./config/config.js')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    //res.send('Hello World')
    res.json('get Usuarios')
})

app.post('/usuario', function(req, res) {
    let body = req.body;
    //res.send('Hello World')
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            descripcion: 'Wrong field doesnt exist nombre'
        });
    }
    res.json({ body })
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    //res.send('Hello World')
    res.json({ id })
})

app.delete('/usuario', function(req, res) {
    //res.send('Hello World')
    res.json('delete Usuarios')
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando en puerto 3000");
})