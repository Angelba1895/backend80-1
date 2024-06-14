const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//Creamos la ruta del crud

router.post('/', productoController.agregarProducto);    
router.get('/', productoController.mostrarProductos);
router.get('/:id', productoController.buscarProducto);
router.put('/:id', productoController.actualizarProductos);
//router.patch('/:id', productoController.modificarProductos);
router.delete('/:id', productoController.eliminarProductos);

module.exports = router;