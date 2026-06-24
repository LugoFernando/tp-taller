import { prisma } from "../prisma.js";
export class PedidoRepository {
    async findProductosByIds(ids) {
        return prisma.producto.findMany({
            where: { id: { in: ids } }
        });
    }
    async createPedido(usuarioId, items, productos, total) {
        return prisma.$transaction(async (tx) => {
            const pedido = await tx.pedido.create({
                data: { usuarioId, total }
            });
            for (const item of items) {
                const producto = productos.find((p) => p.id === item.productoId);
                await tx.pedido_item.create({
                    data: {
                        pedidoId: pedido.id,
                        productoId: producto.id,
                        nombreSnapshot: producto.nombre,
                        descripcionSnapshot: producto.descripcion,
                        clasificacionSnapshot: producto.clasificacion,
                        precioSnapshot: producto.precio,
                        imagenSnapshot: producto.imagen,
                        cantidad: item.cantidad
                    }
                });
            }
            return tx.pedido.findUnique({
                where: { id: pedido.id },
                include: {
                    items: true,
                    usuario: {
                        select: { nombre: true, apellido: true, email: true }
                    }
                }
            });
        });
    }
    async findPedidosByUsuario(usuarioId) {
        return prisma.pedido.findMany({
            where: { usuarioId },
            orderBy: { createdAt: "desc" },
            include: {
                items: true
            }
        });
    }
    async findPedidoById(id) {
        return prisma.pedido.findUnique({
            where: { id },
            include: {
                items: true,
                usuario: {
                    select: { id: true, nombre: true, apellido: true, email: true }
                }
            }
        });
    }
    async findAllPedidosAdmin() {
        return prisma.pedido.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                usuario: {
                    select: { nombre: true, apellido: true, email: true }
                }
            }
        });
    }
}
//# sourceMappingURL=pedido.repository.js.map