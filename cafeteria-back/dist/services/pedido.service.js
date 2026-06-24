export class PedidoService {
    pedidoRepository;
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async crearPedido(usuarioId, input) {
        const items = input.items ?? [];
        if (items.length === 0) {
            throw new Error("CarritoVacio");
        }
        for (const item of items) {
            if (!item.productoId || item.cantidad < 1) {
                throw new Error("ItemInvalido");
            }
        }
        const productoIds = items.map((item) => item.productoId);
        const productos = await this.pedidoRepository.findProductosByIds(productoIds);
        for (const item of items) {
            const producto = productos.find((p) => p.id === item.productoId);
            if (!producto || !producto.activo) {
                throw new Error("ProductoNoDisponible");
            }
        }
        const total = items.reduce((sum, item) => {
            const producto = productos.find((p) => p.id === item.productoId);
            return sum + producto.precio * item.cantidad;
        }, 0);
        return await this.pedidoRepository.createPedido(usuarioId, items, productos, total);
    }
    async obtenerMisPedidos(usuarioId) {
        return await this.pedidoRepository.findPedidosByUsuario(usuarioId);
    }
    async obtenerPedido(id, usuarioId, esAdmin) {
        const pedido = await this.pedidoRepository.findPedidoById(id);
        if (!pedido) {
            throw new Error("PedidoNoExiste");
        }
        if (pedido.usuarioId !== usuarioId && !esAdmin) {
            throw new Error("NoAutorizado");
        }
        return pedido;
    }
    async obtenerPedidosAdmin() {
        return await this.pedidoRepository.findAllPedidosAdmin();
    }
}
//# sourceMappingURL=pedido.service.js.map