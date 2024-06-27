const Producto = require('../models/Producto');


exports.agregarProducto = async(req, res) => {

    try {
        
    let productos
    productos = new Producto(req.body);
    await productos.save();
    res.send(productos);    

    } catch (error) {
       console.log(error);
       res.status(500).send('Hubo un error al agregar un producto'); 
    }

}

//Crear una funcion que nos va a mostrar todos los productos
exports.mostrarProductos = async(req, res) => {

    try {

        const productos = await Producto.find();
        res.json(productos);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los clientes');        
    }
}

//Funcion para mostrar un producto
exports.buscarProducto = async(req, res) => {

    try {

        const producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'No se encuentra el producto'});
        }else{
            res.json(producto);
        }
        

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al consultar el producto');        
    }
}

//Funcion para actualizar un producto
exports.actualizarProductos = async(req, res) => {
    try {
        const producto = await Producto.findOneAndUpdate(
            {_id: req.params.id},req.body);
        
        if(!producto) res.status(404).send("Producto no encontrado");
        else
        res.json(producto);    
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el producto');
    }
};

//Funcion para modificar un producto
exports.modificarProductos = async(req, res) => {
    
    try{
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true});
    if(!producto){
        return res.status(404).send('Producto no encontrado');
    }
    res.json(producto)
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el producto') ;
    }
}


//Funcion para eliminar un producto
exports.eliminarProductos = async(req, res) =>{
    try {
        let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send('Producto no encontrado');
        }else{
            await Producto.findOneAndDelete({_id: req.params.id});
            res.json({msg: 'El producto ha sido eliminado'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el producto') ;
    }
}