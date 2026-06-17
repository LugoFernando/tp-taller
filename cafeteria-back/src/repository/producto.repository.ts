import { prisma } from '../prisma.js';

export class ProductoRepository {

    async findAllProductos() {
        return await prisma.producto.findMany();
    }

    async findProductoById(id: number) {
        return await prisma.producto.findUnique({
            where: { id }
        });
    }

    async createProducto(data: {
        nombre: string,
        descripcion: string,
        clasificacion: string,
        precio: number
    }) {
        return await prisma.producto.create({
            data
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
        return await prisma.producto.update({
            where: { id },
            data
        });
    }

    async deleteProducto(id: number) {
        return await prisma.producto.delete({
            where: { id }
        });
    }

}