import type { PedidoItemInput } from "../models/pedido.model.js";
type ProductoPedido = {
    id: number;
    nombre: string;
    descripcion: string;
    clasificacion: string;
    precio: number;
    imagen: string | null;
};
export declare class PedidoRepository {
    findProductosByIds(ids: number[]): Promise<{
        nombre: string;
        clasificacion: string;
        id: number;
        descripcion: string;
        precio: number;
        activo: boolean;
        imagen: string | null;
    }[]>;
    createPedido(usuarioId: number, items: PedidoItemInput[], productos: ProductoPedido[], total: number): Promise<({
        usuario: {
            nombre: string;
            email: string;
            apellido: string;
        };
        items: {
            id: number;
            nombreSnapshot: string;
            descripcionSnapshot: string | null;
            clasificacionSnapshot: string | null;
            precioSnapshot: number;
            cantidad: number;
            imagenSnapshot: string | null;
            pedidoId: number;
            productoId: number | null;
        }[];
    } & {
        id: number;
        usuarioId: number;
        total: number;
        createdAt: Date;
    }) | null>;
    findPedidosByUsuario(usuarioId: number): Promise<({
        items: {
            id: number;
            nombreSnapshot: string;
            descripcionSnapshot: string | null;
            clasificacionSnapshot: string | null;
            precioSnapshot: number;
            cantidad: number;
            imagenSnapshot: string | null;
            pedidoId: number;
            productoId: number | null;
        }[];
    } & {
        id: number;
        usuarioId: number;
        total: number;
        createdAt: Date;
    })[]>;
    findPedidoById(id: number): Promise<({
        usuario: {
            nombre: string;
            id: number;
            email: string;
            apellido: string;
        };
        items: {
            id: number;
            nombreSnapshot: string;
            descripcionSnapshot: string | null;
            clasificacionSnapshot: string | null;
            precioSnapshot: number;
            cantidad: number;
            imagenSnapshot: string | null;
            pedidoId: number;
            productoId: number | null;
        }[];
    } & {
        id: number;
        usuarioId: number;
        total: number;
        createdAt: Date;
    }) | null>;
    findAllPedidosAdmin(): Promise<({
        usuario: {
            nombre: string;
            email: string;
            apellido: string;
        };
    } & {
        id: number;
        usuarioId: number;
        total: number;
        createdAt: Date;
    })[]>;
}
export {};
//# sourceMappingURL=pedido.repository.d.ts.map