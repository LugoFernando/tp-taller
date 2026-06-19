import { type Request, type Response } from 'express'
import { ProductoRepository } from '../repository/producto.repository.js';
import { ProductoService } from '../services/producto.service.js';
import type { Producto } from '../models/producto.model.js';

const productoRepository = new ProductoRepository();
const productoService = new ProductoService(productoRepository);

export class ProductoController {

    constructor() { }

    public getProductos = async (req: Request, res: Response) => {
        try {
            const nombre = req.query.nombre as string | undefined;
            const clasificacion = req.query.clasificacion as string | undefined;
            const productos = await productoService.obtenerProductos({ nombre, clasificacion });

            res.status(200).json(productos);

        } catch (error) {
            res.status(500).json({
                message: "Error al obtener los productos",
                error
            });
        }
    }

    public getProductosAdmin = async (_req: Request, res: Response) => {
        try {
            const productos = await productoService.obtenerProductosAdmin();
            res.status(200).json(productos);
        } catch (error) {
            res.status(500).json({
                message: "Error al obtener los productos",
                error
            });
        }
    }

    public getProducto = async (req: Request, res: Response) => {

        try {

            const id: number = Number(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json("ID invalido");
            }

            const producto = await productoService.obtenerProducto(id);

            return res.status(200).json(producto);

        } catch (error: any) {

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
    }

    public createProducto = async (req: Request, res: Response) => {

        try {

            const nuevoProducto: Producto = req.body;

            const producto = await productoService.crearProducto(nuevoProducto);

            res.status(201).json(producto);

        } catch (error: any) {

            res.status(400).json({
                message: error.message ?? "No se pudo crear el producto",
                error
            });

        }
    }

    public actualizarProducto = async (req: Request, res: Response) => {

        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json("ID invalido");
        }

        try {

            const productoActualizado =
                await productoService.updateProducto(id, req.body);

            res.status(200).json(productoActualizado);

        } catch (error: any) {

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
    }

    public eliminarProducto = async (req: Request, res: Response) => {

        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json("ID invalido");
        }

        try {

            await productoService.deleteProducto(id);

            res.status(204).send();

        } catch (error: any) {

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
    }

}
