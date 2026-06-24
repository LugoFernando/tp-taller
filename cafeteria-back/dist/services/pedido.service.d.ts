import type { PedidoRepository } from "../repository/pedido.repository.js";
import type { CrearPedidoInput } from "../models/pedido.model.js";
export declare class PedidoService {
    private pedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    crearPedido(usuarioId: number, input: CrearPedidoInput): Promise<({
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
    obtenerMisPedidos(usuarioId: number): Promise<({
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
    obtenerPedido(id: number, usuarioId: number, esAdmin: boolean): Promise<{
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
    }>;
    obtenerPedidosAdmin(): Promise<({
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
//# sourceMappingURL=pedido.service.d.ts.map