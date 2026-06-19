import {} from 'express';
import { ProductoRepository } from '../repository/producto.repository.js';
import { ProductoService } from '../services/producto.service.js';
const productoRepository = new ProductoRepository();
const productoService = new ProductoService(productoRepository);
export class ProductoController {
    constructor() { }
    getProductos = async (req, res) => {
        try {
            const productos = await productoService.obtenerProductos();
            console.log(productos);
            res.status(200).json(productos);
        }
        catch (error) {
            res.status(500).json({
                message: "Error al obtener los productos",
                error
            });
        }
    };
    getProducto = async (req, res) => {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json("ID inválido");
            }
            const producto = await productoService.obtenerProducto(id);
            if (!producto) {
                return res.status(404).json({
                    message: "Producto no encontrado"
                });
            }
            return res.status(200).json(producto);
        }
        catch (error) {
            res.status(500).json({
                message: "No se pudo encontrar el producto",
                error
            });
        }
    };
    createProducto = async (req, res) => {
        try {
            const nuevoProducto = req.body;
            const producto = await productoService.crearProducto(nuevoProducto);
            res.status(201).json(producto);
        }
        catch (error) {
            res.status(500).json({
                message: "No se pudo crear el producto",
                error
            });
        }
    };
    actualizarProducto = async (req, res) => {
        const id = Number(req.params.id);
        const { nombre, descripcion, clasificacion, precio } = req.body;
        if (isNaN(id)) {
            return res.status(400).json("ID inválido");
        }
        try {
            const productoActualizado = await productoService.updateProducto(id, {
                nombre,
                descripcion,
                clasificacion,
                precio
            });
            res.status(200).json(productoActualizado);
        }
        catch (error) {
            res.status(500).json({
                message: "No se pudo actualizar el producto",
                error
            });
        }
    };
    eliminarProducto = async (req, res) => {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json("ID inválido");
        }
        try {
            await productoService.deleteProducto(id);
            res.status(204).send();
        }
        catch (error) {
            if (error.message === 'ProductoNoExiste') {
                return res.status(404).json({
                    message: 'Producto no encontrado',
                    error
                });
            }
            res.status(500).json({
                message: "No se pudo eliminar el producto",
                error
            });
        }
    };
}
//# sourceMappingURL=producto.controller.js.map