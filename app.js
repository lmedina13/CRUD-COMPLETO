const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mascotas = require('./mascotas');
const puerto = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(puerto, () => {
    console.log('Servicio de mascotas iniciado en el puerto', puerto);
});

// Crear mascota
app.post('/mascotas', async (req, res) => {
    const { nombre, tipo, edad } = req.body;
    const data = await mascotas.create({
        nombre, tipo, edad
    });
    res.send(data);
});

// Obtener todas las mascotas
app.get('/mascotas', async (req, res) => {
    const data = await mascotas.findAll();
    res.send(data);
});

// Actualizar mascota
app.put('/mascotas/:id', async (req, res) => {
    const { nombre, tipo, edad } = req.body;
    const { id } = req.params;
    const data = await mascotas.update({
        nombre, tipo, edad
    }, {
        where: { id }
    });
    res.send(data);
});

// Eliminar mascota
app.delete('/mascotas/:id', async (req, res) => {
    const { id } = req.params;
    const data = await mascotas.destroy({
        where: { id }
    });
    res.send(data);
});
