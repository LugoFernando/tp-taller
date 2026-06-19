export class ProductoService {
    productoRepository;
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async obtenerProductos() {
        return await this.productoRepository.findAllProductos();
    }
    async obtenerProducto(id) {
        return await this.productoRepository.findProductoById(id);
    }
    async crearProducto(producto) {
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
    async updateProducto(id, data) {
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