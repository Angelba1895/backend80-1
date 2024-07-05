const express = require('express');
const ConectarBD = require('../config/db');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

//Enlazar conexion con la base de datos
ConectarBD();
app.use(cors());

app.use(express.json());
//Rutas de mi aplicación
app.use('/api/clientes',require('../routes/cliente'));
app.use('/api/productos',require('../routes/producto'));
app.use('/api/auth', require('../routes/auth'));
app.use('/api/usuarios', require('../routes/usuarios'));


app.get('/', (req, res) =>{
    res.send('Bienvenido, estamos desde el navegador');
})

app.listen(port, () => console.log('Esta conectado al servidor por el puerto: ' + port));