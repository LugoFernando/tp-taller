export declare class ProductoRepository {
    findAllProductos(): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        clasificacion: string;
        precio: number;
    }[]>;
    findProductoById(id: number): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        clasificacion: string;
        precio: number;
    } | null>;
    createProducto(data: {
        nombre: string;
        descripcion: string;
        clasificacion: string;
        precio: number;
    }): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        clasificacion: string;
        precio: number;
    }>;
    updateProducto(id: number, data: {
        nombre: string;
        descripcion: string;
        clasificacion: string;
        precio: number;
    }): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        clasificacion: string;
        precio: number;
    }>;
    deleteProducto(id: number): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        clasificacion: string;
        precio: number;
    }>;
}
//# sourceMappingURL=producto.repository.d.ts.map