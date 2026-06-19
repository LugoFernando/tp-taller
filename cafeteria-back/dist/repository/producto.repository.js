import { prisma } from '../prisma.js';
export class ProductoRepository {
    async findAllProductos(filtros) {
        const { nombre, clasificacion } = filtros ?? {};
        return await prisma.producto.findMany({
            where: {
                activo: true,
                ...(clasificacion ? { clasificacion } : {}),
                ...(nombre ? { nombre: { contains: nombre, mode: 'insensitive' } } : {})
            },
            orderBy: { nombre: 'asc' }
        });
    }
    async findAllProductosAdmin() {
        return await prisma.producto.findMany({
            orderBy: { id: 'desc' }
        });
    }
    async findProductoById(id) {
        return await prisma.producto.findUnique({
            where: { id }
        });
    }
    async createProducto(data) {
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
    async updateProducto(id, data) {
        return await prisma.producto.update({
            where: { id },
            data: {
                ...(data.nombre !== undefined && { nombre: data.nombre }),
                ...(data.descripcion !== undefined && { descripcion: data.descripcion }),
                ...(data.clasificacion !== undefined && { clasificacion: data.clasificacion }),
                ...(data.precio !== undefined && { precio: data.precio }),
                ...(data.activo !== undefined && { activo: data.activo }),
                ...(data.imagen !== undefined && { imagen: data.imagen })
            }
        });
    }
    async deleteProducto(id) {
        return await prisma.producto.delete({
            where: { id }
        });
    }
}
//# sourceMappingURL=producto.repository.js.map