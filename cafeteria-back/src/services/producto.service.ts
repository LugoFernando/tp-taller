import type { Producto } from "../models/producto.model.js";
import type { ProductoRepository } from "../repository/producto.repository.js";

export class ProductoService {

    constructor(private productoRepository: ProductoRepository) { }

    async obtenerProductos() {
        return await this.productoRepository.findAllProductos();
    }

    async obtenerProducto(id: number) {
        return await this.productoRepository.findProductoById(id);
    }

    async crearProducto(producto: Producto) {

        const { nombre, descripcion, clasificacion, precio } = producto;

        if (!nombre || typeof nombre !== "string") {
            throw new Error("El nombre es obligatorio");
        }

        if (!descripcion || typeof descripcion !== "string") {
            throw new Error("La descripción es obligatoria");
        }

        if (!clasificacion || typeof clasificacion !== "string") {
            throw new Error("La clasificación es obligatoria");
        }

        if (precio === undefined || isNaN(Number(precio))) {
            throw new Error("El precio debe ser un número válido");
        }

        return await this.productoRepository.createProducto({
            nombre,
            descripcion,
            clasificacion,
            precio
        });
    }

    async updateProducto(
        id: number,
        data: {
            nombre: string,
            descripcion: string,
            clasificacion: string,
            precio: number
        }
    ) {
        return await this.productoRepository.updateProducto(id, data);
    }

    async deleteProducto(id: number) {
        try {
            return await this.productoRepository.deleteProducto(id);
        } catch (error: any) {
            if (error.code === "P2025") {
                throw new Error("ProductoNoExiste");
            }

            throw error;
        }
    }

}