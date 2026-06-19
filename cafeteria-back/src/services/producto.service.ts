import type { Producto } from "../models/producto.model.js";
import type { ProductoRepository } from "../repository/producto.repository.js";

export class ProductoService {

    constructor(private productoRepository: ProductoRepository) { }

    async obtenerProductos(filtros?: { nombre?: string; clasificacion?: string }) {
        return await this.productoRepository.findAllProductos(filtros);
    }

    async obtenerProductosAdmin() {
        return await this.productoRepository.findAllProductosAdmin();
    }

    async obtenerProducto(id: number) {
        const producto = await this.productoRepository.findProductoById(id);

        if (!producto) {
            throw new Error("ProductoNoExiste");
        }

        return producto;
    }

    async crearProducto(producto: Producto) {

        const { nombre, descripcion, clasificacion, precio } = producto;

        if (!nombre || typeof nombre !== "string") {
            throw new Error("El nombre es obligatorio");
        }

        if (!descripcion || typeof descripcion !== "string") {
            throw new Error("La descripcion es obligatoria");
        }

        if (!clasificacion || typeof clasificacion !== "string") {
            throw new Error("La clasificacion es obligatoria");
        }

        if (precio === undefined || isNaN(Number(precio))) {
            throw new Error("El precio debe ser un numero valido");
        }

        return await this.productoRepository.createProducto(producto);
    }

    async updateProducto(id: number, data: Partial<Producto>) {
        await this.obtenerProducto(id);
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
