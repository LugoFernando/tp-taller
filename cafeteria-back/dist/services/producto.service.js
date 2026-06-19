export class ProductoService {
    productoRepository;
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async obtenerProductos(filtros) {
        return await this.productoRepository.findAllProductos(filtros);
    }
    async obtenerProductosAdmin() {
        return await this.productoRepository.findAllProductosAdmin();
    }
    async obtenerProducto(id) {
        const producto = await this.productoRepository.findProductoById(id);
        if (!producto) {
            throw new Error("ProductoNoExiste");
        }
        return producto;
    }
    async crearProducto(producto) {
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
    async updateProducto(id, data) {
        await this.obtenerProducto(id);
        return await this.productoRepository.updateProducto(id, data);
    }
    async deleteProducto(id) {
        try {
            return await this.productoRepository.deleteProducto(id);
        }
        catch (error) {
            if (error.code === "P2025") {
                throw new Error("ProductoNoExiste");
            }
            throw error;
        }
    }
}
//# sourceMappingURL=producto.service.js.map