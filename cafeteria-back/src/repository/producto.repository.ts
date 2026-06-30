import { prisma } from '../prisma.js';
import type { Producto } from '../models/producto.model.js';
import type { Prisma } from '../prisma/client.js';

export class ProductoRepository {

    async findAllProductos(where : Prisma.productoWhereInput) {
        
        return await prisma.producto.findMany({
           where,
            orderBy: { nombre: 'asc' }
        });
    }

    async findAllProductosAdmin() {
        return await prisma.producto.findMany({
            orderBy: { id: 'desc' }
        });
    }

    async findProductoById(id: number) {
        return await prisma.producto.findUnique({
            where: { id }
        });
    }

    async createProducto(data: Producto) {
        return await prisma.producto.create({
            data: {
                nombre: data.nombre,
                descripcion: data.descripcion,
                clasificacion: data.clasificacion,
                precio: data.precio,
                activo: data.activo ?? true,
                imagen: data.imagen ?? null
            }
        });
    }

    async updateProducto(id: number, data: Partial<Producto>) {
        return await prisma.producto.update({
            where: { id },
            data, 
        });
    }

    async deleteProducto(id: number) {
        return await prisma.producto.delete({
            where: { id }
        });
    }

}
