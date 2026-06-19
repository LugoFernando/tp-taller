import { prisma } from '../prisma.js';
export class ProductoRepository {
    async findAllProductos() {
        return await prisma.producto.findMany();
    }
    async findProductoById(id) {
        return await prisma.producto.findUnique({
            where: { id }
        });
    }
    async createProducto(data) {
        return await prisma.producto.create({
            data
        });
    }
    async updateProducto(id, data) {
        return await prisma.producto.update({
            where: { id },
            data
        });
    }
    async deleteProducto(id) {
        return await prisma.producto.delete({
            where: { id }
        });
    }
}
//# sourceMappingURL=producto.repository.js.map