import type { Producto } from "../models/producto.model.js";
import type { Prisma } from "../prisma/client.js";
import type { ProductoRepository } from "../repository/producto.repository.js";


export class ProductoService {

    constructor(private productoRepository: ProductoRepository) { }

    async obtenerProductos(filtros?: { nombre?: string; clasificacion?: string }) {
        const { nombre, clasificacion} = filtros ?? {};

        const where : Prisma.productoWhereInput = {
            activo: true,
            ...(clasificacion ? {clasificacion} : {}),
            ...(nombre ? {nombre: {contains: nombre,mode:'insensitive'}} : {})
        }
        return await this.productoRepository.findAllProductos(where);
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
        const dataForm: Partial<Producto> ={
            ...(data.nombre !== undefined && { nombre: data.nombre }),
            ...(data.descripcion !== undefined && { descripcion: data.descripcion }),
            ...(data.clasificacion !== undefined && { clasificacion: data.clasificacion }),
            ...(data.precio !== undefined && { precio: data.precio }),
            ...(data.activo !== undefined && { activo: data.activo }),
            ...(data.imagen !== undefined && { imagen: data.imagen })    
        }
        return await this.productoRepository.updateProducto(id, dataForm);
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
