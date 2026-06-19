import {} from 'express';
import { ProductoRepository } from '../repository/producto.repository.js';
import { ProductoService } from '../services/producto.service.js';
const productoRepository = new ProductoRepository();
const productoService = new ProductoService(productoRepository);
export class ProductoController {
    constructor() { }
    getProductos = async (req, res) => {
        try {
            const nombre = req.query.nombre;
            const clasificacion = req.query.clasificacion;
            const filtros = {};
            if (nombre !== undefined)
                filtros.nombre = nombre;
            if (clasificacion !== undefined)
                filtros.clasificacion = clasificacion;
            const productos = await productoService.obtenerProductos(filtros);
            res.status(200).json(productos);
        }
        catch (error) {
            res.status(500).json({
                message: "Error al obtener los productos",
                error
            });
        }
    };
    getProductosAdmin = async (_req, res) => {
        try {
            const productos = await productoService.obtenerProductosAdmin();
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
                return res.status(400).json("ID invalido");
            }
            const producto = await productoService.obtenerProducto(id);
            return res.status(200).json(producto);
        }
        catch (error) {
            if (error.message === 'ProductoNoExiste') {
                return res.status(404).json({
                    message: "Producto no encontrado"
                });
            }
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
            res.status(400).json({
                message: error.message ?? "No se pudo crear el producto",
                error
            });
        }
    };
    actualizarProducto = async (req, res) => {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json("ID invalido");
        }
        try {
            const productoActualizado = await productoService.updateProducto(id, req.body);
            res.status(200).json(productoActualizado);
        }
        catch (error) {
            if (error.message === 'ProductoNoExiste') {
                return res.status(404).json({
                    message: 'Producto no encontrado',
                    error
                });
            }
            res.status(400).json({
                message: error.message ?? "No se pudo actualizar el producto",
                error
            });
        }
    };
    eliminarProducto = async (req, res) => {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json("ID invalido");
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