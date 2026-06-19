import type { Producto } from '../models/producto.model.js';
export declare class ProductoRepository {
    findAllProductos(filtros?: {
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
    findAllProductosAdmin(): Promise<{
        nombre: string;
        clasificacion: string;
        id: number;
        descripcion: string;
        precio: number;
        activo: boolean;
        imagen: string | null;
    }[]>;
    findProductoById(id: number): Promise<{
        nombre: string;
        clasificacion: string;
        id: number;
        descripcion: string;
        precio: number;
        activo: boolean;
        imagen: string | null;
    } | null>;
    createProducto(data: Producto): Promise<{
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
//# sourceMappingURL=producto.repository.d.ts.map