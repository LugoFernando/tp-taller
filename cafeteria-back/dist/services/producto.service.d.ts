import type { Producto } from "../models/producto.model.js";
import type { ProductoRepository } from "../repository/producto.repository.js";
export declare class ProductoService {
    private productoRepository;
    constructor(productoRepository: ProductoRepository);
    obtenerProductos(filtros?: {
        nombre?: string;
        clasificacion?: string;
    }): Promise<{
        nombre: string;
        clasificacion: string;
        id: number;
        descripcion: string;
        precio: number;
        activo: boolean;
        imagen: string | null;
    }[]>;
    obtenerProductosAdmin(): Promise<{
        nombre: string;
        clasificacion: string;
        id: number;
        descripcion: string;
        precio: number;
        activo: boolean;
        imagen: string | null;
    }[]>;
    obtenerProducto(id: number): Promise<{
        nombre: string;
        clasificacion: string;
        id: number;
        descripcion: string;
        precio: number;
        activo: boolean;
        imagen: string | null;
    }>;
    crearProducto(producto: Producto): Promise<{
        nombre: string;
        clasificacion: string;
        id: number;
        descripcion: string;
        precio: number;
        activo: boolean;
        imagen: string | null;
    }>;
    updateProducto(id: number, data: Partial<Producto>): Promise<{
        nombre: string;
        clasificacion: string;
        id: number;
        descripcion: string;
        precio: number;
        activo: boolean;
        imagen: string | null;
    }>;
    deleteProducto(id: number): Promise<{
        nombre: string;
        clasificacion: string;
        id: number;
        descripcion: string;
        precio: number;
        activo: boolean;
        imagen: string | null;
    }>;
}
//# sourceMappingURL=producto.service.d.ts.map