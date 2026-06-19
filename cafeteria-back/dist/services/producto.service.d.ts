import type { Producto } from "../models/producto.model.js";
import type { ProductoRepository } from "../repository/producto.repository.js";
export declare class ProductoService {
    private productoRepository;
    constructor(productoRepository: ProductoRepository);
    obtenerProductos(): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        clasificacion: string;
        precio: number;
    }[]>;
    obtenerProducto(id: number): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        clasificacion: string;
        precio: number;
    } | null>;
    crearProducto(producto: Producto): Promise<{
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
//# sourceMappingURL=producto.service.d.ts.map